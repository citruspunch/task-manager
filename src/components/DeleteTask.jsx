import React from "react";
import { Button } from "react-bootstrap";

export default function DeleteTask({ taskId, onDelete }) {
  return (
    <Button
      variant="danger"
      onClick={() => onDelete(taskId)}
      className="float-right"
    >
      Delete
    </Button>
  );
}
