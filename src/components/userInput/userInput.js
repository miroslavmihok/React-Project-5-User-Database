import UserData from "./userData";

const userInput = (props) => {
    return (
        <div className="user_entry">
            {props.items.map((item) => (
                <UserData 
                key={item.id}
                username={item.username}
                age={item.age}
                />
            ))}
        </div>
    );
};

export default userInput;