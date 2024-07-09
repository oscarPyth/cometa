import { create } from 'zustand';
import { fetchGetBeers, fetchGetOrders, fetchGetRounds } from '../api/apiService'
import { Beer, AppState } from './interfaces';


export const useStore = create<AppState>((set) => ({
  beers: [],
  beerCard: {},
  orders: [],
  rounds: {},
  invoice: {},
  getOrders: async () => {
    const orders = await fetchGetOrders()
    set({orders: orders})
  },
  chooseCard: (beer: Beer) => {
    set({beerCard: beer})
  },
  getBeers: async () => {
    const beers = await fetchGetBeers()
    set({beers: beers})
  },
  getRounds: async (session_id: string) => {
    const rounds = await fetchGetRounds(session_id)
    const { invoice } = rounds
    set({rounds: rounds, invoice: invoice})
  }
}));
