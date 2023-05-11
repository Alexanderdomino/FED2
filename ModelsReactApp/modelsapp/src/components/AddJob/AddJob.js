import { useState } from "react";
import { postData } from '../Services/api';

export function AddJobs() {
    const initialState = {
        startDate: '',
        days: '',
        customer: '',
        locations: '',
        comments: ''
    };
    const [state, setState] = useState(initialState);

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
            await postData('Job', state);
            setState(initialState);
        }
        catch (error) {
            alert(error.message);
        }
    }

    function handleSubmit(event) {
        //alert('Current state: ' + JSON.stringify(state));
        event.preventDefault();
        sendData();
    }

    function handleReset(event) {
        setState(initialState);
        event.preventDefault();
    }

    return (
        <>
            <h2>Add customers</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    customer:
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
                        value={state.locations}
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
        </>
    );
}
