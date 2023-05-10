import { useState } from "react";
import { postData } from '../../Services/api';

export function CreateModel() {
    const initialState = {
        FirstName: '',
        LastName: '',
        Email: '',
        PhoneNo: ''
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
            await postData('api/Models', state);
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

    return (
        <>
            <h2>Add Model</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    First Name:
                    <input
                        name="FirstName"
                        type="text"
                        value={state.FirstName}
                        onChange={handleInputChange} />
                </label>
                <br />
                <label>
                    Last Name:
                    <input
                        name="LastName"
                        type="text"
                        value={state.LastName}
                        onChange={handleInputChange} />
                </label>
                <br />
                <label>
                    Email:
                    <input
                        name="Email"
                        type="text"
                        value={state.Email}
                        onChange={handleInputChange} />
                </label>
                <br />
                <label>
                    Phone Number:
                    <input
                        name="PhoneNo"
                        type="text"
                        value={state.PhoneNo}
                        onChange={handleInputChange} />
                </label>
                <br />
                <input type="reset" value="Cancel" onClick={handleReset} /> <input type="submit" value="Submit" />
            </form>
        </>
    );
}

export default CreateModel;
