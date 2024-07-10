class Beer:
    def __init__(self, id: int, name: str, price: float, quantity: int, image: str):
        self.id = id
        self.name = name
        self.price = price
        self.quantity = quantity
        self.image = image

    @property
    def available(self):
        return self.quantity > 0
