import pytest
from fastapi.testclient import TestClient
from unittest.mock import MagicMock
from main import app
from dataclasses import dataclass
from typing import Optional

from app.storage.models import Order as ORMOrder

client = TestClient(app)

@dataclass
class BOC:
    pass

@dataclass
class OOC:
    session_id: Optional[str] = None
    beer: Optional[BOC] = None
    beer_id: Optional[int] = None
    table_id: Optional[int] = None
    quantity: Optional[int] = None
    status: Optional[bool] = None
    total_beers: Optional[int] = None
    total_price: Optional[int] = None

@pytest.fixture
def mock_order_class():
    return OOC

@pytest.fixture
def mock_beer_class():
    return BOC

def test_get_orders(mocker, mock_order_class):

    mock_orders = [
        mock_order_class(session_id="session1", table_id=1, total_beers=12, total_price=50000),
        mock_order_class(session_id="session2", table_id=2, total_beers=20, total_price=60000)
    ]

    mocker.patch("app.storage.repositories.ROrder.get_all", return_value=mock_orders)

    response = client.get("/orders")
    print(response)
    assert response.status_code == 200
    print(response.json())

    expected_response = [
        {'session_id': 'session1', 'table_id': 1, 'total_price': 50000, 'total_beers': 12},
        {'session_id': 'session2', 'table_id': 2, 'total_price': 60000, 'total_beers': 20}
    ]

    assert response.json() == expected_response
