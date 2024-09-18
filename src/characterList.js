import React, { useEffect, useState } from 'react';

const CharacterList = () => {
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        fetch('http://127.0.0.1:5000/api/characters')
            .then(response => response.json())
            .then(data => {
                console.log('Character Names:', data);  // Log character names to the console
                setCharacters(data);  // Update the state with character names
            })
            .catch(error => {
                console.error('Error fetching characters:', error);
            });
    }, []);

    return (
        <div>
            <h1>Rick and Morty Characters</h1>
            <ul>
                {characters.map((character, index) => (
                    <li key={index}>{character}</li>
                ))}
            </ul>
        </div>
    );
};

export default CharacterList;
