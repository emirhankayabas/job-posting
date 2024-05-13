import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  jobList: [],
  jobDetail: {},
};

const jobSlice = createSlice({
  name: "job",
  initialState,
  reducers: {
    setJobList(state, action) {
      state.jobList = action.payload;
    },

    setJobDetail(state, action) {
      state.jobDetail = action.payload;
    },

    resetJob(state) {
      state.jobList = [];
      state.jobDetail = {};
    },
  },
});

export const { setJobList, setJobDetail, resetJob } = jobSlice.actions;
export default jobSlice.reducer;
