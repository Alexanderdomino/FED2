import { useState } from "react";
import { postData } from '../../Services/api';


export function CreateManager() {
    const initialState = {
        FirstName: '',
        LastName: '',
        Email: '',
        PassWord: ''
    };
    const [state, setState] = useState(initialState);
    const [isContentVisible, setIsContentVisible] = useState(false);

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
            await postData('api/Managers', state);
            setState(initialState);
        } catch (error) {
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

    function toggleContentVisibility() {
        setIsContentVisible(!isContentVisible);
    }

    return (
        <>
            <h2>Create Manager</h2>
            <button onClick={toggleContentVisibility}>
                {isContentVisible ? "Hide" : "Add Manager"}
            </button>
            {isContentVisible && (
                <>
                    <h2>Add Manager</h2>
                    <form onSubmit={handleSubmit}>
                        <label>
                            First Name:
                            <input
                                name="FirstName"
                                type="text"
                                value={state.FirstName}
                                onChange={handleInputChange}
                            />
                        </label>
                        <br />
                        <label>
                            Last Name:
                            <input
                                name="LastName"
                                type="text"
                                value={state.LastName}
                                onChange={handleInputChange}
                            />
                        </label>
                        <br />
                        <label>
                            Email:
                            <input
                                name="Email"
                                type="text"
                                value={state.Email}
                                onChange={handleInputChange}
                            />
                        </label>
                        <br />
                        <label>
                            Password:
                            <input
                                name="PassWord"
                                type="text"
                                value={state.PassWord}
                                onChange={handleInputChange}
                            />
                        </label>
                        <br />
                        <div style={{ textAlign: 'center' }}>
                            <input type="reset" value="Cancel" onClick={handleReset} />{" "}
                            <input type="submit" value="Submit" />
                        </div>
                    </form>
                </>
            )}
        </>
    );
}

export default CreateManager;
