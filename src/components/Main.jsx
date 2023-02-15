import React from 'react';
import Content from './Content';
import Form from './Form';
import Amount from './Amount';

function Main() {
    return (
        <main className="main">
            <Content />
                <Form />
                <Amount />     
        </main>
    );
}

export default Main;