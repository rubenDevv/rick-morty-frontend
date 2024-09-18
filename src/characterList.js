import React, { useEffect, useState} from "react";

const CharactersList = () => {
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        fetch('http://127.0.0.1:5000/api/characters')
        .then(response => response.json).then(data => {
            console.log('data', data)
            setCharacters(data)
        })
        console.log('here')
    })
}

export default CharactersList