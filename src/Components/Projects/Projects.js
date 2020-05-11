import React from 'react';
import { Panel } from 'rsuite';

const panelStyle = {

    display: 'inline-block', 
    width: "35vw", 
    padding: "20px",
    height: "20vh"
}

const projects = (props) => {

    return (
        <Panel header={props.headerValue} shaded bordered bodyFill style={panelStyle}>
                {props.cardInfo}
        </Panel>
    )
    
}

export default projects;