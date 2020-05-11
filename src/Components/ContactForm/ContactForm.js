import React, { Component } from 'react';
import { FormGroup, ControlLabel, FormControl, Button, Form } from 'rsuite'

class ContactForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            formValue: {
                name: '',
                email: '',
                subject: '',
                message: ''
            },
        };

    }

    handleChange(value) {
        this.setState({
            formValue: value
        });
    }

    render() {
        return (
                    <Form fluid onChange={this.handleChange} formValue={this.state.formValue}>
                        <FormGroup>
                            <ControlLabel>Name</ControlLabel>
                            <FormControl name="name" />
                        </FormGroup>
                        <FormGroup>
                            <ControlLabel>Email Address</ControlLabel>
                            <FormControl name="email" type="email" />
                        </FormGroup>
                        <FormGroup>
                            <ControlLabel>Subject</ControlLabel>
                            <FormControl
                                name="subject"
                                placeholder="Just to say Hi!" />
                        </FormGroup>
                        <FormGroup>
                            <ControlLabel>Message</ControlLabel>
                            <FormControl
                                rows={6}
                                name="message"
                                componentClass="textarea"
                            />
                        </FormGroup>
                        <FormGroup style={{textAlign: "center"}}>
                        <Button appearance="default">Submit</Button>
                        </FormGroup>
                    </Form>   
        )
    }
}

export default ContactForm;
