import { useState } from "react";
import { postData } from '../../Services/api';
import jwt_decode from 'jwt-decode';
import './AddExpense.css'
export function AddExpense() {
    const initialState = {
        ModelId: '',
        JobId: '',
        Date: '',
        Text: '',
        Amount: ''
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
            const token = localStorage.getItem('token');
            const decoded = jwt_decode(token);
            state.ModelId = decoded.ModelId;
           
            console.log(state);
            await postData('api/Expenses', state);
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
            <h2>Add Expense</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Job-id:
                    <input
                        name="JobId"
                        type="number"
                        value={state.JobId}
                        onChange={handleInputChange} />
                </label>
                <label>
                    Date:
                    <input
                        name="Date"
                        type="date"
                        id="datepicker"
                        value={state.Date}
                        onChange={handleInputChange} />
                </label>
                <br />
                <label>
                    Text:
                    <input
                        name="Text"
                        type="text"
                        value={state.name}
                        onChange={handleInputChange} />
                </label>
                <br />
                <label>
                    Amount:
                    <input
                        name="Amount"
                        type="number"
                        value={state.amount}
                        onChange={handleInputChange} />
                </label>
                <br />
                <input type="reset" value="Cancel" onClick={handleReset} /> <input type="submit" value="Submit" />
            </form>
        </>
    );
}
