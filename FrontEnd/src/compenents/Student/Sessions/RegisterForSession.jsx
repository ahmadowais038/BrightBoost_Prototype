import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import Sessions from "./Sessions";


const RegisterForSession = () => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div className="register-for-session-container">

            <Button onClick={handleShow}>Register for a session</Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Register for a session</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <Sessions checkable={true}/>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleClose}>
                        Register
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default RegisterForSession;