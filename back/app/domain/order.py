from datetime import datetime
from typing import List
from .beer import Beer
from functools import reduce


class Round:
    def __init__(self, id:int, beer: Beer, quantity: int):
        self.id = id
        self.beer = beer
        self.quantity = quantity
        self.total_price = self.get_total_price()

    def get_total_price(self):
        return int(self.beer.price) * int(self.quantity)

    def __str__(self):
        return self.beer.name + " price " + str(self.total_price) + " " +str(self.quantity) + " " + str(self.beer.price)

class Order:
    def __init__(self, id: int, table_number: int, created_at: datetime, rounds: List[Round] = None):
        self.id = id
        self.table_number = table_number
        self.created_at = created_at
        self.rounds = rounds or []
        self.total_price = 0
        self.claculate_total_price()

    def add_round(self, round: Round):
        self.rounds.append(round)
        self.claculate_total_price()

    def claculate_total_price(self) -> int:
        self.total_price = reduce((lambda x, y: x + y.total_price), self.rounds, 0)
