from sqlalchemy import Integer, ForeignKey
from sqlalchemy.orm import relationship, Mapped, mapped_column
from app.storage.db import Base
import uuid


class Beer(Base):
    __tablename__ = "beers"

    id: Mapped[int] = mapped_column(primary_key=True)
    name: Mapped[str]
    amount: Mapped[int]
    price: Mapped[float]
    image: Mapped[str]

    orders: Mapped[list["Order"]] = relationship("Order", back_populates="beer")


class Order(Base):
    __tablename__ = "orders"

    id: Mapped[int] = mapped_column(primary_key=True, index=True)
    session_id: Mapped[str] = mapped_column(default=lambda: str(uuid.uuid4()))
    beer_id: Mapped[int] = mapped_column(Integer, ForeignKey("beers.id"))
    table_id: Mapped[int] = mapped_column(Integer, ForeignKey("tables.id"))
    quantity: Mapped[int]
    status: Mapped[bool] = mapped_column(default=True)

    beer: Mapped["Beer"] = relationship("Beer", back_populates="orders")
    table: Mapped["Table"] = relationship("Table", back_populates="orders")


class Table(Base):
    __tablename__ = "tables"

    id: Mapped[int] = mapped_column(primary_key=True, index=True)
    number: Mapped[str]

    orders: Mapped[list["Order"]] = relationship("Order", back_populates="table")
