import { useDispatch, useSelector } from "react-redux";
import { addCompany, removeCompany, resetCompany } from "~/stores/companySlice";

const useCompany = () => {
  const dispatch = useDispatch();
  const companies = useSelector((state) => state.company.companies);

  const handleAddCompany = (company) => {
    dispatch(addCompany(company));
  };

  const handleResetCompany = () => {
    dispatch(resetCompany());
  };

  const handleRemoveCompany = (companyId) => {
    dispatch(removeCompany(companyId));
  };

  return {
    companies,
    addCompany: handleAddCompany,
    removeCompany: handleRemoveCompany,
    resetCompany: handleResetCompany,
  };
};

export default useCompany;
