from datetime import datetime
from app.domain.beer import Beer
from app.domain.order import Round, Order


def test_round_creation():
    beer = Beer(id=1, name="Beer 1", price=3000, quantity=100, image="")
    round_instance = Round(id=1, beer=beer, quantity=10)

    assert round_instance.id == 1
    assert round_instance.beer == beer
    assert round_instance.quantity == 10
    assert round_instance.total_price == 30000
    assert str(round_instance) == "Beer 1 price 30000 10 3000"


def test_order_creation():
    created_at = datetime(2023, 7, 1)
    order = Order(id=1, table_number=1, created_at=created_at)

    assert order.id == 1
    assert order.table_number == 1
    assert order.created_at == created_at
    assert order.rounds == []


def test_add_round_to_order():
    created_at = datetime(2023, 7, 1)
    order = Order(id=1, table_number=1, created_at=created_at)
    beer = Beer(id=1, name="Beer 1", price=3000, quantity=100, image="")
    round_instance = Round(id=1, beer=beer, quantity=10)

    order.add_round(round_instance)

    assert len(order.rounds) == 1
    assert order.rounds[0] == round_instance


def test_order_total_price():
    created_at = datetime(2023, 7, 1)
    beer1 = Beer(id=1, name="Beer 1", price=3000, quantity=100, image="")
    beer2 = Beer(id=2, name="Beer 2", price=4000, quantity=50, image="")

    round1 = Round(id=1, beer=beer1, quantity=10)
    round2 = Round(id=2, beer=beer2, quantity=5)

    order = Order(id=1, table_number=1, created_at=created_at, rounds=[round1, round2])

    assert order.total_price == 50000


def test_order_total_beers():
    created_at = datetime(2023, 7, 1)
    beer1 = Beer(id=1, name="Beer 1", price=3000, quantity=100, image="")
    beer2 = Beer(id=2, name="Beer 2", price=4000, quantity=50, image="")

    round1 = Round(id=1, beer=beer1, quantity=10)
    round2 = Round(id=2, beer=beer2, quantity=5)

    order = Order(id=1, table_number=1, created_at=created_at, rounds=[round1, round2])

    assert order.total_beers == 15


def test_order_invoice():
    created_at = datetime(2023, 7, 1)
    beer1 = Beer(id=1, name="Beer 1", price=3000, quantity=100, image="")
    beer2 = Beer(id=2, name="Beer 2", price=4000, quantity=50, image="")

    round1 = Round(id=1, beer=beer1, quantity=10)
    round2 = Round(id=2, beer=beer2, quantity=5)

    order = Order(id=1, table_number=1, created_at=created_at, rounds=[round1, round2])
    print(order.invoice)
    expected_invoice = {
        'items': [
            {'name': 'Beer 1', 'total_price': 30000, 'quantity': 10},
            {'name': 'Beer 2', 'total_price': 20000, 'quantity': 5}
        ],
        'tax': 35000.0,
        'tip': 5000.0,
        'total': 90000.0,
        'sub_total': 50000
    }

    assert order.invoice == expected_invoice
