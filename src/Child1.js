

import Child2 from './Child2.js';
import MyForm from './MyForm.js';

function Child1() {

    let carInfo = [{ name: "Ford", model: "Mustang" }, { name: "BMW", model: "BMW1" }, { name: "Audi", model: "Audi1" }, { name: "Ford", model: "Mustang", }];
    

    const shoot = () => {
        alert("Great Shot!");
    }


    return (
        <><p>Hi am a child 1 component</p>

            {/* <Child2 brand={carInfo} /> */}

            I am a child2 -CarList:
            <ul>
                {carInfo.map((item) => <Child2 brand={item} />)}
            </ul>

            <p><MyForm/></p>

            <button onClick={shoot}>Take the shot!</button>
        </>
    );
}




export default Child1;