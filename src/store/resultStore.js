import { create } from "zustand";

export const useResultStore = create((set) => ({
  orderActivated: 1,
  results: [],
  setOrderActivated: (newOrderActivated) => set({ orderActivated: newOrderActivated }),
  setResults: (newResults) => set({ results: newResults }) // Define a setter function for results
}))