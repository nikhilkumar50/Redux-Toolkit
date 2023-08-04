import { createAction, createReducer } from '@reduxjs/toolkit'

export const increment = createAction('reward/increment');
export const incrementByAmount = createAction('reward/incrementByAmout');

const initialState = {
    price: 15,
  }
const rewardReducer = createReducer(initialState, (builder) => {
    builder
      .addCase(increment, (state, action) => {
        state.price++
      })
      .addCase(incrementByAmount, (state, action) => {
        state.price+=action.payload
      })
     
  })

export default rewardReducer  