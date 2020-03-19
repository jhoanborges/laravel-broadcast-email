import React from 'react';
import ReactDOM from 'react-dom';

function TableComponent() {
    return (
        <div className="container">
                        <div className="card-header">Example table</div>
        </div>
    );
}

export default TableComponent;

if (document.getElementById('table-component')) {
    ReactDOM.render(<TableComponent />, document.getElementById('table-component'));
}
