import React from 'react';
import { Form } from 'react-bootstrap';

export default function CategoryFilter({ categories, onFilter }) {
    return (
        <Form.Group className="mb-4" controlId="formCategoryFilter">
            <Form.Label>Filter by Category</Form.Label>
            <Form.Control as="select" onChange={(e) => onFilter(e.target.value)}>
                <option value="">All</option>
                {categories.map((category) => (
                    <option key={category} value={category}>
                        {category}
                    </option>
                ))}
            </Form.Control>
        </Form.Group>
    );
};