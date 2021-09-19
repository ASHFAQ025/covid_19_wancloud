import axios from "axios";
export const getAllRecords = () => {
  return (dispatch) => {
    dispatch(loading(true));
    axios
      .get("https://api.covid19api.com/summary")
      .then((res) => {
        if (res.data) {
          dispatch(loading(false));
          dispatch({ type: "GET_DATA", payload: res.data });
        }
      })
      .catch((err) => {
        dispatch(loading(false));
        console.log("err", err.message);
      });
  };
};

const loading = (payload) => {
  return { type: "loading...", payload };
};
