import React from 'react';
import { Panel } from 'rsuite';
import './Projects.css';

const projects = (props) => {
        return(
            <div className="projects">
                <Panel header={props.headerValue} shaded bordered bodyFill style={{ display: 'inline-block', width: 500, padding: "20px" }}>
                    <p>
                        {props.cardInfo}
                    </p>
                </Panel>
            </div>
        )
    }


export default projects;