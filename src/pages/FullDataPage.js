import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const FullData = ({id}) => {
    const params = useParams();
    const dataId = params.id;
    console.log(dataId)
    const [data, setData] = useState(null);

    useEffect(() =>{
        axios.get(`https://rickandmortyapi.com/api/character/${dataId}`)
             .then((res) => {
                 setData(res.data)
                 console.log(data)
                })
             .catch((err) => console.log(err))   
    },[dataId])
    return ( 
        <div>
            FullData
            <p>episode : {data.episode}</p>
            <p>created :{data.created}</p>

        </div>
     );
}
 
export default FullData;