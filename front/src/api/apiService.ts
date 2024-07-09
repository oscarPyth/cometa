import apiClient from "./config"
import { BEERS, ORDERS } from "./endpoints";

export async function fetchGetBeers() {
  const url = BEERS;
  try {
    const response = await apiClient.get(url);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

export async function fetchGetOrders() {
  const url = ORDERS;
  try {
    const response = await apiClient.get(url);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}
export async function fetchGetRounds(session_id: string) {
  const url = ORDERS + "/" +session_id;
  try {
    const response = await apiClient.get(url);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}
  