import { createSlice } from "@reduxjs/toolkit";

const trainer = createSlice({
    name: 'trainer',
    initialState: '',
    reducers: {
        setTrainer: (_state, action) => action.payload,
    }
} );

// console.log(trainer);

export const {setTrainer} = trainer.actions;

export default trainer.reducer;