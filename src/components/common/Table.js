import React from 'react'
import { useSelector } from "react-redux";


const Table = ({covidData}) => {
    // const state = useSelector((state) => {
    //     return state.coivdReducer;
    //   });
    //   let covidData = state.covidData;
      debugger
    return (
        <table>
            <thead>
                <tr>
                    <td>Counteries</td>
                    <td>Total Confirmed</td>
                    <td>Total Deaths</td>
                    <td>Total Recovered</td>
                </tr>
            </thead>
            <tbody>
                {covidData && covidData?.countries.map((data,index)=>{
                    return (
                        <tr key={index}>
                            <td>{data.Country}</td>
                            <td>{data.TotalConfirmed}</td>
                            <td>{data.TotalDeaths}</td>
                            <td>{data.TotalRecovered}</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}

export default Table
