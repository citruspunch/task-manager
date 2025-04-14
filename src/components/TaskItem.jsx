import React, {useState} from "react";
import DeleteTask from "./DeleteTask";
import { ListGroup, Form } from "react-bootstrap";
import "../styles/TaskManager.css";

export default function TaskItem({ task, onDelete, onEdit }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newTaskName, setNewTaskName] = useState(task.name);

  const handleSave = () => {
    if (newTaskName !== "") onEdit(task.id, newTaskName);
    setIsEditing(false);
  };

  return (
    <ListGroup.Item className="d-flex justify-content-between align-items-center">
      {isEditing ? (
        <input
        type="text"
        value={newTaskName}
        onChange={(e) => setNewTaskName(e.target.value)}
        onBlur={handleSave}
        autoFocus
        className="edit-task-input"
      />
      ) : (
        <span onClick={() => setIsEditing(true)}>{task.name}</span>
      )}
      <DeleteTask taskId={task.id} onDelete={onDelete} />
    </ListGroup.Item>
  );
}
