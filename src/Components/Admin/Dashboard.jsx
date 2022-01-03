import React, { useState, useEffect } from "react";
import CustomTable from "../Custom/CustomTable";
import { Grid, Button } from "@material-ui/core";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import {useTranslation} from "react-i18next";

const list = [
  {
    hidNo: "DIN 2323",
    status: "Paid",
    nameOfOwner: "James Wilson",
    typeOfResidence: "Residental",
    ptinNo: 33434,
    amount: 4000,
    mobileNumber: 9834343434,
  },
  {
    hidNo: "DIN 2323",
    status: "Paid",
    nameOfOwner: "James Wilson",
    typeOfResidence: "Residental",
    ptinNo: 33434,
    amount: 4000,
    mobileNumber: 9834343434,
  },
  {
    hidNo: "DIN 2323",
    status: "DUE",
    nameOfOwner: "James Wilson",
    typeOfResidence: "Residental",
    ptinNo: 33434,
    amount: 4000,
    mobileNumber: 9834343434,
  },
  {
    hidNo: "DIN 2323",
    status: "Paid",
    nameOfOwner: "James Wilson",
    typeOfResidence: "Residental",
    ptinNo: 33434,
    amount: 4000,
    mobileNumber: 9834343434,
  },
  {
    hidNo: "DIN 2323",
    status: "Paid",
    nameOfOwner: "James Wilson",
    typeOfResidence: "Residental",
    ptinNo: 33434,
    amount: 4000,
    mobileNumber: 9834343434,
  },
  {
    hidNo: "DIN 2323",
    status: "Paid",
    nameOfOwner: "James Wilson",
    typeOfResidence: "Residental",
    ptinNo: 33434,
    amount: 4000,
    mobileNumber: 9834343434,
  },
  {
    hidNo: "DIN 2323",
    status: "Paid",
    nameOfOwner: "James Wilson",
    typeOfResidence: "Residental",
    ptinNo: 33434,
    amount: 4000,
    mobileNumber: 9834343434,
  },
  {
    hidNo: "DIN 2323",
    status: "Paid",
    nameOfOwner: "James Wilson",
    typeOfResidence: "Residental",
    ptinNo: 33434,
    amount: 4000,
    mobileNumber: 9834343434,
  },
  {
    hidNo: "DIN 2323",
    status: "Paid",
    nameOfOwner: "James Wilson",
    typeOfResidence: "Residental",
    ptinNo: 33434,
    amount: 4000,
    mobileNumber: 9834343434,
  },
  {
    hidNo: "DIN 2323",
    status: "Paid",
    nameOfOwner: "James Wilson",
    typeOfResidence: "Residental",
    ptinNo: 33434,
    amount: 4000,
    mobileNumber: 9834343434,
  },
  {
    hidNo: "DIN 2323",
    status: "Paid",
    nameOfOwner: "James Wilson",
    typeOfResidence: "Residental",
    ptinNo: 33434,
    amount: 4000,
    mobileNumber: 9834343434,
  },
  {
    hidNo: "DIN 2323",
    status: "Paid",
    nameOfOwner: "James",
    typeOfResidence: "Residental",
    ptinNo: 33434,
    amount: 4000,
    mobileNumber: 9834343434,
  },
  {
    hidNo: "DIN 2323",
    status: "Paid",
    nameOfOwner: "James Wilson",
    typeOfResidence: "Residental",
    ptinNo: 33434,
    amount: 4000,
    mobileNumber: 9834343434,
  },
  {
    hidNo: "DIN 2323",
    status: "Paid",
    nameOfOwner: "James Wilson",
    typeOfResidence: "Residental",
    ptinNo: 33434,
    amount: 4000,
    mobileNumber: 9834343434,
  },
  {
    hidNo: "DIN 2323",
    status: "Paid",
    nameOfOwner: "James Wilson",
    typeOfResidence: "Residental",
    ptinNo: 33434,
    amount: 4000,
    mobileNumber: 9834343434,
  },
  {
    hidNo: "DIN 2323",
    status: "Paid",
    nameOfOwner: "James Wilson",
    typeOfResidence: "Residental",
    ptinNo: 33434,
    amount: 4000,
    mobileNumber: 9834343434,
  },
  {
    hidNo: "DIN 2323",
    status: "Paid",
    nameOfOwner: "James Wilson",
    typeOfResidence: "Residental",
    ptinNo: 33434,
    amount: 4000,
    mobileNumber: 9834343434,
  },
  {
    hidNo: "DIN 2323",
    status: "Paid",
    nameOfOwner: "Raja Wilson",
    typeOfResidence: "Residental",
    ptinNo: 33434,
    amount: 4000,
    mobileNumber: 9834343434,
  },
];

function AdminDashboard(props) {
  const {t} = useTranslation();

  const [data, setData] = useState(list);
  const columns = [
    { title: t('hid_no'), field: "hidNo" },
    {
      title: t('status'),
      field: "status",
      render: (row) => (
        <Button className={row.status == "Paid" ? " btn-primary" : "btn-due"}>
          {row.status}
        </Button>
      ),
    },
    { title: t('name_of_owner'), field: "nameOfOwner" },
    { title: t('type_of_res'), field: "typeOfResidence" },
    { title: t('ptin_no'), field: "ptinNo" },
    { title: t('amount_in_rupee'), field: "amount" },
    { title: t('mob_no'), field: "mobileNumber" },
  ];

  useEffect(() => {
    setData(list);
  }, []);

  return (
    <div className="admin-dashboard">
      <Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        className="mt-30 "
      >
        <Grid item>
          <Button
            variant="contained"
            color="default"
            className="btn"
            startIcon={<CloudUploadIcon />}
          >
            {t('upload')}
          </Button>
        </Grid>
        <Grid item>
          <Button variant="contained" className="btn btn-primary">
            {t('logout')}
          </Button>
        </Grid>
      </Grid>
      <div className="mt-30">
        <CustomTable data={data} columns={columns} />
      </div>
    </div>
  );
}

export default AdminDashboard;
