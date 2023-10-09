import React, { useState } from "react";
import { Button, Form, Table } from "react-bootstrap";
import RightArrow from "../../../assets/right-arrow.png";
import LeftArrow from "../../../assets/left-arrow.png";
import { SubjectData } from "../../../mockData/SubjectsData";
const Subjects = ({onSelect}) => {

    const [subjectSelected, setSubjectSelected] = useState();

    const [filterText, setFilterText] = useState("");

    

    const TableHeader = () => {
        return (
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Subject</th>
                    <th>Teacher</th>
                    <th>Units</th>
                    {!subjectSelected ? <th></th> : null}
                </tr>
            </thead>
        )
    }
    const selectHandler = (subject) => {
        setSubjectSelected(subject);
        onSelect(true);
    }
    const TableBody = () => {
        let filteredSubjects = SubjectData.filter((subject) => subject.title.toLowerCase().includes(filterText.toLowerCase()))
        return <tbody>
            {filteredSubjects.map((value, index) => {
                return (
                    <tr key={index} onClick={() => selectHandler(value)}>
                        <td>{value.id}</td>
                        <td>{value.title}</td>
                        <td>{value.teacher}</td>
                        <td>{value.units}</td>
                        <td className="select"><img src={RightArrow} /></td>
                    </tr >
                )
            })}
        </tbody >
    }
    const TableHeaderSelected = () => {
        return (
            <thead>
                <tr className="selected">
                    <th colSpan={4}>Subject</th>
                </tr>
            </thead>
        )
    }
    const TableBodySelected = () => {
        return <tbody>
            <tr >
                <td>{subjectSelected?.id}</td>
                <td>{subjectSelected?.title}</td>
                <td>{subjectSelected?.teacher}</td>
                <td>{subjectSelected?.units}</td>
            </tr >
        </tbody >
    }
    const goBackHandler = () => {
        setFilterText("");
        setSubjectSelected(undefined);
        onSelect(false)
    }
    return (
        subjectSelected
            ? (
                <div className="subjects-table-container">
                    <a className="go-back" onClick={goBackHandler}><img src={LeftArrow} />Subjects</a>
                    <Table bordered>
                        <TableHeaderSelected />
                        <TableBodySelected />
                    </Table>
                    <Form.Group className="mb-3" controlId="formQuestion">
                    <Form.Control className="question-area"  as="textarea" rows={3}  placeholder="Type your question here..."/>
                    </Form.Group>
                    
                </div>
            ) : (
                <div className="subjects-table-container">
                    <Form.Group className="mb-3" controlId="formSearchInput">
                        <Form.Control className="filter-input" type="text" placeholder="Filter subjects" onChange={(e) => setFilterText(e.target.value)} />
                    </Form.Group>
                    <Table bordered>
                        <TableHeader />
                        <TableBody />
                    </Table>
                </div>
            )
    )
}
export default Subjects;
