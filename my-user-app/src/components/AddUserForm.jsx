import React, { useState } from 'react';

const AddUserForm = ({ addUser }) => {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (name && age) {
            addUser({ id: Date.now(), name, age });
            setName('');
            setAge('');
        } else {
            alert("Пожалуйста, заполните все поля.");
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                placeholder="Имя" 
                value={name} 
                onChange={(e) => setName(e.target.value)} 
            />
            <input 
                type="number" 
                placeholder="Возраст" 
                value={age} 
                onChange={(e) => setAge(e.target.value)} 
            />
            <button type="submit">Добавить пользователя</button>
        </form>
    );
};

export default AddUserForm;