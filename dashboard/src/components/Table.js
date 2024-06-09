import React from "react";
import { DataGrid } from "@mui/x-data-grid";

const Table = ({ rowsData }) => {
  const rows = [
    { id: 1, col1: "Hello", col2: "World" },
    { id: 2, col1: "DataGridPro", col2: "is Awesome" },
    { id: 3, col1: "MUI", col2: "is Amazing" },
  ];

  const columns = [
    { field: "col0", headerName: "id", width: 150 },
    { field: "col1", headerName: "Technicien", width: 150 },
    { field: "col2", headerName: "Date", width: 150 },
  ];

  return (
    <div>
      <DataGrid
        rows={rowsData}
        columns={columns}
        getRowId={(row) => row.id}
        style={{ width: "80%", margin: "auto" }}
        pageSizeOptions={[5, 10, 25]}
      />
    </div>
  );
};

export default Table;
