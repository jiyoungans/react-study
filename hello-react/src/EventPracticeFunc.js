import React, { useState } from 'react';

const EventPracticeFunc = () => {
    const [form, setForm] = useState({
        username : '',
        message : ''
    });
    const { username, message } = form;

    const onChange = (e) => {
        const nextForm = {
            ...form, // copy original array values
            [e.target.name]: e.target.value // replace with new values
        };
        setForm(nextForm);
    };
    const onClick = () => {
        alert(username+" : "+message);
        setForm({
            username : '',
            message : ''
        })
    };
    const onKeyPress = (e) => {
        if(e.key === 'Enter') onClick();
    };

    return (
        <div>
            <input type="text" name="username" placeholder="input any name" value={username}
                   onChange={onChange} />
            <input type="text" name="message" placeholder="input any message" value={message}
                   onChange={onChange} onKeyPress={onKeyPress} />
            <button onClick={onClick}>check</button>
        </div>
    );
};

export default EventPracticeFunc;