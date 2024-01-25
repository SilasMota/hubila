import "./datatable.scss"
import { DataGrid } from '@mui/x-data-grid';
import { userColumns, userRows } from "../../datatabelsource";
import { DeleteForeverRounded, RemoveRedEyeRounded } from "@mui/icons-material";

const Datatable = () => {

    const actionColumn = [
        {
            field:"action", 
            headerName: "Action", 
            width: 100,
            sortable: false,
            disableColumnMenu:true,
            renderCell:() =>{
                return(
                    <div className="cellAction">
                        <div className="viewButton"><RemoveRedEyeRounded fontSize="small"/></div>
                        <div className="deleteButton"><DeleteForeverRounded fontSize="small"/></div>
                    </div>
                )
            },
        }
    ];
    

    return (  
        <div className="datatable">
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