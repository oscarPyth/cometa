from pydantic import BaseModel


class BeerBase(BaseModel):
    name: str
    price: int


class BeerList(BeerBase):
    id: int
    quantity: int
