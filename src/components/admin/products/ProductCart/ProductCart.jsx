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
import { useLayoutEffect } from "react";
import img1 from "../../../../assets/images/podcasts/podcasr01.png";
import img2 from "../../../../assets/images/podcasts/podcast02.png";
import Image from "next/image";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { product } from "@/redux/slices/productSlice";
import { useRouter } from "next/navigation";
import moment from "moment/moment";

import { ToastContainer, toast } from "react-toastify";

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
  const router = useRouter();

  const state = useSelector((state) => state.product);
  const dispatch = useDispatch();
  const defaultMaterialTheme = createTheme();
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
            src={item.cover_image.image_url}
            alt={item.name}
            height={60}
            width={60}
          />
        );
      },
    },
    { title: "Product", field: "name" },
    {
      title: "Category",
      field: "category.name",
    },
    {
      title: "Quantity",
      filed: "stock_quantity",
      render: (item) => {
        return item.stock_quantity;
      },
    },
    {
      title: "Price",
      field: "regular_price",
    },
    {
      title: "Sale Price",
      field: "sale_price",
    },
    {
      title: "Published",
      field: "createdAt",
      render: (item) => {
        return moment(item.createdAt).format("LL");
      },
    },
  ];

  const [entries, setEnteries] = useState([]);
  const hanldeDeleted = (event, data) => {
    setIsLoading(true);
    fetch(`${process.env.NEXT_PUBLIC_URL}api/product/${data._id}`, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success === 1) {
          toast.success("Product delete Success fully", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });

          dispatch(product());
          let arr = JSON.parse(JSON.stringify(state.data));
          setEnteries(arr);
        } else {
          toast.warn("Product not delete successfully", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
        }
      });
  };
  const hanldeViewd = (event, id) => {
    router.push(`/admin/product/view-product/${id}`);
  };

  useEffect(() => {
    let arr = JSON.parse(JSON.stringify(state.data));
    setEnteries(arr);
    if (arr.length > 0) {
      setIsLoading(false);
    } else {
      fetch(`${process.env.NEXT_PUBLIC_URL}api/product`, {
        headers: {
          "Content-Type": "application/json",
        },
        method: "GET",
      })
        .then((res) => res.json())
        .then((data) => {
          setEnteries(data.data.product);
        });
    }
  }, []);

  const hanldeUpdated = (event, id) => {
    router.push(`/admin/product/product-update/${id}`);
  };

  return (
    <>
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
              onClick: (event, data) => hanldeUpdated(event, data._id),
            },
            {
              icon: () => <VisibilityOutlinedIcon />,
              // tooltip: "Change Status",
              onClick: (event, data) => hanldeViewd(event, data._id),
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
      <ToastContainer />
    </>
  );
};

export default ProductCart;
