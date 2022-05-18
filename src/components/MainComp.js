import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import OneComp from "./OneComp";
import PaginateComp from "./PaginateComp";

const MainComp = () => {
    const [listedData, setListedData] = useState(null);
    const [pageInfo, setPageInfo] = useState(null);


    const queryString = require('query-string');
    let location = useLocation();
    let navigate = useNavigate();
    
    const query = queryString.parse(location.search)
    console.log(location, query)
  
    

    useEffect(()=>{
        axios.get(`https://rickandmortyapi.com/api/character/${location.search}`)
             .then((res) => { 
                setListedData(res.data.results)
            })
             .catch((err) => console.log(err))
    },[]);

    // useEffect(() => {
    //     axios.get(`https://rickandmortyapi.com/api/character/${location.search}`)
    //          .then((res) => {
    //              setPageInfo(res.data.info)
    //              console.log(res.data.info)})
    //          .catch((err) => console.log(err))
    // },[location.search]);

    const selectDataHandler = (id) => {
        console.log(id)
    }
    const selectPageHandler = (page) => {
        console.log("paged", page)
        axios.get(`https://rickandmortyapi.com/api/character/${page}`)
             .then((res) => setListedData(res.data.results)
             .catch((err) => console.log(err))
             )
    }
    return ( 
        <>
            <div className="mainComp">
                {listedData 
                    ? listedData.map((data) => 
                    <Link to={`/${data.id}`} key={data.id}>
                        <OneComp 
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