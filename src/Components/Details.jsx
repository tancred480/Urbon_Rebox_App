import React, { useState, useEffect } from "react";
import { Grid, Button } from "@material-ui/core";
import CustomModal from "./Custom/Modal";
import {useTranslation} from "react-i18next";

function Details(props) {
  const {t} = useTranslation();

  const [paidStatus, setPaidStatus] = useState("DUE");
  const [paymentDialogOpen, setPaymentDialogOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(true);
  const [inpObj, setInptObj] = useState({
    hiNo: "D2340",
    plotNo: "D240",
    ptinNo: "15420ABCD",
    houseNo: "6-4-323/A",
    ownerName: "John Deo",
    relationName: "James Wilson",
    builtUpArea: "500",
    landArea: "400",
    residentType: "Residental",
    houseTaxArears: "4002.34",
    houseTaxCurrent: "4000.45",
    libraryTaxArears: "4500.45",
    libraryTaxCurrent: "3434.33",
    totalTaxArears: "3434.54",
    totalTaxCurrent: "4344.45",
    grandTotal: "3434.45",
  });
  const handlePaymentRedirect = () => {
    window.location.href = "/success";
  };
  const handlePaymentModalOpen = () => {
    setIsOpen(true);
  };
  const handlePaymentModalClose = () => {
    setIsOpen(false);
  };
  return (
    <div className="details-pane">
      <div className="box">
        <Grid container spacing={3}>
          <Grid xs={12}>
            <table>
              <tbody>
                <tr>
                  <th>{t('hin_no')}</th>
                  <td>{t('hin_no_val',{hin_number:inpObj.hiNo})}</td>
                </tr>
                <tr>
                  <th>{t('pay_status')}</th>
                  <td>
                    {paidStatus && paidStatus == "PAID" ? (
                      <Button className="btn btn-primary btn-medium">
                        {t('paid')}
                      </Button>
                    ) : (
                      <Button className="btn btn-due btn-medium">{t('due')}</Button>
                    )}
                  </td>
                </tr>
                <tr>
                  <th>{t('owner_name')}</th>
                  <td>{t('owner_name_val',{owner:inpObj.ownerName})}</td>
                </tr>
                <tr>
                  <th>{t('relation_name')}</th>
                  <td>{t('relation_name_val',{relation:inpObj.relationName})}</td>
                </tr>
                <tr>
                  <th>{t('resident_type')}</th>
                  <td>{t('resident_type_val',{resident:inpObj.residentType})}</td>
                </tr>
                <tr>
                  <th>{t('house_no')}</th>
                  <td>{t('house_no_val',{house_number:inpObj.houseNo})}</td>
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
                  <th>{t('built_area')}</th>
                  <td>{t('built_area_val',{built_area:inpObj.builtUpArea})}</td>
                </tr>
                <tr>
                  <th>{t('land_area')}</th>
                  <td>{t('land_area_val',{land_area:inpObj.landArea})}</td>
                </tr>
                <tr>
                  <th>{t('house_tax')}</th>
                  <td>{t('house_tax_val',{house_tax:inpObj.houseTaxArears})}</td>
                </tr>
                <tr>
                  <th>{t('house_tax_curr')}</th>
                  <td>{t('house_tax_curr_val',{house_tax_curr:inpObj.houseTaxCurrent})}</td>
                </tr>
                <tr>
                  <th>{t('lib_tax_ar')}</th>
                  <td>{t('lib_tax_ar_val',{lib_tax_ar:inpObj.libraryTaxArears})}</td>
                </tr>
                <tr>
                  <th>{t('lib_tax_curr')}</th>
                  <td>{t('lib_tax_curr_val',{lib_tax_curr:inpObj.libraryTaxCurrent})}</td>
                </tr>
                <tr>
                  <th>{t('total_tax_ar')}</th>
                  <td>{t('total_tax_ar_val',{total_tax_ar:inpObj.totalTaxArears})}</td>
                </tr>
                <tr>
                  <th>{t('total_tax_curr')}</th>
                  <td>{t('total_tax_curr_val',{total_tax_curr:inpObj.totalTaxCurrent})}</td>
                </tr>
                <tr>
                  <th>{t('grand_total')}</th>
                  <td>{t('grand_total_val',{grand_total:inpObj.grandTotal})}</td>
                </tr>
              </tbody>
            </table>
          </Grid>
        </Grid>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          className="mt-30 mb-30"
        >
          {paidStatus && paidStatus == "PAID" ? (
            <Button className="btn btn-due btn-medium">Download Receipt</Button>
          ) : (
            <Button
              className="btn btn-primary btn-medium"
              onClick={handlePaymentRedirect}
            >
              {t('click_to_pay')}
            </Button>
          )}
        </Grid>
      </div>
      {paymentDialogOpen && (
        <CustomModal
          open={handlePaymentModalOpen}
          close={handlePaymentModalClose}
        >
          <h1>jnfndjnfjdns</h1>
        </CustomModal>
      )}
    </div>
  );
}

export default Details;
