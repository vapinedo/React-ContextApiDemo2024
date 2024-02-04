import React from "react";

const initialState = {
    firstname: 'John',
    lastname: 'Doe',
    city: 'Los Angeles',
}

const UserContext = React.createContext(initialState);
const UserProvider = UserContext.Provider;
const UserConsumer = UserContext.Consumer;

export { UserProvider, UserConsumer }
export default UserContext