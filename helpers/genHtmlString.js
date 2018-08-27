const htmlString = () => {
    return `
    <!DOCTYPE html>
<html>
    <head>
            <!-- <link rel="stylesheet" href="styles.css"> -->
    </head>
    <body>
            <style type="text/css">
                .tg  {border-collapse:collapse;border-spacing:0;border:2px solid black;}
                .tg td{font-family:Arial, sans-serif;font-size:14px;padding:0px 0px;border:2px solid black;overflow:hidden;word-break:normal;border-color:black;}
                .tg th{font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:0px 0px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:black;}
                .tg .tg-us36{border-color:inherit;vertical-align:top;}
                .tg .tg-p8bj{font-weight:bold;border-color:inherit;vertical-align:top}
                </style>
          <style type="text/css">
                  .header{
                  background:white;
                  }
                  .header_center {
                      text-align: center;
                      padding: 15px 15px 15px 15px;

                  }
                  .header_top {
                      background:white;
                  }
                  .header_top_left{
                      float:left;
                      text-align: left;
                      background: white;
                      width:50%;
                  }
                  .header_top_right{
                      float:right;
                      text-align: right;
                      background: white;
                      width:50%;
                  }
                  #invoice{
                      font-weight: 600;
                      padding-left: 80px;
                      margin-top:4px;
                  }
                  #org_copy{
                      padding-right:50px;
                      margin-top:4px;
                  }
                  .title{
                      font-size: 18px;
                      color:#000;
                      text-align:center;
                      margin-bottom: 5px;
                      margin-top: 5px;
                  }
                  .subtitle{
                      font-size: 14px;
                      color:#000;
                      text-align:center;
                      margin-bottom: 5px;
                      margin-top: 5px;
                  }
                  .footer{
                      background:white;
                      margin: 0%;
                  }
                  .footer_bottom {
                      background: white;
                      margin-bottom: 0px;
                  }

                  .footer_top {
                      background:white;
                  }
                  .footer_top_left{
                      float:left;
                      text-align: left;
                      background: white;
                      width:50%;
                  }
                  .footer_top_right{
                      float:right;
                      text-align: right;
                      background: white;
                      width:50%;
                  }
                  .footer_bottom_left{
                      margin-bottom: 0px;
                      margin-right: 50%;
                      float:left;
                      text-align: left;
                      background: white;
                      width:50%;
                  }
                  .footer_bottom_right{
                      float:right;
                      margin-bottom: 0px;
                      margin-left: 50%;
                      margin-right: 0%;
                      text-align: right;
                      background: white;
                      width:50%;
                  }
                  .tnc{
                      font-weight: 600;
                      padding-left: 80px;
                      margin-top:0px;
                  }
                  .for{
                      font-weight: 600;
                      padding-right:50px;
                      margin-top:4px;
                  }
                  .subjectTo{
                      font-size: 14px;
                      color:#000;
                      text-align:right;
                      margin-right:4px;
                  }
                  .address{
                      font-size: 14px;
                      font-weight: 600;
                      color:#000;
                      text-align:left;
                      margin-bottom: 5px;
                      margin-left:5px;
                      margin-top: 5px;
                  }
                  .boldSmallTextLeft{
                      font-size:12px;font-weight: 600;text-align: left;margin-left: 4px;margin-top:4px;
                  }
                  .boldSmallTextCenter{
                      font-size:12px;font-weight: 600;text-align: center;margin-top:4px;
                  }
                  .boldSmallTextRight{
                      font-size:12px;font-weight: 600;text-align: right;margin-right: 4px;margin-top:4px;
                  }
                  .boldMidSizeTextLeft{
                      font-size:16px;font-weight: 600;text-align: left;margin-left: 4px;margin-top:4px;
                  }
                  .boldMidSizeTextRight{
                      font-size:16px;font-weight: 600;text-align: right;margin-right: 4px;margin-top:4px;
                  }
                  .boldMidSizeTextCenter{
                      font-size:16px;font-weight: 600;text-align: center;margin-top:4px;
                  }
                  .boldBigTextLeft{
                      font-size:22px;font-weight: 600;text-align: left;margin-left: 4px;margin-top:4px;
                  }
                  .boldBigTextRight{
                      font-size:22px;font-weight: 600;text-align: right;margin-right: 4px;margin-top:4px;
                  }
                  .boldBigTextCenter{
                      font-size:22px;font-weight: 600;text-align: center;margin-top:4px;
                  }
          </style>
                <table class="tg" style="table-layout: fixed; width: 210mm;height: 297mm;margin-left:auto;margin-right:auto;">
                <colgroup>
                <col style="width: 20px">
                <col style="width: 91px">
                <col style="width: 25px">
                <col style="width: 25px">
                <col style="width: 25px">
                <col style="width: 60px">
                <col style="width: 50px">
                <col style="width: 50px">
                </colgroup>
                  <tr height="160">
                        <td class="tg-us36" colspan="8">
                                <div class="header">
                                        <div class="header_top">
                                            <div class="header_top_left">
                                                <p id="invoice">TAX INVOICE</p>
                                                <p id="gstin">GSTIN  :RAJ792816AS2498ASAN</p>
                                            </div>
                                            <div class="header_top_right">
                                                    <p id="org_copy">Original Copy</p>
                                                    <p id="gstin">PAN  :RAJ792816AS2498ASAN</p>
                                                </div>
                                            </div>
                                    <div class="header_center">
                                        <h3 class="title">VIP PLASTERS</h3>
                                        <h4 class="subtitle">VILLAGE KHARI CHARNAN, KHASRA NO. 132/12,</h4>
                                        <h4 class="subtitle">TEH-KOLAYAT, DIST- BIKANER.(RAJASTHAN)</h4>
                                        <h4 class="subtitle">Email: POPUNIT16@GMAIL.COM</h4>
                                    </div>
                                </div>
                        </td>
                  </tr>
                  <tr height="20">
                    <td class="tg-us36" colspan="2">
                        <p style="float:right;margin:4px; width:60%; text-align: left;font-weight: 600;">G102</p>
                      <p style="margin:0px 4px 4px; text-align: start;font-weight: 600;font-size: 12px;">BILL<br>NO</p>
                      
                    </td>
                    <td class="tg-us36" colspan="6">
                        <p style="float:left;width:50%;text-align: end; margin-top:4px;font-size:12px;font-weight:600;">Date:</p>
                      <p style="float:right;width:45%;text-align: end; margin-top:4px;margin-right:4px;font-size:12px;font-weight:600;"> 21 January 2018</p></td>
                  </tr>
                  <tr height="20">
                    <td class="tg-us36" colspan="2"><p style="font-size: 12px;font-weight: 600;text-align: left;margin:4px 4px 4px;">BILLED TO</p></td>
                    <td class="tg-us36" colspan="6"><p style="font-size:12px;font-weight: 600;text-align:center;margin-top:4px;margin-bottom:4px;">GSTIN</p></td>
                  </tr>
                  <tr height="50">
                      <td class="tg-us36" colspan="2"><p style="font-size: 12px;font-weight: 600;text-align: left;margin:4px 4px 4px;">GURUKRIPA ENTERPRISES<br> MUMBAI MHARASTRA</p></td>
                    <td class="tg-us36" colspan="6"><p style="font-size:22px;font-weight: 600;text-align:center;margin-top:4px;margin-bottom:4px;">GHTU84302L4HJI965</p></td>
                  </tr>
                  <tr height="20"> 
                    <td class="tg-us36"><p class="boldSmallTextCenter" style="margin-bottom: 4px">SN</p></td>
                    <td class="tg-us36"><p class="boldSmallTextLeft" style="margin-bottom: 4px">Description of Goods</p></td>
                    <td class="tg-us36"><p class="boldSmallTextLeft" style="margin-bottom: 4px">HSN</p></td>
                    <td class="tg-us36"><p class="boldSmallTextLeft" style="margin-bottom: 4px">Unit</p></td>
                    <td class="tg-us36"><p class="boldSmallTextLeft" style="margin-bottom: 4px">Packing</p></td>
                    <td class="tg-us36"><p class="boldSmallTextRight" style="margin-bottom: 4px">Qty</p></td>
                    <td class="tg-us36"><p class="boldSmallTextRight" style="margin-bottom: 4px">Rate</p></td>
                    <td class="tg-us36"><p class="boldSmallTextRight" style="margin-bottom: 4px">Amount</p></td>
                  </tr>
                  <tr height="35" style="border-bottom-color: white;">
                    <td class="tg-us36"><p class="boldSmallTextCenter">1</p></td>
                    <td class="tg-us36"><p class="boldSmallTextLeft">Gypsum Powder</p></td>
                    <td class="tg-us36"><p class="boldSmallTextRight"></p></td>
                    <td class="tg-us36"><p class="boldSmallTextRight">0</p></td>
                    <td class="tg-us36"><p class="boldSmallTextRight"></p></td>
                    <td class="tg-us36"><p class="boldSmallTextRight">29</p></td>
                    <td class="tg-us36"><p class="boldSmallTextRight">1200</p></td>
                    <td class="tg-us36"><p class="boldSmallTextRight">34800</p></td>
                  </tr>
                  <tr height="35" style="border-bottom-color: white;">
                    <td class="tg-us36"><p class="boldSmallTextCenter">1</p></td>
                    <td class="tg-us36"><p class="boldSmallTextLeft">Gypsum Powder</p></td>
                    <td class="tg-us36"><p class="boldSmallTextRight"></p></td>
                    <td class="tg-us36"><p class="boldSmallTextRight">0</p></td>
                    <td class="tg-us36"><p class="boldSmallTextRight"></p></td>
                    <td class="tg-us36"><p class="boldSmallTextRight">29</p></td>
                    <td class="tg-us36"><p class="boldSmallTextRight">1200</p></td>
                    <td class="tg-us36"><p class="boldSmallTextRight">34800</p></td>
                  </tr>
                  <tr height="35" style="border-bottom-color: white;">
                    <td class="tg-us36"><p class="boldSmallTextCenter">1</p></td>
                    <td class="tg-us36"><p class="boldSmallTextLeft">Gypsum Powder</p></td>
                    <td class="tg-us36"><p class="boldSmallTextRight"></p></td>
                    <td class="tg-us36"><p class="boldSmallTextRight">0</p></td>
                    <td class="tg-us36"><p class="boldSmallTextRight"></p></td>
                    <td class="tg-us36"><p class="boldSmallTextRight">29</p></td>
                    <td class="tg-us36"><p class="boldSmallTextRight">1200</p></td>
                    <td class="tg-us36"><p class="boldSmallTextRight">34800</p></td>
                  </tr>
                  <tr height="35" style="border-bottom-color: white;">
                    <td class="tg-us36"><p class="boldSmallTextCenter">1</p></td>
                    <td class="tg-us36"><p class="boldSmallTextLeft">Gypsum Powder</p></td>
                    <td class="tg-us36"><p class="boldSmallTextRight"></p></td>
                    <td class="tg-us36"><p class="boldSmallTextRight">0</p></td>
                    <td class="tg-us36"><p class="boldSmallTextRight"></p></td>
                    <td class="tg-us36"><p class="boldSmallTextRight">29</p></td>
                    <td class="tg-us36"><p class="boldSmallTextRight">1200</p></td>
                    <td class="tg-us36"><p class="boldSmallTextRight">34800</p></td>
                  </tr>                  <tr height="35" style="border-bottom-color: white;">
                    <td class="tg-us36"><p class="boldSmallTextCenter">1</p></td>
                    <td class="tg-us36"><p class="boldSmallTextLeft">Gypsum Powder</p></td>
                    <td class="tg-us36"><p class="boldSmallTextRight"></p></td>
                    <td class="tg-us36"><p class="boldSmallTextRight">0</p></td>
                    <td class="tg-us36"><p class="boldSmallTextRight"></p></td>
                    <td class="tg-us36"><p class="boldSmallTextRight">29</p></td>
                    <td class="tg-us36"><p class="boldSmallTextRight">1200</p></td>
                    <td class="tg-us36"><p class="boldSmallTextRight">34800</p></td>
                  </tr>
                  <tr height="35" style="border-bottom-color: white;">
                    <td class="tg-us36"><p class="boldSmallTextCenter">1</p></td>
                    <td class="tg-us36"><p class="boldSmallTextLeft">Gypsum Powder</p></td>
                    <td class="tg-us36"><p class="boldSmallTextRight"></p></td>
                    <td class="tg-us36"><p class="boldSmallTextRight">0</p></td>
                    <td class="tg-us36"><p class="boldSmallTextRight"></p></td>
                    <td class="tg-us36"><p class="boldSmallTextRight">29</p></td>
                    <td class="tg-us36"><p class="boldSmallTextRight">1200</p></td>
                    <td class="tg-us36"><p class="boldSmallTextRight">34800</p></td>
                  </tr>
                  <tr height="35" style="border-bottom-color: white;">
                    <td class="tg-us36"><p class="boldSmallTextCenter">1</p></td>
                    <td class="tg-us36"><p class="boldSmallTextLeft">Gypsum Powder</p></td>
                    <td class="tg-us36"><p class="boldSmallTextRight"></p></td>
                    <td class="tg-us36"><p class="boldSmallTextRight">0</p></td>
                    <td class="tg-us36"><p class="boldSmallTextRight"></p></td>
                    <td class="tg-us36"><p class="boldSmallTextRight">29</p></td>
                    <td class="tg-us36"><p class="boldSmallTextRight">1200</p></td>
                    <td class="tg-us36"><p class="boldSmallTextRight">34800</p></td>
                  </tr>
                  <tr style="border-bottom-color: white;">
                    <td class="tg-us36"><p class="boldSmallTextCenter">1</p></td>
                    <td class="tg-us36"><p class="boldSmallTextLeft">Gypsum Powder</p></td>
                    <td class="tg-us36"><p class="boldSmallTextRight"></p></td>
                    <td class="tg-us36"><p class="boldSmallTextRight">0</p></td>
                    <td class="tg-us36"><p class="boldSmallTextRight"></p></td>
                    <td class="tg-us36"><p class="boldSmallTextRight">29</p></td>
                    <td class="tg-us36"><p class="boldSmallTextRight">1200</p></td>
                    <td class="tg-us36"><p class="boldSmallTextRight">34800</p></td>
                  </tr>
                  <tr height="2" style="border-color: black"></tr>
                  <tr height="20" style="border-top-color: black;">
                    <td class="tg-us36"/td>
                    <td class="tg-us36" style="border-bottom-color: white;"><p class="boldSmallTextCenter">Total</p></td>
                    <td class="tg-us36" colspan="4"></td>
                    <td class="tg-us36"></td>
                    <td class="tg-us36"><p class="boldSmallTextRight">34800</p></td>
                  </tr>
                  <tr height="55">
                    <td class="tg-us36"></td>
                    <td class="tg-us36" style="border-bottom-color: white;"></td>
                    <td class="tg-us36" colspan="4"><p class="boldBigTextLeft">CGST</p></td>
                    <td class="tg-us36"><p class="boldSmallTextRight">0.00</p></td>
                    <td class="tg-us36"><p class="boldSmallTextRight">0</p></td>
                  </tr>
                  <tr height="55">
                    <td class="tg-us36"></td>
                    <td class="tg-us36" style="border-bottom-color: white;"></td>
                    <td class="tg-us36" colspan="4"><p class="boldBigTextLeft">SGST</p></td>
                    <td class="tg-us36"><p class="boldSmallTextRight">0.00</p></td>
                    <td class="tg-us36"><p class="boldSmallTextRight">0</p></td>
                  </tr>
                  <tr  height="55">
                    <td class="tg-us36"></td>
                    <td class="tg-us36"></td>
                    <td class="tg-us36" colspan="4"><p class="boldBigTextLeft">IGST</p></td>
                    <td class="tg-us36"><p class="boldSmallTextRight">5.00</p></td>
                    <td class="tg-us36"><p class="boldSmallTextRight">1740</p></td>
                  </tr>
                  <tr  height="20">
                    <td class="tg-us36"></td>
                    <td class="tg-us36" colspan="2"><p class="boldSmallTextLeft">Grand Total</p></td>
                    <td class="tg-us36"></td>
                    <td class="tg-us36"></td>
                    <td class="tg-us36"><p class="boldSmallTextRight">29</p></td>
                    <td class="tg-us36"></td>
                    <td class="tg-us36"><p class="boldSmallTextRight">36540</p></td>
                  </tr>
                  <tr height="55">
                    <td class="tg-us36" colspan="5"><p class="boldSmallTextLeft">Place of Movement: BIKANER (RAJASTHAN - 08)</p></td>
                    <td class="tg-us36" colspan="2"><p class="boldMidSizeTextCenter">INVOICE AMOUNT</p></td>
                    <td class="tg-us36" colspan="1"><p class="boldMidSizeTextRight">36540</p></td>
                  </tr>
                  <tr height="20">
                    <td class="tg-us36" colspan="3"><p class="boldSmallTextLeft">VEHICLE NO.</p></td>
                    <td class="tg-us36" colspan="5"><p class="boldSmallTextCenter">RJ07GD 3774 (DRIVER MOB. NO.8094973647)</p></td>
                  </tr>
                  <tr height="130">
                    <td class="tg-us36" colspan="8">
                      <div class="footer">
                        <div class="footer_top">
                            <div class="footer_top_left">
                                <p class="tnc">Terms & Conditions:</p>
                              
                            </div>
                            <div class="footer_top_right">
                                <p class="for">FOR VIP PLASTERS</p>
                            </div>
                        </div>
                        <div class="footer_bottom">
                            <div class="footer_bottom_right">
                                <p class="subjectTo">E & OE. SUBJECT TO BIKANER JURIDICTION<br>PROP./AUTH</p>
                            </div>
                            <div class="footer_bottom_left">
                                <p class="address">PUNJAB NATIONAL BANK, SAMTA NAGAR, BIKANER
                                <br>A/C NO. 6253002100009259, IFSC CODE PUNB0225300</p>
                            </div>
                        </div>
                    </div>
                    </td>
                  </tr>
                </table>
    </body>
</html>
<!-- 8 cols max -->
<!-- 11 fix+ 1 populating row  -->
<!-- 1 header + 1 footer -->
    `
}
const htmlStrings ='<h1>Hey hey hey</h1><h2>Heading 2</h2><h3>Heading 3</h3>';
export default htmlString;