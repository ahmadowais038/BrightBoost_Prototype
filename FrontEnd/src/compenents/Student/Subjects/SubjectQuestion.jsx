import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import Subjects from "./Subjects";


const SubjectQuestion = () => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [hasSelected, setHasSelected] = useState(false);
    const selectHandler = (selected) => {
        setHasSelected(selected);
    }
    return (
        <div className="ask-for-question-container">

            <Button onClick={handleShow}>Raise Question</Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Raise Question</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <Subjects onSelect={selectHandler} />
                </Modal.Body>
                {hasSelected ? (
                    <Modal.Footer >
                        <Button variant="primary" onClick={handleClose}>
                            Submit
                        </Button>
                    </Modal.Footer>
                ) : null}
            </Modal>
        </div>
    )
}

export default SubjectQuestion;