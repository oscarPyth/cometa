from typing import List

from .interfaces import Repository, T
from app.domain.order import Order, Round
from app.domain.beer import Beer
from app.storage.models import Order as ORMOrder, Beer as ORMBeer
from sqlalchemy import func, select



class IOrder(Repository[Order]):
    pass

class ROrder(IOrder):

    def get_order_by_session(self, session_id: str) -> Order:
        orders = self.session.query(ORMOrder).filter_by(session_id=session_id).all()

        order_domain = Order(
            id=orders[0].session_id,
            created_at=orders[0].created_at,
            table_number=orders[0].table_id
        )

        for order in orders:
            beer = Beer(
                id=order.beer.id,
                quantity=order.beer.amount,
                name=order.beer.name,
                price=order.beer.price,
                image=order.beer.image
            )
            round = Round(beer=beer,id=order.id, quantity=order.quantity)
            order_domain.add_round(round)
        print(order_domain.invoice)
        return order_domain

    def get_by_id(self, id: int) -> Order:
        beer = self.session.query(ORMOrder).filter_by(id=id).one()
        return Beer(id=beer.id, name=beer.name, price=beer.price)

    def get_all(self) -> List[ORMOrder]:
        orders = self.session.query(
            ORMOrder.session_id,
            ORMOrder.table_id,
            func.sum(ORMOrder.quantity).label('total_beers'),
            func.sum(ORMOrder.quantity * ORMBeer.price).label('total_price')
        ).join(ORMBeer, ORMOrder.beer_id == ORMBeer.id).group_by(ORMOrder.session_id, ORMOrder.table_id).all()
        return orders

    def save(self, entity: Order) -> None:
        pass

    def delete(self, id: int) -> None:
        pass