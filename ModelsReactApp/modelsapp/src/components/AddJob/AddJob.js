import { useState } from "react";
import { postData } from '../Services/api';

export function AddJobs() {
    const initialState = {
        studentNo: '',
        name: '',
        grade: ''
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
            await postData('students', state);
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
            <h2>Add grades</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Student no.:
                    <input
                        name="studentNo"
                        type="text"
                        value={state.studentNo}
                        onChange={handleInputChange} />
                </label>
                <br />
                <label>
                    Name:
                    <input
                        name="name"
                        type="text"
                        value={state.name}
                        onChange={handleInputChange} />
                </label>
                <br />
                <label>
                    Grade:
                    <input
                        name="grade"
                        type="text"
                        value={state.grade}
                        onChange={handleInputChange} />
                </label>
                <br />
                <input type="reset" value="Cancel" onClick={handleReset} /> <input type="submit" value="Submit" />
            </form>
        </>
    );
}
