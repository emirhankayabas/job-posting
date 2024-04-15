import { get, post } from "./request";

export const getNewJobPostings = (data) => post("/job-postings/new", data);
export const getJobPostings = () => get("/job-postings");
export const getJobPostingsById = (id) => get(`/job-postings/${id}`);
export const googleLogin = (data) => post("/auth/google", data);
export const emailRegister = (data) => post("/auth/register", data);
export const emailLogin = (data) => post("/auth/login", data);
export const getNewCompany = (data) => post("/companys/new", data);