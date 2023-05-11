import { useState } from "react";
import { postData } from '../../Services/api';

export function CreateModel() {
    const initialState = {
        FirstName: '',
        LastName: '',
        Email: '',
        PhoneNo: '',
        AddresLine1: '',
        AddresLine2: '',
        Zip: '',
        City: '',
        Country: '',
        BirthDate: '',
        Nationality: '',
        Height: '',
        ShoeSize: '',
        HairColor: '',
        EyeColor: '',
        Comments: '',
        Password: ''

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
            await postData('api/Models', state);
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
            <h2>Create Model</h2>
            <button onClick={toggleContentVisibility}>
                {isContentVisible ? "Hide" : "Add Model"}
            </button>
            {isContentVisible && (
                <>
                    <h2>Add Model</h2>
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
                            Phone Number:
                            <input
                                name="PhoneNo"
                                type="text"
                                value={state.PhoneNo}
                                onChange={handleInputChange}
                            />
                        </label>
                        <br />
                        <label>
                            Adress Line 1:
                            <input
                                name="AddresLine1"
                                type="text"
                                value={state.AddresLine1}
                                onChange={handleInputChange}
                            />
                        </label>
                        <br />
                        <label>
                            Adress Line 2:
                            <input
                                name="AddresLine2"
                                type="text"
                                value={state.AddresLine2}
                                onChange={handleInputChange}
                            />
                        </label>
                        <br />
                        <label>
                            Zip:
                            <input
                                name="Zip"
                                type="text"
                                value={state.Zip}
                                onChange={handleInputChange}
                            />
                        </label>
                        <br />
                        <label>
                            City:
                            <input
                                name="City"
                                type="text"
                                value={state.City}
                                onChange={handleInputChange}
                            />
                        </label>
                        <br />
                        <label>
                            Country:
                            <input
                                name="Country"
                                type="text"
                                value={state.Country}
                                onChange={handleInputChange}
                            />
                        </label>
                        <br />
                        <label>
                            BirthDate:
                            <input
                                name="BirthDate"
                                type="text"
                                value={state.BirthDate}
                                onChange={handleInputChange}
                            />
                        </label>
                        <br />
                        <label>
                            Nationality:
                            <input
                                name="Nationality"
                                type="text"
                                value={state.Nationality}
                                onChange={handleInputChange}
                            />
                        </label>
                        <br />
                        <label>
                            Height:
                            <input
                                name="Height"
                                type="text"
                                value={state.Height}
                                onChange={handleInputChange}
                            />
                        </label>
                        <br />
                        <label>
                            Shoe Size:
                            <input
                                name="ShoeSize"
                                type="text"
                                value={state.ShoeSize}
                                onChange={handleInputChange}
                            />
                        </label>
                        <br />
                        <label>
                            Hair Color:
                            <input
                                name="HairColor"
                                type="text"
                                value={state.HairColor}
                                onChange={handleInputChange}
                            />
                        </label>
                        <br />
                        <label>
                            Eye Color:
                            <input
                                name="EyeColor"
                                type="text"
                                value={state.EyeColor}
                                onChange={handleInputChange}
                            />
                        </label>
                        <br />
                        <label>
                            Comments:
                            <input
                                name="Comments"
                                type="text"
                                value={state.Comments}
                                onChange={handleInputChange}
                            />
                        </label>
                        <br />
                        <label>
                            Password:
                            <input
                                name="Password"
                                type="text"
                                value={state.Password}
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

export default CreateModel;
