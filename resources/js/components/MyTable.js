import React from 'react';
import ReactDOM from 'react-dom';
import Table from './Table';

function MyTable() {
    return (
        <div className="container">

        </div>
        );
}

export default MyTable;

if (document.getElementById('MyTable')) {
    ReactDOM.render(<MyTable />, document.getElementById('MyTable'));
}
