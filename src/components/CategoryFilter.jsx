import React from 'react';

export default function CategoryFilter({ categories, onFilter }) {
    return (
        <select onChange={(e) => onFilter(e.target.value)}>
            <option value="">All</option>
            {categories.map((category) => (
                <option key={category} value={category}>
                    {category}
                </option>
            ))}
        </select>
    );
};