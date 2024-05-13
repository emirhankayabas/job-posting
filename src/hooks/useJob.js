import { useDispatch, useSelector } from "react-redux";
import { setJobList, setJobDetail, resetJob } from "~/stores/jobSlice";

const useJob = () => {
  const dispatch = useDispatch();
  const jobLists = useSelector((state) => state.job.jobList);
  const jobDetails = useSelector((state) => state.job.jobDetail);

  const handleSetJobList = (data) => {
    dispatch(setJobList(data));
  };

  const handleResetJob = () => {
    dispatch(resetJob());
  };

  const handleSetJobDetail = (data) => {
    dispatch(setJobDetail(data));
  };

  return {
    jobLists,
    jobDetails,
    setJobList: handleSetJobList,
    setJobDetails: handleSetJobDetail,
    resetJob: handleResetJob,
  };
};

export default useJob;
