import { useState, useEffect } from "react";
//our hook - takes in a url and 'options' - allows us to send the url and header info, like method etc.
//'options' will be an object.
const useFetch = (url, options) => {
  //loading state
  const [loading, setLoading] = useState(true);
  //set an error if we get one
  const [error, setError] = useState(null);
  //set the data, when we get it from our request
  const [data, setData] = useState(null);

  //useEffect to make data grab request on mount
  useEffect(() => {
    const fetchData = async () => {
      //try catch - remember this syntax, it's useful
      try {
        //standard await fetch method
        const response = await fetch(url, options);
        //grabs the response json data and stores it
        const data = await response.json();
        //set our new data into our state
        setData(data);
        //set loading state back to false
        setLoading(false);
      } catch (error) {
        //error handling - simple - sets our error state to the error we get if the request fails
        setError(error);
        setLoading(false);
      }
    };
    //runs our fetchData function
    fetchData();
  }, []);
  //return the stuff we've just made so we can use it when we import this custom hook
  return { data, loading, error };
};

export default useFetch;
