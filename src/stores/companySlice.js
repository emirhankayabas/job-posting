import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  companies: [],
};

const companySlice = createSlice({
  name: "company",
  initialState,
  reducers: {
    addCompany: (state, action) => {
      state.companies.push(action.payload);
    },
    removeCompany: (state, action) => {
      state.companies = state.companies.filter(
        (company) => company.id !== action.payload
      );
    },
    resetCompany: (state) => {
      state.companies = [];
    },
  },
});

export const { addCompany, removeCompany, resetCompany } = companySlice.actions;
export default companySlice.reducer;
