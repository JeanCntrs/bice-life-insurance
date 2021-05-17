import React from 'react';
import ApiState from './context/ApiState';
import Header from './components/Header';
import Selector from './components/Selector';
import Card from './components/Card';
import { ToastContainer } from 'react-toastify';

const App = () => {
    return (
        <ApiState>
            <Header />
            <Selector />
            <Card />
            <ToastContainer
                position="top-right"
                autoClose={5000}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnVisibilityChange
                draggable
                pauseOnHover
            />
        </ApiState>
    );
}

export default App;