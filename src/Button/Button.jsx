const fun =(props) => {
    const color = `btn btn-${props.color}` 

    return (<button onClick={props.clicked} className={color} >{ props.text}</button>);
}
 
export default fun;