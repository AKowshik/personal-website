import React from 'react';
import { Panel } from 'rsuite';

const panelStyle = {

    display: 'inline-block', 
    width: "500px", 
    padding: "20px"
}

const projects = (props) => {

    return (
        <Panel header={props.headerValue} shaded bordered bodyFill style={panelStyle}>
                {props.cardInfo}
        </Panel>
    )
    
}

export default projects;