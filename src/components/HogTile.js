import React, { useState } from 'react';
import { Card } from 'semantic-ui-react';

const HogTile = ({ hog }) => {
    const [showDetails, setShowDetails] = useState(false);
    const [isVisible, setIsVisible] = useState(true);

    if (!isVisible) return null;

    return (
        <Card onClick={() => setShowDetails(!showDetails)}>
            <Card.Content>
                <Card.Header>{hog.name}</Card.Header>
                <Card.Description>
                    <img src={hog.image} alt={hog.name} />
                </Card.Description>
                {showDetails && (
                    <Card.Description>
                        <p>Specialty: {hog.specialty}</p>
                        <p>Weight: {hog.weight}</p>
                        <p>Greased: {hog.greased ? 'Yes' : 'No'}</p>
                        <p>Highest Medal: {hog['highest medal achieved']}</p>
                        <button onClick={() => setIsVisible(false)}>Hide</button>
                    </Card.Description>
                )}
            </Card.Content>
        </Card>
    );
};

export default HogTile; 