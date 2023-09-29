import { createSlice } from '@reduxjs/toolkit';

export const quizzesSlice = createSlice({
    name: "quizzes",
    initialState: {
        quizzes: {
        }
    },
    reducers: {
        addQuiz: (state, action) => {
            const { id, name, topicId, cardIds } = action.payload;
            state.quizzes = {
                ...state.quizzes,
                [id]: {
                    id,
                    name,
                    topicId,
                    cardIds
                }
            }
            console.log("check 2");
        }
    }
});
export const selectQuizzes = state => state.quizzes.quizzes;
export const { addQuiz } = quizzesSlice.actions;
export default quizzesSlice.reducer;