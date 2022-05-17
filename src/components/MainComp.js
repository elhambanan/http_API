import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import OneComp from "./OneComp";

const MainComp = () => {
    const [listedData, setListedData] = useState(null);

    useEffect(()=>{
        axios.get("https://rickandmortyapi.com/api/character")
             .then((res) => { 
                setListedData(res.data.results)
            })
             .catch((err) => console.log(err))
    },[]);
    const selectDataHandler = (id) => {
        console.log(id)
    }
    return ( 
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
     );
}
 
export default MainComp;