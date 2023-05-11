import './ShowJobs.css';
import jwt_decode from 'jwt-decode';
import { useState, useEffect } from "react";
import { getData } from '../../Services/api';

export function ShowJobs() {
    const [jobs, setJobs] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const token = localStorage.getItem('token');
                const decoded = jwt_decode(token);
                console.log(decoded);
                //const userId = decoded.ModelId;
                // Assuming the user ID is stored in the "sub" claim
                const data = await getData(`api/Jobs/`);
                console.log(data);
                setJobs(data);
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
                            <tr>
                                <th>Customer</th>
                                <th>Start date</th>
                                <th>Days</th>
                                <th>Location</th>
                            </tr>
                        </thead>
                        <tbody>
                            {jobs.map(job => (
                                <tr key={job.jobId}>
                                    <td>{job.customer}</td>
                                    <td>{job.startDate}</td>
                                    <td>{job.days}</td>
                                    <td>{job.location}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </main>
        );
    }
}
