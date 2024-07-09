export interface Beer {
    name: string
    price: number
    id: number
    quantity: number
    image: string
  }
  
export interface Order {
    session_id: string
    table_id: number
    total_price: number
    total_beers: number
}

export interface Round {
    quantity: number
    total_price: number
    table_number: string
    beer: {
        name: string
        price: number
    }
}

export interface RoundList {
    id: string
    create_at: string
    total_price: number
    total_beers: number
    table_number: number
    rounds: Array<Round>
    
}
export interface Invoice {
    items: Array<{
        name: string
        total_price: number
        quantity: number
    }>
    tax: number
    tip: number
    total: number
    sub_total: number
} 

export  interface AppState {
    invoice: Invoice | {};
    beers: Array<Beer>; 
    beerCard: Beer | {};
    chooseCard: (beer: Beer) => void;
    getBeers: () => Promise<void>;
    orders: Array<Order>
    getOrders: () => Promise<void>;
    rounds: RoundList | {}
    getRounds: (sessionId: string) => Promise<void>;
  }