import { createSlice } from '@reduxjs/toolkit'

const currencySlice = createSlice ({
  name: 'currency',
  initialState: {
    valueUSD: 0,
    valueEUR: 0,
    coef: 1.07
  },
  reducers: {
    changeUSD: (state, action) => {
      state.valueUSD = Math.abs(action.payload);
      state.valueEUR = state.valueUSD * state.coef;
    },
    changeEUR: (state, action) => {
      state.valueEUR = Math.abs(action.payload);
      state.valueUSD = state.valueEUR / state.coef;
    }
  }
})

export const getUSDValue = (state) => {
  return state.currency.valueUSD;
};
export const getEURValue = (state) => {
  return state.currency.valueEUR;
};

export const { changeUSD, changeEUR } = currencySlice.actions
export default currencySlice.reducer