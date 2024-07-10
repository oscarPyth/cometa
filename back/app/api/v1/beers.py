from fastapi import APIRouter, Depends
from app.schemas.beers import BeerList
from app.storage.repositories import RBeer
from app.dependencies import get_db
from typing import Annotated, List
from sqlalchemy.orm import Session

router = APIRouter()


@router.get("/", response_model=List[BeerList])
def get_beers(db: Annotated[Session, Depends(get_db)]):
    beer_repository = RBeer(db)
    beers = beer_repository.get_all()
    return beers
