import React from 'react';

export default function DeleteTask({ taskId, onDelete }) {
    return (
        <button onClick={() => onDelete(taskId)}>Delete</button>
    );
};
