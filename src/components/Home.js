import React from "react";
import CustomCard from "./common/CustomCard";
import { useSelector, useDispatch } from "react-redux";

const Home = () => {
  const state = useSelector((state) => state.coivdReducer);
  let cardData = state.covidData.Global;
  console.log("data", cardData);
  return (
    <div>
      <header className="all-record">
        <h2>All Record Of The Day</h2>
      </header>
      <div
        style={{ margin: 20, display: "flex", justifyContent: "space-around" }}
      >
        <CustomCard
          title="All Cases"
          record={
            cardData?.TotalConfirmed ? cardData.TotalConfirmed : "loading..."
          }
          color="rgb(251 255 3 / 74%)"
        />
        <CustomCard
          title="All Deaths"
          record={cardData?.TotalDeaths ? cardData.TotalDeaths : "loading..."}
          color="rgb(212 58 15 / 68%)"
        />
        <CustomCard
          title="All Recovered"
          record={cardData?.TotalRecovered}
          color="rgb(37 235 77 / 65%)"
        />
      </div>
    </div>
  );
};
export default Home;
