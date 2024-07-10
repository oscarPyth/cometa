from fastapi import FastAPI
from app.api.v1 import beers
from app.storage.db import engine
from app.storage.models import Base
from app.api.v1 import orders
from fastapi.middleware.cors import CORSMiddleware

#Base.metadata.create_all(bind=engine)

app = FastAPI()

origins = [
    "http://localhost",
    "http://localhost:3000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(beers.router, prefix="/beers", tags=["beers"])
app.include_router(orders.router, prefix="/orders", tags=["orders"])
