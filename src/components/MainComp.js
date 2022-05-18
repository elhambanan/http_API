import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useLocation} from "react-router-dom";
import Character from "./Charatcter";
import FilterDataComp from "./FilterComp";
import PaginateComp from "./PaginateComp";
import SearchBar from "./SearchComp";
import { getAllCharacters} from "../services/getAllCharactersServices";

const MainComp = () => {
    const [listedData, setListedData] = useState(null);
    const [error, setError] = useState(false);


    const queryString = require('query-string');
    let location = useLocation();
    const pageNum = location.search;

    const query = queryString.parse(location.search)
    console.log(location, query)
  
    useEffect(()=>{
        // axios.get(`https://rickandmortyapi.com/api/character/${location.search}`)
        //      .then((res) => { 
        //         setListedData(res.data.results)
        //     })
        //      .catch((err) => console.log(err))
        getCharacters();
    },[]);
    async function getCharacters() {
        try {
            const response = await getAllCharacters(pageNum);
            setListedData(response.data.results)
        } catch (error) {
            console.log(error)
            setError(true)
        }
    }

    const selectDataHandler = (id) => {
        console.log(id)
    }
    const selectPageHandler = (page) => {
        axios.get(`https://rickandmortyapi.com/api/character/${page}`)
             .then((res) => setListedData(res.data.results)
             .catch((err) => console.log(err))
             )
    }
    const filterHandler = (e) => {
        if (e.target.value === ""){
            axios.get(`https://rickandmortyapi.com/api/character/${location.search}`)
             .then((res) => { setListedData(res.data.results)})
             .catch((err) => console.log(err)) 
        }else {
            axios.get(`https://rickandmortyapi.com/api/character/${location.search}`)
                 .then((res) => setListedData(res.data.results.filter( d => d.status === e.target.value))
                 .catch((err) => console.log(err))
                 )
        }   
    }
    const SearchHandler = (e) => {
        console.log(e.target.value)
        if (e.target.value === ""){
            axios.get(`https://rickandmortyapi.com/api/character/${location.search}`)
             .then((res) => { setListedData(res.data.results)})
             .catch((err) => console.log(err)) 
        }else {
            axios.get(`https://rickandmortyapi.com/api/character/${location.search}`)
             .then((res) => { 
                 console.log(res.data.results)
                 setListedData(res.data.results
                    .filter( d => d.name.toLowerCase().includes(e.target.value.toLowerCase())))})
             .catch((err) => console.log(err)) 
        }   
    }

    return ( 
        <>
            <SearchBar SearchHandler={SearchHandler}/>
            <FilterDataComp  filterHandler={filterHandler}/>
            <div className="mainComp">
                {listedData 
                    ? listedData.map((data) => 
                    <Link to={`/${data.id}`} key={data.id}>
                        <Character 
                            id={data.id}
                            name={data.name}
                            status={data.status}
                            onClick={() => selectDataHandler(data.id)}
                        />
                    </Link>
                    )
                    : <p>Data Loading...</p>
                }
            </div>
            <PaginateComp pageHandler={selectPageHandler} />
        </>
     );
}
 
export default MainComp;