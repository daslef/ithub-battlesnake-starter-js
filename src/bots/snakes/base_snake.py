import random
from .utils.game_state import GameState


class BaseSnake(object):
    HUNGER_THRESHOLD = 30
    DIFFICULTY = 8

    def bad_move(self, move, gs):
        if move is None:
            return True
        coord = gs.me.head + move
        if gs.me.neck == coord:
            return True
        if not gs.is_empty(coord) and coord not in gs.all_tails:
            return True
        if coord in gs.possible_death_coords:
            return True
        return False

    def death_move(self, move, gs):
        if move is None:
            return True
        coord = gs.me.head + move
        if gs.me.neck == coord:
            return True
        if not gs.is_empty(coord) and coord not in gs.all_tails:
            return True
        return False

    def risky_move(self, move, gs):
        if move is None:
            return True
        coord = gs.me.head + move
        if coord in gs.possible_death_coords:
            return True
        return False

    def payload_to_game_state(self, payload):
        return GameState(payload)

    def color(self):
        def r():
            return random.randint(0, 255)

        return "#%02X%02X%02X" % (r(), r(), r())

    def name(self):
        return "snake_%d" % self.DIFFICULTY

    def move(self, gamestate):
        raise NotImplementedError(
            "this should be overridden on implementations of snakes"
        )

    def end(self, details):
        pass

    def get_best_move(self, gamestate, options):
        move_response = {}

        def get_move(f, name):
            if f not in move_response:
                move_response[name] = f(gamestate)
            return move_response[name]

        for f, name in options:
            move = get_move(f, name)
            if move is None:
                continue
            if self.death_move(move, gamestate):
                continue
            if self.risky_move(move, gamestate):
                continue
            return move, name

        for f, name in options:
            move = get_move(f, name)
            if self.risky_move(move, gamestate):
                continue
            return move, name

        f, name = options[0]
        return get_move(f, name)
