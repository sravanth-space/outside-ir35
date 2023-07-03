import { useEffect } from "react";
import { StatsContainer, ChartsContainer } from "../../components";
import { useDispatch, useSelector } from "react-redux";
import React from "react";
import { RootState } from "../../store";
import { showStats } from "../../features/allJobs/allJobsSlice";

const Stats = () => {
  const { monthlyApplications } = useSelector(
    (store: RootState) => store.allJobs
  );

  const dispatch = useDispatch<any>();
  useEffect(() => {
    dispatch(showStats());
  }, []);
  return (
    <>
      <StatsContainer />
      {monthlyApplications.length > 0 && <ChartsContainer />}
    </>
  );
};
export default Stats;
