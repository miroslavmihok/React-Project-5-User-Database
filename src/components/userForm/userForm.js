import React, { useRef } from "react";

const UserForm = (props) => {
    const nameInputRef = useRef();
    const ageInputRef = useRef();

    const submitHandler = (event) => {
        event.preventDefault();
        const enteredName = nameInputRef.current.value;
        const enteredAge = ageInputRef.current.value;

        if ((isNaN(enteredAge) || enteredAge < 0) || (typeof enteredName == 'number')) {
            props.onError(true);
            nameInputRef.current.value = '';
            ageInputRef.current.value = '';
            ;
        } else {
            props.onSaveForm({
                username: enteredName,
                age: enteredAge
            });
            nameInputRef.current.value = '';
            ageInputRef.current.value = '';
            ;
        }
    }

    return (
            <form onSubmit={submitHandler}>
                <div>
                    <label htmlFor="username">Username</label>
                    <input type="text" id="username" name="username" ref={nameInputRef}></input>
                </div>
                <div>
                    <label htmlFor="age">Age (Years)</label>
                    <input type="number" id="age" name="age" ref={ageInputRef}></input>
                </div>
                <button type="submit">Add User</button>
            </form>
    );
};

export default UserForm;