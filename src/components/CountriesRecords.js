import React from "react";
import { useSelector } from "react-redux";
import {Table} from 'antd'
export const CountriesRecords = () => {
  const columns = [
    {
      title: "Country",
      dataIndex: "Country",
      key: "Country",
    },
    {
      title: "Total Confirmed",
      dataIndex: "TotalConfirmed",
      key: "TotalConfirmed",
    },
    {
      title: "Total Deaths",
      dataIndex: "TotalDeaths",
      key: "TotalDeaths",
    },
    {
      title: "Total Recovered",
      dataIndex: "TotalRecovered",
      key: "TotalRecovered",
    },
  ];
  const state = useSelector((state) => {
    return state.coivdReducer;
  });
  let covidData = state.covidData;
  debugger
  return (
    <div>
     <Table dataSource={covidData?.Countries} columns={columns}/>
    </div>
  );
};
export default CountriesRecords;
