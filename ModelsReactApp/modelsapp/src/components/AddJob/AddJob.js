import { useState } from "react";
import { postData } from '../../Services/api';

export function AddJob() {
    const initialState = {
        startDate: '',
        days: '',
        customer: '',
        location: '',
        comments: ''
    };
    const [state, setState] = useState(initialState);
    const [isExpanded, setIsExpanded] = useState(false);

    function handleInputChange(event) {
        const name = event.target.name;

        setState(state => {
            return {
                ...state,
                [name]: event.target.value
            };
        });
    }

    async function sendData() {
        try {
            await postData('api/Jobs', state);
            setState(initialState);
        }
        catch (error) {
            alert(error.message);
        }
    }

    function handleSubmit(event) {
        event.preventDefault();
        sendData();
    }

    function handleReset(event) {
        setState(initialState);
        event.preventDefault();
    }

    function toggleForm() {
        setIsExpanded(prevState => !prevState);
    }

    return (
        <>
            <h2>Add Job</h2>
            <button onClick={toggleForm}>{isExpanded ? "Hide Form" : "Show Form"}</button>
            {isExpanded && (
                <form onSubmit={handleSubmit}>
                    <label>
                        Customer:
                        <input
                            name="customer"
                            type="text"
                            value={state.customer}
                            onChange={handleInputChange} />
                    </label>
                    <label>
                        Start date:
                        <input
                            name="startDate"
                            type="text"
                            value={state.startDate}
                            onChange={handleInputChange} />
                    </label>
                    <br />
                    <label>
                        Number of days:
                        <input
                            name="days"
                            type="text"
                            value={state.days}
                            onChange={handleInputChange} />
                    </label>
                    <label>
                        Location:
                        <input
                            name="location"
                            type="text"
                            value={state.location}
                            onChange={handleInputChange} />
                    </label>
                    <label>
                        Comments:
                        <input
                            name="comments"
                            type="text"
                            value={state.comments}
                            onChange={handleInputChange} />
                    </label>
                    <br />

                    <br />
                    <input type="reset" value="Cancel" onClick={handleReset} /> <input type="submit" value="Submit" />
                </form>
            )}
        </>
    );
}

export default AddJob;
