import './ShowJobs.css'
import { useState, useEffect } from "react";
import { getData } from '../Services/api';



export function ShowJobs() {
    const initialState = [];
    const [state, setState] = useState(initialState);
    const [error, setError] = useState(null);
    const [pageNo, setPage] = useState(1);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getData(`Jobs`);
                setState(data);
            }
            catch (error) {
                setError(error);
            }
        };

        fetchData();
    }, [pageNo]);

    if (error !== null)
        return (
            <>
                <h2>List grades</h2>
                <p>{error}</p>
            </>
        )
    else
        return (
            <main>
                <div>
                    <h2>List jobs</h2>
                    <table>
                        <thead>
                            <tr><th>Customer</th><th>Start date</th><th>days</th><th>Location</th></tr>
                        </thead>
                        <tbody>
                            {state.map(item => (
                                <tr key={item.id}>
                                    <td>{item.customer}</td> <td>{item.startDate}</td><td>{item.days}</td><td>{item.location}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <PageSelect pageNo={pageNo} setPage={setPage} />
                </div>
            </main>
        );
}