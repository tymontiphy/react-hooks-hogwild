import React, { useState } from 'react';


const AddHogForm = ({ setHogs }) => {
    const [name, setName] = useState('');
    const [specialty, setSpecialty] = useState('');
    const [weight, setWeight] = useState('');
    const [greased, setGreased] = useState(false);
    const [medal, setMedal] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const newHog = { name, specialty, weight, greased, 'highest medal achieved': medal };
        setHogs(prevHogs => [...prevHogs, newHog]);
        setName('');
        setSpecialty('');
        setWeight('');
        setGreased(false);
        setMedal('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" required />
            <input value={specialty} onChange={(e) => setSpecialty(e.target.value)} placeholder="Specialty" required />
            <input type="number" value={weight} onChange={(e) => setWeight(e.target.value)} placeholder="Weight" required />
            <label>
                <input type="checkbox" checked={greased} onChange={(e) => setGreased(e.target.checked)} />
                Greased
            </label>
            <input value={medal} onChange={(e) => setMedal(e.target.value)} placeholder="Highest Medal Achieved" />
            <button type="submit">Add Hog</button>
        </form>
    );
};

export default AddHogForm;