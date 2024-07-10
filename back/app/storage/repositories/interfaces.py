from abc import ABC, abstractmethod
from typing import Generic, TypeVar, List

T = TypeVar("T")


class Repository(ABC, Generic[T]):

    def __init__(self, session):
        self.session = session

    @abstractmethod
    def get_by_id(self, id: int) -> T:
        pass

    @abstractmethod
    def get_all(self) -> List[T]:
        pass

    @abstractmethod
    def save(self, entity: T) -> None:
        pass

    @abstractmethod
    def delete(self, id: int) -> None:
        pass
