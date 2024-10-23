import React, { useState } from 'react';
import UserTable from './components/UserTable';
import AddUserForm from './components/AddUserForm';

const App = () => {
    const [users, setUsers] = useState([]);

    const addUser = (newUser) => {
        setUsers((prevUsers) => [...prevUsers, newUser]);
    };

    const deleteUser = (id) => {
        setUsers((prevUsers) => prevUsers.filter(user => user.id !== id));
    };

    return (
        <div>
            <h1>Пользователи</h1>
            <AddUserForm addUser={addUser} />
            <UserTable users={users} deleteUser={deleteUser} />
        </div>
    );
};

export default App;