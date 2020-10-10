import React, { useEffect, useState } from "react";
import defaultAxios from "axios";

const useAxiosHook = (opt, axiosInstance = defaultAxios) => {
  const [state, setState] = useState({
    loading: true,
    error: null,
    data: null
  });

  const [trigger, setTrigger] = useState(0);

  if (!opt.url) {
    return;
  }

  const reFetch = () => {
    setState({
      ...state,
      loading: true
    });
    setTrigger(Date.now());
  };

  useEffect(() => {
    axiosInstance(opt)
      .then((data) => {
        setState({
          ...state,
          loading: false,
          data
        });
      })
      .catch((error) => {
        setState({ ...state, loading: false, error });
      });
  }, [trigger]);

  return { ...state, reFetch };
};

const UseAxios = () => {
  const { loading, data, error, reFetch } = useAxiosHook({
    url:
      "https://cors-anywhere.herokuapp.com/https://yts.am/api/v2/list_movies.json"
  });
  // console.log(
  //   `Loading : ${loading} \nError : ${error} \nData : ${JSON.stringify(data)}`
  // );
  return (
    <div>
      <h1>{data && data.status}</h1>
      <button onClick={reFetch}> Button </button>
    </div>
  );
};

export default UseAxios;
