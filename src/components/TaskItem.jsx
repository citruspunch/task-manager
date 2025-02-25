import React from 'react';
import DeleteTask from './DeleteTask';

export default function TaskItem({ task, onDelete }) {
    return (
        <li>
            {task.name}
            <DeleteTask taskId={task.id} onDelete={onDelete} />
        </li>
    );
};
