import React, { useState } from 'react';
import NewMessageForm from './form/NewMessageForm';
import MessageList from './messages/MessageList';

const App = () => {
    const [messages, setMessages] = useState([]);
    const [messages2, setMessages2] = useState([]);
    const handleSend = newMessage => {
        setMessages([newMessage, ...messages]);
    };

    const handleSend2 = newMessage2 => {
        setMessages2([newMessage2, ...messages2]);
    };


    return (
        <div>
            <NewMessageForm onSend={handleSend}/>
            <MessageList data={messages} />
            <NewMessageForm onSend={handleSend2}/>
            <MessageList data={messages2} />
        </div>
    );
};

export default App;