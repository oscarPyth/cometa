import { create } from 'zustand';
import { fetchGetBeers, fetchGetOrders, fetchGetRounds } from '../api/apiService'
import { Beer, AppState, Invoice } from './interfaces';


export const useStore = create<AppState>((set, get) => ({
  beers: [],
  beerCard: {},
  orders: [],
  rounds: {},
  invoice: {},
  getOrders: async () => {
    let orders = await fetchGetOrders()
    set({orders: orders})
  },
  chooseCard: (beer: Beer) => {
    set({beerCard: beer})
  },
  getBeers: async () => {
    let beers = await fetchGetBeers()
    set({beers: beers})
  },
  getRounds: async (session_id: string) => {
    let rounds = await fetchGetRounds(session_id)
    let { invoice } = rounds
    set({rounds: rounds, invoice: invoice})
  }
}));
