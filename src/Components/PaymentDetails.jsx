import React, { useState, useEffect } from "react";
import {
  Grid,
  Button,
  TextField,
  InputAdornment,
  Typography,
} from "@material-ui/core";
import { Alert, AlertTitle } from "@material-ui/lab";
import {useTranslation} from "react-i18next";

function PaymentDetails() {
  const {t} = useTranslation();

  const [paidStatus, setPaidStatus] = useState("PAID");
  const [inpObj, setInptObj] = useState({
    hiNo: "D2340",
    plotNo: "D240",
    ptinNo: "15420ABCD",
    hNo: "6-4-323/A",
    ownerName: "John Deo",
    residentType: "Residental",
    grandTotal: "3434.45",
    transcationReferenceNo: "2334838483848",
  });

  return (
    <div className="paymentDetails-pane">
      <div className="box">
        <Grid container spacing={2} className="text-center">
          <Grid xs={12}>
            <table>
              <tbody>
                <tr>
                  <th>{t('hin_no')}</th>
                  <td>{t('hin_no_val',{hin_number:inpObj.hiNo})}</td>
                </tr>
                <tr>
                  <th>{t('owner_name')}</th>
                  <td>{t('owner_name_val',{owner:inpObj.ownerName})}</td>
                </tr>
                <tr>
                  <th>{t('resident_type')}</th>
                  <td>{t('resident_type_val',{resident:inpObj.residentType})}</td>
                </tr>
                <tr>
                  <th>{t('trans_ref_no')}</th>
                  <td>{t('trans_ref_no_val',{trans_ref_no:inpObj.transcationReferenceNo})}</td>
                </tr>
                <tr>
                  <th>{t('plot_no')}</th>
                  <td>{t('plot_no_val',{plot_number:inpObj.plotNo})}</td>
                </tr>
                <tr>
                  <th>{t('ptin_no')}</th>
                  <td>{t('ptin_no_val',{ptin_number:inpObj.ptinNo})}</td>
                </tr>
                <tr>
                  <th>{t('grand_total')}</th>
                  <td>{t('grand_total_val',{grand_total:inpObj.grandTotal})}</td>
                </tr>
              </tbody>
            </table>
          </Grid>
          <Grid item xs={12}>
            <Alert severity="success">
              <AlertTitle>{t('pay_succ_msg')}</AlertTitle>
            </Alert>
          </Grid>
          <Grid item xs={12}>
            <Button className="btn btn-due btn-medium">{t('dwnld_recpt')}</Button>
          </Grid>
        </Grid>
        <Grid container spacing={3} className="text-center"></Grid>
      </div>
    </div>
  );
}

export default PaymentDetails;
