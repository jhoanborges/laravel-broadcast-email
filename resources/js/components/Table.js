import React from "react";
import ReactTable from "react-table";
import "react-table/react-table.css";

class Table extends React.Component {
 constructor() {
     super();
     this.state = {
      data: this.props.data,
      loading: false,
      pages: 0
  };
}

getTestData(page, pageSize, sorted, filtered, handleRetrievedData) {
    let url = this.baseURL + "/getData";
    let postObject = {
        page: page,
        pageSize: pageSize,
        sorted: sorted,
        filtered: filtered,
    };

    return this.post(url, postObject).then(response => handleRetrievedData(response)).catch(response => console.log(response));
}

post(url, params = {}) {
    return axios.post(url, params)
}



render() {
  const { data } = this.state;
  return (
      <ReactTable
      data={data}
      pages={this.state.pages}
      columns={[
       {
         Header: "Index",
         accessor: "index"
     },
     {
         Header: "Status",
         accessor: "status"
     },
     {
         Header: "Name",
         accessor: "name"
     }
     ]}
     defaultPageSize={10}
     className="-striped -highlight"
     loading={this.state.loading}
     showPagination={true}
     showPaginationTop={false}
     showPaginationBottom={true}
     pageSizeOptions={[5, 10, 20, 25, 50, 100]}
                     manual // this would indicate that server side pagination has been enabled
                     onFetchData={(state, instance) => {
                       this.setState({loading: true});
                       testService.getTestData(state.page, state.pageSize, state.sorted, state.filtered, (res) => {
                           this.setState({
                               data: res.data.rows,
                               pages: res.data.pages,
                               loading: false
                           })
                       });
                   }}
                   />
                   );
}
}

}
