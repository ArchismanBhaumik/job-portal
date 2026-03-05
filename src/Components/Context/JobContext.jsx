import { createContext, useState } from "react";
import Jobs from "../../const";

export const JobContext = createContext();

const JobProvider = ({ children }) => {
  const [jobs, setJobs] = useState(Jobs);
  const [unApprovedJobs,setUnApprovedJobs] = useState([]);

  return (
    <JobContext.Provider value={{ jobs, setJobs, unApprovedJobs ,setUnApprovedJobs }}>
      {children}
    </JobContext.Provider>
  );
};

export default JobProvider;