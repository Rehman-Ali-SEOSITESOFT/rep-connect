import React, { useRef, forwardRef, useEffect } from "react";
import MaterialTable from "material-table";
import { useState } from "react";
import ArrowUpward from "@material-ui/icons/ArrowUpward";
import ChevronLeft from "@material-ui/icons/ChevronLeft";
import ChevronRight from "@material-ui/icons/ChevronRight";
import Clear from "@material-ui/icons/Clear";
import Edit from "@material-ui/icons/Edit";
import FilterList from "@material-ui/icons/FilterList";
import FirstPage from "@material-ui/icons/FirstPage";
import LastPage from "@material-ui/icons/LastPage";
import Remove from "@material-ui/icons/Remove";
import SaveAlt from "@material-ui/icons/SaveAlt";
import Search from "@material-ui/icons/Search";
import { TablePagination, Paper } from "@material-ui/core";
import VisibilityOutlinedIcon from "@material-ui/icons/Visibility";
import DeleteIcon from "@material-ui/icons/Delete";
import { ThemeProvider, createTheme } from "@mui/material";
import Loader from "../../../../assets/images/admin/product-loader.gif";
const tableIcons = {
  Delete: forwardRef((props, ref) => <DeleteIcon {...props} ref={ref} />),
  DetailPanel: forwardRef((props, ref) => (
    <ChevronRight {...props} ref={ref} />
  )),
  Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
  View: forwardRef((props, ref) => (
    <VisibilityOutlinedIcon {...props} ref={ref} />
  )),
  Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
  Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
  FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
  LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
  NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  PreviousPage: forwardRef((props, ref) => (
    <ChevronLeft {...props} ref={ref} />
  )),
  ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
  SortArrow: forwardRef((props, ref) => <ArrowUpward {...props} ref={ref} />),
  ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
};
const ProductCart = () => {
  const [isLoading, setIsLoading] = useState(true);
  const tableRef = useRef(null);
  const defaultMaterialTheme = createTheme();
  const columns = [
    {
      title: "Id",
      field: "id",
    },
    { title: "Product", field: "title" },
    {
      title: "Category",
      field: "slug",
    },
    {
      title: "Price",
      field: "userNicename",
    },
    {
      title: "Published",
      field: "featured_image",
      // render: (rowData) => (
      //   <img src={rowData.featured_image.medium} height={100} width={100} />
      // ),
    },
  ];

  const [entries, setEnteries] = useState();
  const DeleteHandler = (data, id) => {};
  const Updatehandler = (data, id) => {};
  const Viewhandler = (data) => {};

  return (
    <>
      <ThemeProvider theme={defaultMaterialTheme}>
        <MaterialTable
          tableRef={tableRef}
          icons={tableIcons}
          columns={columns}
          data={entries}
          actions={[
            {
              icon: () => <DeleteIcon />,
              tooltip: "Remove",
              onClick: (event, data) => DeleteHandler(data),
            },
            {
              icon: () => <Edit />,
              tooltip: "Change Status",
              onClick: (event, data) =>
                Updatehandler({
                  e: event,
                  d: data,
                }),
            },

            {
              icon: () => <VisibilityOutlinedIcon />,
              tooltip: "View",
              onClick: (event, data) => Viewhandler(data),
            },
          ]}
          isLoading={isLoading}
          options={{
            // pageSize: 10,
            // pageSizeOptions: [5, 10, 15, 20],
            actionsColumnIndex: -1,
            exportButton: false,
            sorting: true,
            search: true,
            paging: true,
            debounceInterval: 1500,
            headerStyle: {
              fontWeight: "bold",
            },
          }}
          components={{
            Pagination: (props) => <TablePagination {...props} />,
            OverlayLoading: (props) => (
              <div className="custom-loaderp">
                <img
                  className="img-fluid-logoop"
                  src={Loader.src}
                  alt="loading"
                />
              </div>
            ),
            Container: (props) => <Paper {...props} elevation={0} />,
          }}
        />
      </ThemeProvider>
    </>
  );
};

export default ProductCart;
