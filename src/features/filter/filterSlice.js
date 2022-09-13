const { createSlice } = require("@reduxjs/toolkit");
const initialState = {
    tags: [],
    search:""
};


const filterSlice = createSlice({
    name: "filter",
    initialState,
    reducers:{
        tagSeleced:(state,action)=>{
            state.tags.push(action.payload)
        },
        tagRemoved:(state,action)=>{
            const indexToRemove = state.tags.indexOf(action.payload)
            if(indexToRemove !== -1){
                state.tags.splice(indexToRemove,1)
            }
        },
        searched:(state,action)=>{
            state.search = action.payload
        }
    }
});

export default filterSlice.reducer;
export const {tagSeleced,tagRemoved,searched} = filterSlice.actions
