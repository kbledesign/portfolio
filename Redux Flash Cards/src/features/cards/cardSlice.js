import { createSlice } from '@reduxjs/toolkit';

export const cardSlice = createSlice({
    name: 'cards',
    initialState: {
        cards: {},
    },
    reducers: {
        addCard: (state, action) => {
            const { id, front, back } = action.payload;
            state.cards[id] = {
                id,
                front,
                back,
            };
        },
    },
});

export const selectCardsState = (state) => state.cards.cards;
export const selectCardById = (cardId) => (state) => {
    const allCards = selectCardsState(state);
    return allCards[cardId];
};

export const { addCard } = cardSlice.actions;
export default cardSlice.reducer;
