import React, { useEffect, useState } from 'react'

const useFetch = (endpoint) => {
    const [data, setData]= useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const getUseFetch = async()=>{
        setIsLoading(true);
        try{
            const data = await fetch(endpoint);
            const result =  await data.json();
            setData(result);
            setIsLoading(false);

        }
        catch(error){
         setError(error)
        }
    }
useEffect(()=>{
getUseFetch();
},[endpoint])

  return  { data, isLoading, error }
  
}

export default useFetch
