import React , {useState} from "react"
import { DataGrid } from '@mui/x-data-grid';
import "./userdata.scss"

const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
        field: 'firstName',
        headerName: 'First name',
        width: 150,
        editable: true,
    },
    {
        field: 'lastName',
        headerName: 'Last name',
        width: 150,
        editable: true,
    },
    {
        field: 'Phone',
        headerName: 'Phone',
        type: 'number',
        width: 150,
        editable: false,
    },
    {
        field: 'Country',
        headerName: 'Country',
        sortable: true,
        width: 100,
    },
];






const UserData = (props) => {

    return (

        <div className="userdata">
            <button className="btn-add" onClick={() => props.history.replace("/addUser")}>Add User</button>
            <div className="table">
                <DataGrid
                    rows={props.data}
                    columns={columns}
                    pageSize={6}
                    rowsPerPageOptions={[5]}
                    checkboxSelection
                    disableSelectionOnClick
                />
            </div>
        </div>
    )
}

export default UserData