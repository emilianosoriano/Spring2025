import { useState, useEffect } from 'react';
import axios from 'axios';

function HelloWorld() {
    const [message, setMessage] = useState('');
    const API_URL = import.meta.env.VITE_API_URL;

    useEffect(() => {
        axios.get(`${API_URL}/api/hello-world/`)
            .then(response => {
                setMessage(response.data.message);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);

    return (
        <div>
            <h1>Hello, World!</h1>
            <p>{message}</p>
        </div>
    );
}

export default HelloWorld;