import React from "react";
import TaskItem from "./TaskItem";
import { ListGroup } from "react-bootstrap";

export default function TaskList({ tasks, onDelete, onEdit }) {
  return (
    <ListGroup>
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} onDelete={onDelete} onEdit={onEdit}/>
      ))}
    </ListGroup>
  );
}
