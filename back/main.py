from fastapi import FastAPI
from app.api.v1 import beers
from app.storage.db import engine
from app.storage.models import Base
from app.api.v1 import orders

Base.metadata.create_all(bind=engine)

app = FastAPI()

app.include_router(beers.router, prefix="/beers", tags=["beers"])
app.include_router(orders.router, prefix="/orders", tags=["orders"])
