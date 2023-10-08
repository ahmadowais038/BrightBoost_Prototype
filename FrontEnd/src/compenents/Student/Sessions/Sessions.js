import { SessionData } from "../../../mockData/SessionData";
import React, { useState } from "react";
import { Form, Table } from "react-bootstrap";

const Sessions = ({ checkable }) => {
    const [registeredSession, setRegisteredSession] = useState([]);
    const hasUserSession = true;
    
    const TableHeader = () => {
        return (
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Subject</th>
                    <th>Teacher</th>
                    <th>Date</th>
                    {checkable ? <th></th> : hasUserSession ? <th>Registered?</th>: null}
                </tr>
            </thead>
        )
    }
    const TableBody = () => {
        return <tbody>
            {SessionData.map((value, index) => {
                return (
                    <tr key={index}>
                        <td>{value.id}</td>
                        <td>{value.title}</td>
                        <td>{value.teacher}</td>
                        <td>{value.date}</td>
                        {checkable
                            ? <td className="text-center">
                                <Form.Check // prettier-ignore
                                    type="checkbox"
                                    id="session"
                                    value={value.id}
                                />
                            </td>
                            :

                            hasUserSession ?
                                <td>
                                    {registeredSession.includes(value.id) ? "Yes" : "No"}
                                </td>
                                : null
                        }

                    </tr >
                )
            })}
        </tbody >
    }
    return (
        <div className="session-table-container">
            <Table bordered>
                <TableHeader />
                <TableBody />
            </Table>
        </div>
    )
}
export default Sessions;
