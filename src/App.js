import React, { useState } from "react";

import UserForm from "./components/userForm/userForm";
import UserInput from "./components/userInput/userInput";
import ErrorMessage from "./components/errorMessage/errorMessage";

import './App.css';

function App() {

    const userDatabase = [];

    const [userInput, setUserInput] = useState(userDatabase);
    const [errorMessage, setErrorMessage] = useState(false);

    const saveUserInputHandler = (savedInput) => {
        const userItems = {
            ...savedInput,
            id: Math.random().toString()
        };
        setUserInput((prevData) => {
            return [userItems, ...prevData];
        });
    }

    const showErrorHandler = (value) => {
        setErrorMessage(value);
    }

    return (
        <div className="App">
            <UserForm onSaveForm={saveUserInputHandler} onError={showErrorHandler}/>
            {userInput.length > 0 && <UserInput items={userInput}/>}
            {userInput.length === 0 && <p className="noEntry">Please enter a username and age</p>}
            {errorMessage && <ErrorMessage onError={showErrorHandler}/>}
        </div>
    );
}

export default App;
