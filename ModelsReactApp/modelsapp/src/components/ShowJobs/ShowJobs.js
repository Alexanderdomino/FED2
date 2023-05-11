import './ShowJobs.css'
import jwt_decode from 'jwt-decode';
import { useState, useEffect } from "react";
import { getData } from '../../Services/api';

export function ShowJobs() {
    const initialState = {};
    const [state, setState] = useState(initialState);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const token = localStorage.getItem('token');
                const decoded = jwt_decode(token);
                console.log(decoded);
                //const userId = decoded.ModelId;
                // Assuming the user ID is stored in the "sub" claim
                const data = await getData(`api/Jobs`);
               
                setState(data);
            } catch (error) {
                setError(error);
            }
        };
        fetchData();
    }, []);

    if (error !== null) {
        return (
            <>
                <h2>List jobs</h2>
                <p>{error.toString()}</p>
            </>
        )
    } else {
        return (
            <main>
                <div>
                    <h2>List jobs</h2>
                    <table>
                        <thead>
                            <tr><th>Customer</th><th>Start date</th><th>days</th><th>Location</th></tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{state.customer}</td> <td>{state.startDate}</td><td>{state.days}</td><td>{state.location}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </main>
        );
    }
}
