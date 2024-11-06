import React from 'react';

const FilterSort = ({ greased, toggleGreased, handleSortChange }) => {
    return (
        <div>
            <label>
                <input 
                    type="checkbox" 
                    checked={greased} // Use the current state
                    onChange={(e) => toggleGreased(e.target.checked)} // Call the toggle function
                />
                Show Greased
            </label>
            <select onChange={(e) => handleSortChange(e.target.value)}>
                 
                <option value="">Sort by</option>
                <option value="name">Sort by Name</option>
                <option value="weight">Sort by Weight</option>
            </select>
        </div>
    );
};

export default FilterSort;