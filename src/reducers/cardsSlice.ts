import { createSlice } from '@reduxjs/toolkit'

export const cardsSlice = createSlice({
  name: 'cards',
  initialState: {
    cards: [],
    selectedCards: [],
    foundCards: [],
  },
  reducers: {
    setCards: (state, action) => {
        if (action.payload.length === 0) {
            state.cards = [];
        } else {
            state.cards = action.payload;
        }
    },
    setSelectedCards: (state, action) => {
        if (action.payload.length === 0) {
            state.selectedCards = [];
        } else {
            state.selectedCards = [...state.selectedCards, action.payload];
        }
    },
    setFoundCards: (state, action) => {
        state.foundCards = [...state.foundCards, action.payload];
    },
  },
})
export const { setCards, setSelectedCards, setFoundCards } = cardsSlice.actions
export default cardsSlice.reducer