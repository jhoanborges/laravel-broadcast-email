import React from 'react';
import ReactDOM from 'react-dom';
import Table from './Table';
function TableComponent() {
    return (
        <div>
            <Table/>
        </div>
        );
    }
    
    export default TableComponent;
    
    if (document.getElementById('table-component')) {
        ReactDOM.render(<TableComponent />, document.getElementById('table-component'));
    }
    