import React, { useState } from "react";
import AddTask from "./AddTask";
import TaskList from "./TaskList";
import CategoryFilter from "./CategoryFilter";
import { Container, Row, Col, Card } from 'react-bootstrap';

export default function TaskManager() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("");

  const handleAddTask = (taskName, category) => {
    const newTask = {
      id: Date.now(),
      name: taskName,
      category: category,
    };
    setTasks([...tasks, newTask]);
  };

  const handleDeleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  const handleFilterChange = (category) => {
    setFilter(category);
  };

  const filteredTasks = filter
    ? tasks.filter((task) => task.category === filter)
    : tasks;

  return (
    <Container> 
      <Row className="justify-content-md-center">
        <Col md="auto">
          <h1>Task Manager</h1>
        </Col>
      </Row>
      <Row className="mt-3">
        <Col>
          <Card>
            <Card.Body>
              <AddTask onAdd={handleAddTask} categories={["General", "Work", "Personal"]} />
              <CategoryFilter
                categories={["General", "Work", "Personal"]}
                onFilter={handleFilterChange}
              />
              <TaskList tasks={filteredTasks} onDelete={handleDeleteTask} />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
    
  );
}
