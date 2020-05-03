import React, { Component } from 'react';
import { Modal, FormGroup, ControlLabel, FormControl, Button, Form } from 'rsuite'

import './Contact.css'

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            formValue: {
                name: '',
                email: '',
                subject: '',
                message: ''
            },
            show: false
        };
        this.close = this.close.bind(this);
        this.open = this.open.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    // static getDerivedStateFromProps(nextProps, prevState){
    //     if(nextProps.show!==prevState.show){
    //       return { show: nextProps.show};
    //    }
    //    else return null;
    //  }
    // Biding is necessary when passing paramaters

    componentWillReceiveProps(props) {
        this.setState({ show: props.show })
    }

    close() {
        this.setState({ show: false });
    }

    open() {
        this.setState({ show: true });
    }

    handleChange(value) {
        this.setState({
            formValue: value
        });
    }

    render() {
        return (
            <Modal backdrop="static" overflow={false} size="md" show={this.state.show} onHide={this.close}>
                <Modal.Header closeButton={true}>
                    <Modal.Title>Send me an email </Modal.Title>
                </Modal.Header>
                <Modal.Body>
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
                                rows={4}
                                name="message"
                                componentClass="textarea"
                            />
                        </FormGroup>
                    </Form>
                </Modal.Body>
                <p style={{ textAlign: "center", fontWeight: "bold" }}>For any inquiries contact: <br /> ankith.kowshik@gmail.com</p>
                <Modal.Footer>

                    <Button onClick={this.close} appearance="primary">
                        Submit
                    </Button>
                </Modal.Footer>
            </Modal>
        )
    }
}

export default Contact;
