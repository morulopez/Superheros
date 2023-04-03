import { useState,useEffect } from "react";
import { getHeroes } from "../../../services/heroes";

const HeroesFetch = () =>{
    const [dataHeroes,setDataHeroes] = useState([]);
    const [isFetching,setIsFetching] = useState(true);
    useEffect(()=>{
        getHeroes().then(res=>{
            setDataHeroes(res)
        })
        .finally(()=>{
            setIsFetching(false);
        })
    },[])
    return {dataHeroes,isFetching};
}

export default HeroesFetch;