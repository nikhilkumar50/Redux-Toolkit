import { createAction, createSlice } from '@reduxjs/toolkit'

const initialState = {
  price: 0,
}

const incrementByAmount = createAction('account/incrementByAmount')

export const bonusSlice = createSlice({
  name: 'bonus',
  initialState,
  reducers: {
    increment: (state) => {
      state.price += 1   //immer
    },
  },
  extraReducers:(builder)=>{
     builder.addCase(incrementByAmount,(state,action)=>{
        if(action.payload>=100){
            state.price+=1;
        }   
     })
  }
})

// Action creators are generated for each case reducer function
export const { increment } = bonusSlice.actions

export default bonusSlice.reducer