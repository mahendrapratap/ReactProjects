function Child2(props) {

    return <>
        { <h2>I am a child2 -CarDetails: {props.brand.name} -  {props.brand.model}!</h2>
        // <h2>I am a child2 -CarModel: {props.brand.model}!</h2> 
        
        }
        {/* <h2>{props.brand}!</h2> */}
    </>;
}


export default Child2;