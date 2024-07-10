from fastapi.testclient import TestClient
from main import app
from app.domain.beer import Beer


client = TestClient(app)

def test_get_beers(mocker):
    mock_items = [
        Beer(id=1, name="Beer 1", quantity=110, price=3222, image=""),
        Beer(id=2, name="Beer 2", quantity=52, price=4500, image="")
    ]

    mocker.patch("app.storage.repositories.beer.RBeer.get_all", return_value=mock_items)

    response = client.get("/beers")

    assert response.status_code == 200

    expected_response = [
        {"id": 1, "name": "Beer 1", "price": 3222, "quantity": 110, "image": "", "available": True},
        {"id": 2, "name": "Beer 2", "price": 4500, "quantity": 52, "image": "", 'available': True}
    ]
    assert response.json() == expected_response
