import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import ICassette from "../../types/ICassette.ts";
import IEditCassette from "../../types/IEditCassette.ts";
import IRemoveCassette from "../../types/IRemoveCassete.ts";

interface ICassettesArray {
    cassettes: ICassette[];
}

const initialCassette: ICassette = {
    amount: 10,
    denomination: 200,
    isWorked: true,
}

const initialState: ICassettesArray = {
    cassettes: [
        {
            amount: 10,
            denomination: 500,
            isWorked: true,
        },
        {
            amount: 10,
            denomination: 200,
            isWorked: true,
        }, {
            amount: 10,
            denomination: 100,
            isWorked: true,
        }
    ]
};



const cassettesSlice = createSlice({
    name: "cassettes",
    initialState,
    reducers: {
        addCassette: (state) => {
            state.cassettes.push(initialCassette);
        },
        editCassette: (state, action: PayloadAction<IEditCassette>) => {
            state.cassettes[action.payload.cassetteIdx] = action.payload.cassette;
        },
        removeCassette: (state, action: PayloadAction<IRemoveCassette>) => {
            state.cassettes = state.cassettes.filter((_, index) => index != action.payload.cassetteIdx)
        },
        setNumberCassette: (state, action: PayloadAction<number>) => {
            state.cassettes = Array(action.payload).fill(initialCassette);
        },
    },
});

export const {addCassette, editCassette, removeCassette, setNumberCassette} = cassettesSlice.actions;
export default cassettesSlice.reducer;
