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
    const [pageInfo, setPageInfo] = useState(null);
    const [error, setError] = useState(false);


    const queryString = require('query-string');
    let location = useLocation();
    const pageNum = location.search;

    const query = queryString.parse(location.search)
    console.log(location, query)
    console.log(pageInfo, listedData)

  
    // useEffect(()=>{
    //     axios.get(`https://rickandmortyapi.com/api/character/${location.search}`)
    //          .then((res) => { 
    //             setListedData(res.data.results)
    //         })
    //          .catch((err) => console.log(err))
    // },[]);
    
    useEffect(()=> {
        getCharacters();
    },[])
    useEffect(()=> {
        getCharacters();
    },[pageNum])

    async function getCharacters() {
        try {
            const response = await getAllCharacters(pageNum);
            setListedData(response.data.results)
            setPageInfo(response.data.info)
        } catch (error) {
            console.log(error)
            setError(true)
        }
    }
    const selectPageHandler = (pageNum) => {
        
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
                        />
                    </Link>
                    )
                    : <p>Data Loading...</p>
                }
            </div>
            {pageInfo 
                ? (<div className="paginateComp">
                    <Link to={`/${pageInfo.prev.slice(32)}`}>
                        <button onClick={() => selectPageHandler()}>
                            {pageInfo.prev.slice(32)}
                        </button>
                    </Link>
                    <Link to={`/${pageInfo.prev.slice(32)}`}>
                        <button onClick={() => selectPageHandler()}>
                            {pageNum}
                        </button>
                    </Link>
                    <Link to={`/${pageInfo.next.slice(32)}`}>
                        <button onClick={() => selectPageHandler()}>
                            {pageInfo.next.slice(32)}
                        </button>
                    </Link>

                </div>)
                : (<p>Page Loading</p>)
            } 

        </>
     );
}
 
export default MainComp;