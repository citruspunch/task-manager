import React, { useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";

export default function AddTask({ onAdd, categories }) {
  const [task, setTask] = useState("");
  const [category, setCategory] = useState("General");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim()) {
      onAdd(task, category);
      setTask("");
    }
  };
  return (
    <Form className="mb-3" onSubmit={handleSubmit}>
      <Row>
        <Col xs={8}>
          <Form.Group controlId="formTask">
            <Form.Control
              type="text"
              value={task}
              onChange={(e) => setTask(e.target.value)}
              placeholder="Add a new task"
            />
          </Form.Group>
        </Col>
        <Col xs={4}>
          <Form.Group controlId="formCategory">
            <Form.Control
              as="select"
              onChange={(e) => setCategory(e.target.value)}
            >
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </Form.Control>
          </Form.Group>
        </Col>
      </Row>
      <Button className="mt-3 custom-add-task-button" variant="primary" type="submit">
        Add Task
      </Button>
    </Form>
  );
}
