import { createSlice } from '@reduxjs/toolkit';
export const topicsSlice = createSlice({
    name: "topics",
    initialState: {
        topics: {}
    },
    reducers: {
        addTopic: (state, action) => {
            const { id, name, icon } = action.payload;
            state.topics = {
                ...state.topics,
                [id]: {
                    id: id,
                    name: name,
                    icon: icon,
                    quizIds: []
                }
            }
        },
        addQuizIds: (state, action) => {
            const { id, topicId } = action.payload;
            state.topics[topicId].quizIds.push(id)
        }
    }
})
export const selectTopics = (state) => state.topics.topics;
export const showAllState = (state) => state;
export const { addTopic, addQuizIds } = topicsSlice.actions;
export default topicsSlice.reducer;