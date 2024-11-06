import React, { useState } from "react";
import Nav from "./Nav";
import HogTile from "./HogTile"; // Import HogTile component
import FilterSort from "./FilterSort"; // Import FilterSort component
import AddHogForm from "./AddHogForm"; // Import AddHogForm component
import hogsData from "../porkers_data"; // Import hog data
import 'semantic-ui-css/semantic.min.css';


function App() {
    const [hogs, setHogs] = useState(hogsData); // State for hogs
    const [greased, setGreased] = useState(false); // State for greased filter
    const [sortBy, setSortBy] = useState(""); // State for sorting

    // Function to toggle greased filter
    const toggleGreased = () => {
        setGreased((prev) => !prev);
    };

    // Function to handle sorting option change
    const handleSortChange = (sortOption) => {
        setSortBy(sortOption);
    };

    // Function to add a new hog
    const addHog = (newHog) => {
        setHogs((prevHogs) => [...prevHogs, newHog]);
    };

    // Filter and sort hogs based on state
    const filteredHogs = hogs
        .filter((hog) => (greased ? hog.greased : true))
        .sort((a, b) => {
            if (sortBy === "name") return a.name.localeCompare(b.name);
            if (sortBy === "weight") return a.weight - b.weight;
            return 0;
        });

    return (
        <div className="App">
            <Nav />
            <FilterSort 
                greased={greased}
                toggleGreased={toggleGreased}
                handleSortChange={handleSortChange}
            />
            <AddHogForm addHog={addHog} />
            <div className="ui grid container">
                {filteredHogs.map((hog) => (
                    <HogTile key={hog.name} hog={hog} />
                ))}
            </div>
        </div>
    );
}

export default App;