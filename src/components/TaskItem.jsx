import React from "react";
import DeleteTask from "./DeleteTask";
import { ListGroup } from "react-bootstrap";

export default function TaskItem({ task, onDelete }) {
  return (
    <ListGroup.Item className="d-flex justify-content-between align-items-center">
      <span>{task.name}</span>
      <DeleteTask taskId={task.id} onDelete={onDelete} />
    </ListGroup.Item>
  );
}
