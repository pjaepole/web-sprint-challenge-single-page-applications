import React from 'react';

import { useHistory } from 'react-router';

export default function Home(){
    const history= useHistory();

    const routeToOrder =()=>{
        history.push('/pizza');
    }




    return(
        <div>
            <div>
                <p>your favorite food delivered coding</p>
                <button onClick={routeToOrder}>Pizza?</button>
            </div>
            <div>Food delivery in City</div>
            <div></div>
        </div>

    )
}