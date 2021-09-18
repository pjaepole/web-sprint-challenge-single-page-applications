import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router';

export default function Home(){
    const history= useHistory();

    const routeToOrder =()=>{
        history.push('/pizza');
    }
    

    const StyledHome=styled.div`
    display: flex;
    align-items: center;
    border: 1px grey solid;
    justify-content:center;
    flex-direction:column;
    margin: 4% 0%;
    `


    return(
        <StyledHome>
            <div>
                <p>your favorite food delivered coding</p>
                <button onClick={routeToOrder}>Pizza?</button>
            </div>
            <div>Food delivery in City</div>
            
        </StyledHome>

    )
}