import axios from "axios";
import { useEffect, useState } from "react";

const UseFetch=(url:any)=>{
    const[data,setData]=useState([])
    useEffect(()=>{
            const fetchData = async () => {
            const response= await axios.get(url)
       console.log(response.data)
       setData(response.data)
        }
      fetchData()  
    },[url])
    return{data} 
}
export default UseFetch;