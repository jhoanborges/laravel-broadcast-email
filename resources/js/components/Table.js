import React from "react";
import ReactDOM from "react-dom";
import { CircularProgress, Button } from '@material-ui/core';
import MUIDataTable from "mui-datatables";
import Typography from '@material-ui/core/Typography';
import axios from 'axios';

class Table extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            page: 1,
            count: 1,
            data: [["Loading Data..."]],
            isLoading: false
          };
        this.fetchData = this.fetchData.bind(this)
      }

  componentDidMount() {
    this.getData();
  }

  // get data
  getData(){
    this.setState({ isLoading: true });
    this.fetchData(this.state.page);
  }

  fetchData(page){
//`/myApiServer?page=${page}`
    axios.post( route('users.get')+`?page=${page}` , {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
    })
    .then( (response) =>{
        console.log(response.data);
        this.setState({
            isLoading: false,
            data: response.data.data,
            count: response.data.total,
          });

    })
    .catch(function (error) {
        console.log(error);
    });

  }

  changePage (page) {
    this.setState({
      isLoading: true,
    });
    this.fetchData(page)
  };
  
  deleteRecord(item){
      console.log(item)
    axios.post( route('users.delete'), {
            id: item,
    })
    .then( (response) =>{
        console.log(response.data);
        this.fetchData()
    })
    .catch(function (error) {
        console.log(error);
    });

  }
  render() {

    const columns = ["id", "name", "apellidos", 'email', 'role', 'phone',
    {
        name: "Editar",
        options: {
          filter: false,
          sort: false,
          empty: true,
          customBodyRender: (value, tableMeta, updateValue) => {
            return (
              <Button variant="contained" color="primary" onClick={() => {
                const { data } = this.state;
                data.shift();
                this.setState({ data });
              }}>
                Editar
              </Button>
            );
          }
        }
      },
      {
        name: "Borrar",
        options: {
          filter: false,
          sort: false,
          empty: true,
          customBodyRender: (value, tableMeta, updateValue) => {
              console.log(tableMeta.rowData[0])
            return (
              <Button variant="contained" color="secondary" onClick={() => this.deleteRecord(tableMeta.rowData[0]) }>
                Borrar
              </Button>
            );
          }
        }
      },
    ];
    const { data, page, count, isLoading } = this.state;

    const options = {
      filter: true,
      filterType: 'dropdown',
      responsive: 'stacked',
      serverSide: true,
      count: count,
      page: page,
      /*onRowsSelect: (rowsSelected, allRows) => {
        console.log(rowsSelected);
        console.log(allRows);
      },*/
      onTableChange: (action, tableState) => {

        //console.log(action, tableState);
        // a developer could react to change on an action basis or
        // examine the state as a whole and do whatever they want

        switch (action) {
          case 'changePage':
            this.changePage(tableState.page);
            break;
        }
      }
    };
    return (
      <div>
        <MUIDataTable title={<Typography variant="h5">
          ACME Employee list
          {isLoading && <CircularProgress size={24} style={{marginLeft: 15, position: 'relative', top: 4}} />}
          </Typography>
          } data={data} columns={columns} options={options}  />
      </div>
    );

  }
}

export default Table;