import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    searchKey : ''
}

const booksSlice = createSlice({
    name : 'books',
    initialState,
    reducers : {
        searchFiltered : (state, action) => {
            state.searchKey = action.payload?.toLowerCase() || ""
        }
    }

})

export const { searchFiltered } = booksSlice.actions
export default booksSlice.reducer