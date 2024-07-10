from typing import List

from .interfaces import Repository
from app.domain.beer import Beer
from app.storage.models import Beer as ORMBeer


class IBeer(Repository[Beer]):
    pass


class RBeer(IBeer):

    def get_by_id(self, id: int) -> Beer:
        beer = self.session.query(ORMBeer).filter_by(id=id).one()
        return Beer(id=beer.id, name=beer.name, price=beer.price)

    def get_all(self) -> List[Beer]:
        beers = self.session.query(ORMBeer).all()
        return [
            Beer(
                id=beer.id,
                name=beer.name,
                price=beer.price,
                quantity=beer.amount,
                image=beer.image,
            )
            for beer in beers
        ]

    def save(self, entity: Beer) -> None:
        pass

    def delete(self, id: int) -> None:
        pass
