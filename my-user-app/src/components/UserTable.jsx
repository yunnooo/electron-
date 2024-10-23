import React from 'react';

const UserTable = ({ users, deleteUser }) => {
    return (
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Имя</th>
                    <th>Возраст</th>
                    <th>Действия</th>
                </tr>
            </thead>
            <tbody>
                {users.map((user) => (
                    <tr key={user.id}>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.age}</td>
                        <td>
                            <button onClick={() => deleteUser(user.id)}>Удалить</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default UserTable;