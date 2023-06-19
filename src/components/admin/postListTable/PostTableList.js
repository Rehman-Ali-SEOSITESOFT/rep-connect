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
import axios from "axios";
import Image from "next/image";
import Spinner from "@/components/spinner/Spinner";
import "./PostTableList.css";
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
const PostTableList = () => {
  const [loading, setLoading] = useState(true);
  const defaultMaterialTheme = createTheme();
  const [entries, setEnteries] = useState([]);
  const hanldeDeleted = (event, data) => {
    console.log("Delete Handler", data);
  };
  const hanldeUpdated = (event, data) => {
    console.log("Updated Handler", event, data);
  };
  const columns = [
    {
      title: "SR",
      field: "_id",
      render: (rowData) => {
        return <p>{rowData.tableData.id + 1}</p>;
      },
    },
    {
      title: "Image",
      field: "cover_image",
      render: (item) => {
        return (
          <Image
            src={item.featured_image.image_url}
            alt={item.title}
            height={60}
            width={60}
          />
        );
      },
    },
    { title: "Product", field: "title" },
    {
      title: "Description",
      field: "description",
    },
    // {
    //   title: "Quantity",
    //   filed: "stock_quantity",
    //   render: (item) => {
    //     return item.stock_quantity;
    //   },
    // },
    // {
    //   title: "Price",
    //   field: "regular_price",
    // },
    // {
    //   title: "Sale Price",
    //   field: "sale_price",
    // },
  ];

  useEffect(() => {
    setLoading(true);
    axios
      .get("https://anxious-foal-shift.cyclic.app/api/post")
      .then((resp) => {
        console.log(resp.data.data.post);
        setEnteries(resp.data.data.post);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <div className="allPosts_wrapper">
            <ThemeProvider theme={defaultMaterialTheme}>
              <MaterialTable
                title="Product"
                icons={tableIcons}
                columns={columns}
                data={entries}
                actions={[
                  {
                    icon: () => <DeleteIcon />,
                    // tooltip: "Remove",
                    onClick: (event, data) => hanldeDeleted(event, data),
                  },
                  {
                    icon: () => <Edit />,
                    // tooltip: "Change Status",
                    onClick: (event, data) => hanldeUpdated(event, data),
                  },
                ]}
                // isLoading={isLoading}
                options={{
                  // pageSize: 10,
                  // pageSizeOptions: [5, 10, 15, 20],
                  actionsColumnIndex: -1,
                  exportButton: false,
                  sorting: true,
                  search: true,
                  paging: true,
                  debounceInterval: 100,
                  headerStyle: {
                    fontWeight: "bold",
                  },
                }}
                components={{
                  Pagination: (props) => <TablePagination {...props} />,

                  Container: (props) => <Paper {...props} elevation={0} />,
                }}
              />
            </ThemeProvider>
          </div>
        </>
      )}
    </>
  );
};

export default PostTableList;
