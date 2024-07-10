from fastapi import APIRouter, Depends
from app.storage.repositories import ROrder
from app.dependencies import get_db
from typing import Annotated, List
from sqlalchemy.orm import Session
from app.schemas.order import OrdersBase, OrderBase

router = APIRouter()


@router.get("/", response_model=List[OrdersBase])
def get_orders(db: Annotated[Session, Depends(get_db)]):
    order_repository = ROrder(db)
    orders = order_repository.get_all()
    return orders


@router.get("/{session_id}", response_model=OrderBase)
def get_rounds_by_order(session_id: str, db: Annotated[Session, Depends(get_db)]):
    order_repository = ROrder(db)
    orders = order_repository.get_order_by_session(session_id=session_id)
    return orders
