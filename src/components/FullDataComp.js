import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const FullDataComp = () => {
    const params = useParams();
    const dataId = params.id;
    console.log(dataId)
    const [data, setData] = useState(null);

    useEffect(() =>{
        if(dataId) {
            axios.get(`https://rickandmortyapi.com/api/character/${dataId}`)
             .then((res) => {
                 console.log(res.data, "dataBug")
                 setData(res.data)
                })
             .catch((err) => console.log(err)) }  
    },[dataId])

    // dataId ?
    // data ?
    
    let dataDetail = <p>Please select a data !</p>

    if(dataId) dataDetail = <p>loading ...</p>

    if(data) {
        dataDetail = (
            <div>
                FullData
                <p>id : {data.id}</p>
                <p>episode : {data.name}</p>
                <p>created :{data.created}</p>
            </div>
        )
    }
    return dataDetail;
}
 
export default FullDataComp;