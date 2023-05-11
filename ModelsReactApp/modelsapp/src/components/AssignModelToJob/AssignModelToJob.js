import React, { useState } from "react";
import './AssignModelToJob.css';

export function AssignModelToJob() {
    const [jobId, setJobId] = useState("");
    const [modelId, setModelId] = useState("");
    const [isContentVisible, setIsContentVisible] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const url = `https://localhost:7181/api/Jobs/${jobId}/model/${modelId}`;

        try {
            const response = await fetch(url, {
                method: "POST",
                body: JSON.stringify({ jobId, modelId }),
                credentials: 'include',
                headers: {
                    'Authorization': 'Bearer ' + localStorage.getItem("token"),
                    'Content-Type': 'application/json'
                }
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const responseData = await response.json();

            // Handle response here
            console.log(responseData);

            // Reset input fields
            setJobId("");
            setModelId("");
        } catch (error) {
            alert(`Something bad happened: ${error}`);
        }
    };

    function toggleContentVisibility() {
        setIsContentVisible(!isContentVisible);
    }

    return (
        <>
            <button onClick={toggleContentVisibility}>
                {isContentVisible ? "Hide" : "Add Model to Job"}
            </button>
            <br/>
            {isContentVisible && (
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="jobId">Job ID:</label>
                        <input
                            type="text"
                            id="jobId"
                            value={jobId}
                            onChange={(e) => setJobId(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor="modelId">Model ID:</label>
                        <input
                            type="text"
                            id="modelId"
                            value={modelId}
                            onChange={(e) => setModelId(e.target.value)}
                        />
                    </div>
                    <button type="submit">Submit</button>
                </form>
            )}
        </>
    );
}