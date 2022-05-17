
const OneComp = ({name, id, status,onClick}) => {
    return ( 
        <div className="oneComp" onClick={onClick}>
            <p>id: {id}</p>
            <p>name: {name}</p>
            <p>status: {status}</p>
        </div>
     );
}
 
export default OneComp;