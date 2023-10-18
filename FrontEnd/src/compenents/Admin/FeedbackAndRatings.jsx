import React, { useState } from 'react';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';

export default function FeedbackAndRatings() {
    // Sample data
    const feedbackData = [
        { id: 1, user: "John Doe", rating: 4, comment: "The session was informative!" },
        { id: 2, user: "Jane Smith", rating: 5, comment: "Loved the hands-on approach!" },
        // ... other feedback entries
    ];

    return (
        <div className="feedback-ratings-section">
            <h3>Feedback & Ratings</h3>

            {feedbackData.map(feedback => (
                <Card key={feedback.id} style={{ marginBottom: '1rem' }}>
                    <Card.Header>Feedback from {feedback.user}</Card.Header>
                    <ListGroup variant="flush">
                        <ListGroupItem>Rating: {feedback.rating}/5</ListGroupItem>
                        <ListGroupItem>Comment: {feedback.comment}</ListGroupItem>
                    </ListGroup>
                </Card>
            ))}
        </div>
    );
}
