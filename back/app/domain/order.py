from datetime import datetime
from typing import List
from .beer import Beer
from functools import reduce


class Round:
    def __init__(self, id: int, beer: Beer, quantity: int):
        self.id = id
        self.beer = beer
        self.quantity = quantity

    @property
    def total_price(self):
        return int(self.beer.price) * int(self.quantity)

    def __str__(self):
        return (
            self.beer.name
            + " price "
            + str(self.total_price)
            + " "
            + str(self.quantity)
            + " "
            + str(self.beer.price)
        )


class Order:
    def __init__(
        self,
        id: int,
        table_number: int,
        created_at: datetime,
        rounds: List[Round] = None,
    ):
        self.id = id
        self.table_number = table_number
        self.created_at = created_at
        self.rounds = rounds or []

    def add_round(self, round: Round):
        self.rounds.append(round)

    @property
    def total_price(self) -> int:
        return reduce((lambda x, y: x + y.total_price), self.rounds, 0)

    @property
    def total_beers(self) -> int:
        return reduce((lambda x, y: x + y.quantity), self.rounds, 0)

    @property
    def invoice(self) -> dict:
        items = {}
        for round in self.rounds:
            if round.beer.name not in items:
                items[round.beer.name] = {"quantity": 0, "total_price": 0}
            items[round.beer.name]["total_price"] += round.total_price
            items[round.beer.name]["quantity"] += round.quantity
        items = [
            {
                "name": key,
                "total_price": value["total_price"],
                "quantity": value["quantity"],
            }
            for key, value in items.items()
        ]
        tax = self.total_price * 0.7
        tip = self.total_price * 0.1
        total = self.total_price + tax + tip
        response = {
            "items": items,
            "tax": tax,
            "tip": tip,
            "total": total,
            "sub_total": self.total_price,
        }
        return response
