import React from 'react';
import { Panel } from 'rsuite';

const panelStyle = {

    // display: 'inline-block', 
    // width: "15vw", 
    padding: "20px",
    height: "40vh",
}

const projects = (props) => {

    return (
        <div style={{paddingLeft: "10px", paddingTop: "20px"}}>
            <Panel shaded bordered bodyFill style={panelStyle}>
                <p style={{fontSize: "20px"}}>{props.headerValue}</p>
                <p>{props.cardInfo}</p>
            </Panel>
        </div>
    )

}

export default projects;