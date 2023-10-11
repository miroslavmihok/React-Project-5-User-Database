const errorMessage = (props) => {

    const closeHandler = () => {
        props.onError(false);
    }

    return (
        <div className="container" onClick={closeHandler}>
            <div className="error-message">
                <div className="error-message_title">
                    <span>Invalid input</span>
                </div>
                <div className="error-message_content">
                    <span>Please enter a valid name and age (non-empty values).</span>
                    <div className="button-end">
                        <button onClick={closeHandler}>Okay</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default errorMessage;