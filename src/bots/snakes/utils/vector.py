import math


class Vector(object):
    def __init__(self, x, y):
        self.x = x
        self.y = y
        self._mag = None

    def direction(self):
        return {
            (0, -1): "up",
            (0, 1): "down",
            (1, 0): "right",
            (-1, 0): "left",
        }.get((self.x, self.y))

    @property
    def magnitude(self):
        if self._mag is None:
            self._mag = math.sqrt(self.x * self.x + self.y * self.y)
        return self._mag

    def neighbours(self):
        return [self + d for d in [up, down, left, right]]

    def is_neighbour(self, p):
        for n in self.neighbours():
            if n == p:
                return True
        return False

    def farthest(self, others):
        f = None
        f_dist = None
        for other in others:
            dist = (other - self).magnitude
            if f is None or dist > f_dist:
                f = other
                f_dist = dist
        return f

    def closest(self, others):
        f = None
        f_dist = None
        for other in others:
            dist = (other - self).magnitude
            if f is None or dist < f_dist:
                f = other
                f_dist = dist
        return f

    def __repr__(self):
        return self.__unicode__()

    def __unicode__(self):
        return "{}".format(self.__str__())

    def __str__(self):
        return "({}, {})".format(self.x, self.y)

    def __hash__(self):
        return id(self.__str__())

    @property
    def key(self):
        return "{}_{}".format(self.x, self.y)

    def __add__(self, other):
        return Vector(x=self.x + other.x, y=self.y + other.y)

    def __sub__(self, other):
        return Vector(x=self.x - other.x, y=self.y - other.y)

    def __eq__(self, other):
        if self.x != other.x:
            return False
        if self.y != other.y:
            return False
        return True

    def __ne__(self, other):
        return not self == other


up = Vector(0, -1)
down = Vector(0, 1)
right = Vector(1, 0)
left = Vector(-1, 0)
noop = Vector(0, 0)
directions = [up, down, left, right]
