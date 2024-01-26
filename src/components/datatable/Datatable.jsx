import "./datatable.scss"
import { DataGrid } from '@mui/x-data-grid';
import { userColumns, userRows } from "../../datatabelsource";
import { DeleteForeverRounded, RemoveRedEyeRounded } from "@mui/icons-material";
import { Link } from "react-router-dom";

const Datatable = () => {

    const actionColumn = [
        {
            field:"action", 
            headerName: "Action", 
            width: 100,
            sortable: false,
            disableColumnMenu:true,
            renderCell:(params) =>{
                return(
                    <div className="cellAction">
                        <Link to={`/users/${params.row.id}`}>
                            <div className="viewButton"><RemoveRedEyeRounded fontSize="small"/></div>
                        </Link>
                        <Link>
                            <div className="deleteButton"><DeleteForeverRounded fontSize="small"/></div>
                        </Link>
                    </div>
                )
            },
        }
    ];
    

    return (  
        <div className="datatable">
            <div className="datatableTitle">
                Title
                <Link to="/users/new" className="link"> Add New</Link>
            </div>
            
            <DataGrid 
            rows={userRows} 
            columns={userColumns.concat(actionColumn)} 
            initialState={{
                pagination: {
                    paginationModel:{page:0, pageSize:5}
                }
            }}
            pageSizeOptions={[5, 10]}
            checkboxSelection
            />
        </div>
    );
}
 
export default Datatable;