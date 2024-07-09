from datetime import datetime
from pydantic import BaseModel, validator
from typing import List
from .beers import BeerBase

class OrdersBase(BaseModel):
    session_id: str
    table_id: int
    total_price: int
    total_beers: int

class RoundBase(BaseModel):
    quantity: int
    beer: BeerBase
    total_price: int

class OrderBase(BaseModel):
    id: str
    table_number: int
    created_at: str
    total_price: int
    total_beers: int
    rounds: List[RoundBase]
    invoice: dict

    @validator('created_at', pre=True, always=True)
    def format_created_at(cls, v):
        if isinstance(v, datetime):
            return v.isoformat()
        return v




