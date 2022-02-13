// Actual Registration template
exports.registrationTemplate = (username) => {
    let subject = "Registration Successful"
    let template = `<!DOCTYPE html>
    <html>
    <head>
        <meta http-equiv="Content-type" content="text/html; charset=utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="" content="date=no" />
        <meta name="" content="address=no" />
        <meta name="" content="telephone=no" />
        <meta name="" />
        <!--<![endif]-->
        <title>Brand wars</title>
    
        <style type="text/css" media="screen">
            /* Linked Styles */
            body { padding:0 !important; margin:0 !important; display:block !important; min-width:100% !important; width:100% !important; background:#2e57ae; -webkit-text-size-adjust:none; font-family:arial; }
            a { color:#000001; text-decoration:none }
            p { padding:0 !important; margin:0 !important } 
            img { -ms-interpolation-mode: bicubic; /* Allow smoother rendering of resized image in Internet Explorer */ }
            .mcnPreviewText { display: none !important; }
            
            /* Mobile styles */
            @media only screen and (max-device-width: 480px), only screen and (max-width: 480px) {
                .mobile-shell { width: 100% !important; min-width: 100% !important; }
                
                .m-center { text-align: center !important; }
                .text3,
                .text-footer,
                .text-header { text-align: center !important; }
                
                .center { margin: 0 auto !important; }
                
                .td { width: 100% !important; min-width: 100% !important; }
                
                .m-br-15 { height: 15px !important; }
                .p30-15 { padding: 30px 15px !important; }
                .p30-15-0 { padding: 30px 15px 0px 15px !important; }
                .p40 { padding-bottom: 30px !important; }
                .box,
                .footer,
                .p15 { padding: 15px !important; }
                .h2-white { font-size: 40px !important; line-height: 44px !important; text-align: center !important; }
    
                .h2 { font-size: 42px !important; line-height: 50px !important; }
    
                .m-td,
                .m-hide { display: none !important; width: 0 !important; height: 0 !important; font-size: 0 !important; line-height: 0 !important; min-height: 0 !important; }
    
                .m-block { display: block !important; }
                .container { padding: 0px !important; }
                .separator { padding-top: 30px !important; }
    
                .fluid-img img { width: 100% !important; max-width: 100% !important; height: auto !important; }
    
                .column,
                .column-top,
                .column-dir,
                .column-empty,
                .column-empty2,
                .column-bottom,
                .column-dir-top,
                .column-dir-bottom { float: left !important; width: 100% !important; display: block !important; }
    
                .column-empty { padding-bottom: 10px !important; }
                .column-empty2 { padding-bottom: 30px !important; }
    
                .content-spacing { width: 15px !important; }
            }
        </style>
    </head>
    <body class="body" style="padding:0 !important; margin:0 !important; display:block !important; min-width:100% !important; width:100% !important; background:#f1f1f1; -webkit-text-size-adjust:none;">
        <table width="100%" border="0" cellspacing="0" cellpadding="0" bgcolor="#f1f1f1">
            <tr>
                <td align="center" valign="top" class="container" style="padding:50px 10px;">
                    <!-- Container -->
                    <table width="100%" border="0" cellspacing="0" cellpadding="0">
                        <tr>
                            <td align="center">
                                <table width="100%" border="0" cellspacing="0" cellpadding="0" class="mobile-shell">
                                    <tr>
                                        <td class="td" bgcolor="#ffffff" style="width:80%; min-width:80%; font-size:0pt; line-height:0pt; padding:0; margin:0; font-weight:normal;">
                                            <!-- Header -->
                                            <table width="100%" border="0" cellspacing="0" cellpadding="0" style="background:url('https://brandwars.s3.ap-south-1.amazonaws.com/misc/head-bg.jpg') no-repeat; background-size:100%;">
                                                <tr>
                                                    <td style="padding: 20px 30px 20px 30px;">
                                                        <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                                            <tr>
                                                                <th class="column" style="font-size:0pt; line-height:0pt; padding:0; margin:0; font-weight:normal;">
                                                                    <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                                                        <tr>
                                                                            <td class="img m-center" style="font-size:0pt; line-height:0pt; text-align:left;"><img src="https://brandwars.s3.ap-south-1.amazonaws.com/misc/logo.png" width="80" border="0" alt="" /></td>
                                                                        </tr>
                                                                    </table>
                                                                </th>
                                                                <th class="column-empty" width="1" style="font-size:0pt; line-height:0pt; padding:0; margin:0; font-weight:normal;"></th>
                                                                <th class="column" width="200" style="font-size:0pt; line-height:0pt; padding:0; margin:0; font-weight:normal;">
                                                                    <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                                                        <tr>
                                                                            <td class="text-header right" style="color:#fff; font-size:18px; line-height:12px; text-align:right;"><a href="#" target="_blank" class="link" style="color:#fff; text-decoration:none;"><span class="link" style="color:#fff; text-decoration:none;">Biggest War of the <br><h2>Biggest Brands</h2></span></a></td>
                                                                        </tr>
                                                                    </table>
                                                                </th>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                </tr>
                                            </table>
                                            <!-- END Header -->
    
                                            <!-- Intro -->
                                            <table width="100%" border="0" cellspacing="0" cellpadding="0" bgcolor="#ffffff">
                                                <tr>
                                                    <td style="padding: 30px 30px 30px 30px;">
                                                        <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                                            <tr>
                                                                <td style="color:#000000; font-size:26px; line-height:35px; text-align:center; padding-bottom:30px; font-weight:700;">Hi ${username},</td>
                                                            </tr>
                                                            <tr>
                                                                <td style="padding-bottom:40px; text-align:center;"><img src="https://brandwars.s3.ap-south-1.amazonaws.com/misc/register.png" width="100" border="0" alt="" /></td>
                                                            </tr>
                                                            <tr>
                                                                <td style="font-size:20px; line-height:26px; text-align:center; color:#000; padding-bottom:30px;"><strong>You have been successfully registered with Brand Wars,</strong> the best fantasy game in India.
                                                                Choose your brands wisely, make great companies and win prizes worth a fortune</td>
                                                            </tr>
                                                            
                                                            <!-- Button -->
                                                            <tr>
                                                                <td align="center" style="padding-bottom:30px;">
                                                                    <table border="0" cellspacing="0" cellpadding="0">
                                                                        <tr>
                                                                            <td class="text-button" style="background:#EF1E1E; color:#ffffff; font-size:18px; line-height:18px; text-align:center; padding:16px 20px; border-radius: 40px; font-weight: 700;"><a href="https://brandwars.com/register.html" target="_blank" class="link-white" style="color:#ffffff; text-decoration:none;">Start Playing</a></td>
                                                                        </tr>
                                                                    </table>
                                                                </td>
                                                            </tr>
                                                            <!-- END Button -->
                                                            
                                                            <tr>
                                                                <td style="font-size:20px; line-height:26px; text-align:center; color:#000; padding-bottom:30px;">Create your companies, try your skills? <br><strong>Join the war and win big!</strong></td>
                                                            </tr>
                                                            
                                                        </table>
                                                    </td>
                                                </tr>
                                            </table>
                                            <!-- END Intro -->
    
                                            <!-- Footer -->
                                            <table width="100%" border="0" cellspacing="0" cellpadding="0" bgcolor="#C4C4C4">
                                                <tr>
                                                    <td style="padding: 30px 30px 30px 30px;">
                                                        <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                                            <tr>
                                                                <td style="text-align:center; padding-bottom:20px;">
                                                                    <a href="https://app.brandwars.com/" target="_blank" style="color:#ffffff; text-decoration:none;"><img src="https://brandwars.s3.ap-south-1.amazonaws.com/misc/android.png" width="150" border="0" alt="" /></a>
                                                                    <a href="https://brandwars.in/index.html" target="_blank" style="color:#ffffff; text-decoration:none;"><img src="https://brandwars.s3.ap-south-1.amazonaws.com/misc/ios.png" width="150" border="0" alt="" /></a>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td style="color:#000000; font-size:18px; line-height:22px; text-align:center;">Unsubscribe</td>
                                                            </tr>
                                                            <tr>
                                                                <td style="padding: 30px 0px 0px 0px;" align="center">
                                                                    <table class="center" width="100%" border="0" cellspacing="0" cellpadding="0" style="text-align:center;">
                                                                        <tr>
                                                                            <td class="img" style="font-size:0pt; line-height:0pt;">
                                                                            <a style="margin:0 3px" href="#" target="_blank"><img src="https://brandwars.s3.ap-south-1.amazonaws.com/misc/fa.png" width="42" height="42" border="0" alt="" /></a>
                                                                            <a style="margin:0 3px" href="#" target="_blank"><img src="https://brandwars.s3.ap-south-1.amazonaws.com/misc/wp.png" width="42" height="42" border="0" alt="" /></a>
                                                                            <a style="margin:0 3px" href="#" target="_blank"><img src="https://brandwars.s3.ap-south-1.amazonaws.com/misc/insta.png" width="42" height="42" border="0" alt="" /></a>
                                                                            <a style="margin:0 3px" href="#" target="_blank"><img src="https://brandwars.s3.ap-south-1.amazonaws.com/misc/you.png" width="42" height="42" border="0" alt="" /></a>
                                                                            </td>
                                                                        </tr>
                                                                    </table>
                                                                </td>
                                                            </tr>
                                                            <td class="text-footer" style="padding-top: 30px; color:#000; font-size:12px; line-height:22px; text-align:center;">
                                                                Brand Wars Private Limited
                                                            </td>
                                                        </table>
                                                    </td>
                                                </tr>
                                            </table>
                                            <!-- END Footer -->
                                        </td>
                                    </tr>
                                    
                                </table>
                            </td>
                        </tr>
                    </table>
                    <!-- END Container -->
                </td>
            </tr>
        </table>
    </body>
    </html>`;
    return { subject: subject, body: template };
}

// Actual Cash Added Template
exports.cashAddedTemplate = (username, amount, txnId) => {
    let subject = "Cash Added Successfully"
    let template = `<!DOCTYPE html>
    <html>
    <head>
        <meta http-equiv="Content-type" content="text/html; charset=utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <!--<![endif]-->
        <title>Brand wars</title>
    
        <style type="text/css" media="screen">
            /* Linked Styles */
            body { padding:0 !important; margin:0 !important; display:block !important; min-width:100% !important; width:100% !important; background:#2e57ae; -webkit-text-size-adjust:none; font-family:arial; }
            a { color:#000001; text-decoration:none }
            p { padding:0 !important; margin:0 !important } 
            img { -ms-interpolation-mode: bicubic; /* Allow smoother rendering of resized image in Internet Explorer */ }
            .mcnPreviewText { display: none !important; }
            
            /* Mobile styles */
            @media only screen and (max-device-width: 480px), only screen and (max-width: 480px) {
                .mobile-shell { width: 100% !important; min-width: 100% !important; }
                
                .m-center { text-align: center !important; }
                .text3,
                .text-footer,
                .text-header { text-align: center !important; }
                
                .center { margin: 0 auto !important; }
                
                .td { width: 100% !important; min-width: 100% !important; }
                
                .m-br-15 { height: 15px !important; }
                .p30-15 { padding: 30px 15px !important; }
                .p30-15-0 { padding: 30px 15px 0px 15px !important; }
                .p40 { padding-bottom: 30px !important; }
                .box,
                .footer,
                .p15 { padding: 15px !important; }
                .h2-white { font-size: 40px !important; line-height: 44px !important; text-align: center !important; }
    
                .h2 { font-size: 42px !important; line-height: 50px !important; }
    
                .m-td,
                .m-hide { display: none !important; width: 0 !important; height: 0 !important; font-size: 0 !important; line-height: 0 !important; min-height: 0 !important; }
    
                .m-block { display: block !important; }
                .container { padding: 0px !important; }
                .separator { padding-top: 30px !important; }
    
                .fluid-img img { width: 100% !important; max-width: 100% !important; height: auto !important; }
    
                .column,
                .column-top,
                .column-dir,
                .column-empty,
                .column-empty2,
                .column-bottom,
                .column-dir-top,
                .column-dir-bottom { float: left !important; width: 100% !important; display: block !important; }
    
                .column-empty { padding-bottom: 10px !important; }
                .column-empty2 { padding-bottom: 30px !important; }
    
                .content-spacing { width: 15px !important; }
            }
        </style>
    </head>
    <body class="body" style="padding:0 !important; margin:0 !important; display:block !important; min-width:100% !important; width:100% !important; background:#f1f1f1; -webkit-text-size-adjust:none;">
        <table width="100%" border="0" cellspacing="0" cellpadding="0" bgcolor="#f1f1f1">
            <tr>
                <td align="center" valign="top" class="container" style="padding:50px 10px;">
                    <!-- Container -->
                    <table width="100%" border="0" cellspacing="0" cellpadding="0">
                        <tr>
                            <td align="center">
                                <table width="100%" border="0" cellspacing="0" cellpadding="0" class="mobile-shell">
                                    <tr>
                                        <td class="td" bgcolor="#ffffff" style="width:80%; min-width:80%; font-size:0pt; line-height:0pt; padding:0; margin:0; font-weight:normal;">
                                            <!-- Header -->
                                            <table width="100%" border="0" cellspacing="0" cellpadding="0" style="background:url('https://brandwars.s3.ap-south-1.amazonaws.com/misc/head-bg.jpg') no-repeat; background-size:cover;">
                                                <tr>
                                                    <td style="padding: 20px 30px 20px 30px;">
                                                        <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                                            <tr>
                                                                <th class="column" style="font-size:0pt; line-height:0pt; padding:0; margin:0; font-weight:normal;">
                                                                    <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                                                        <tr>
                                                                            <td class="img m-center" style="font-size:0pt; line-height:0pt; text-align:left;"><img src="https://brandwars.s3.ap-south-1.amazonaws.com/misc/logo.png" width="80" border="0" alt="" /></td>
                                                                        </tr>
                                                                    </table>
                                                                </th>
                                                                <th class="column-empty" width="1" style="font-size:0pt; line-height:0pt; padding:0; margin:0; font-weight:normal;"></th>
                                                                <th class="column" width="200" style="font-size:0pt; line-height:0pt; padding:0; margin:0; font-weight:normal;">
                                                                    <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                                                        <tr>
                                                                            <td class="text-header right" style="color:#fff; font-size:18px; line-height:12px; text-align:right;"><a href="#" target="_blank" class="link" style="color:#fff; text-decoration:none;"><span class="link" style="color:#fff; text-decoration:none;">Biggest War of the <br><h2>Biggest Brands</h2></span></a></td>
                                                                        </tr>
                                                                    </table>
                                                                </th>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                </tr>
                                            </table>
                                            <!-- END Header -->
    
                                            <!-- Intro -->
                                            <table width="100%" border="0" cellspacing="0" cellpadding="0" bgcolor="#ffffff">
                                                <tr>
                                                    <td style="padding: 30px 30px 30px 30px;">
                                                        <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                                            <tr>
                                                                <td style="color:#000000; font-size:26px; line-height:35px; text-align:center; padding-bottom:30px; font-weight:700;">Hi ${username},</td>
                                                            </tr>
                                                            <tr>
                                                                <td style="padding-bottom:40px; text-align:center;"><img src="https://brandwars.s3.ap-south-1.amazonaws.com/misc/wall.png" width="100" border="0" alt="" /></td>
                                                            </tr>
                                                            <tr>
                                                            <td style="font-size:20px; line-height:26px; text-align:center; color:#000; padding-bottom:30px;"><strong>₹${amount} has been added</strong> to your Brand Wars account! <br> Your Transaction ID is ${txnId}.</td>
                                                            </tr>
                                                            
                                                            <!-- Button -->
                                                            <tr>
                                                                <td align="center" style="padding-bottom:30px;">
                                                                    <table border="0" cellspacing="0" cellpadding="0">
                                                                        <tr>
                                                                            <td class="text-button" style="background:#EF1E1E; color:#ffffff; font-size:18px; line-height:18px; text-align:center; padding:16px 20px; border-radius: 40px; font-weight: 700;"><a href="https://brandwars.com/register.html" target="_blank" class="link-white" style="color:#ffffff; text-decoration:none;">Check Account Balance</a></td>
                                                                        </tr>
                                                                    </table>
                                                                </td>
                                                            </tr>
                                                            <!-- END Button -->
                                                            
                                                            <tr>
                                                                <td style="font-size:20px; line-height:26px; text-align:center; color:#000; padding-bottom:30px;">Create your companies, try your skills? <br><strong>Join the war and win big!</strong></td>
                                                            </tr>
                                                            
                                                        </table>
                                                    </td>
                                                </tr>
                                            </table>
                                            <!-- END Intro -->
    
                                            <!-- Footer -->
                                            <table width="100%" border="0" cellspacing="0" cellpadding="0" bgcolor="#C4C4C4">
                                                <tr>
                                                    <td style="padding: 30px 30px 30px 30px;">
                                                        <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                                            <tr>
                                                                <td style="text-align:center; padding-bottom:20px;">
                                                                    <a href="https://app.brandwars.com/" target="_blank" style="color:#ffffff; text-decoration:none;"><img src="https://brandwars.s3.ap-south-1.amazonaws.com/misc/android.png" width="150" border="0" alt="" /></a>
                                                                    <a href="https://brandwars.in/index.html" target="_blank" style="color:#ffffff; text-decoration:none;"><img src="https://brandwars.s3.ap-south-1.amazonaws.com/misc/ios.png" width="150" border="0" alt="" /></a>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td style="color:#000000; font-size:18px; line-height:22px; text-align:center;">Unsubscribe</td>
                                                            </tr>
                                                            <tr>
                                                                <td style="padding: 30px 0px 0px 0px;" align="center">
                                                                    <table width="100%" class="center" border="0" cellspacing="0" cellpadding="0" style="text-align:center;">
                                                                        <tr>
                                                                            <td class="img" style="font-size:0pt; line-height:0pt;">
                                                                            <a style="margin:0 3px" href="#" target="_blank"><img src="https://brandwars.s3.ap-south-1.amazonaws.com/misc/fa.png" width="42" height="42" border="0" alt="" /></a>
                                                                            <a style="margin:0 3px" href="#" target="_blank"><img src="https://brandwars.s3.ap-south-1.amazonaws.com/misc/wp.png" width="42" height="42" border="0" alt="" /></a>
                                                                            <a style="margin:0 3px" href="#" target="_blank"><img src="https://brandwars.s3.ap-south-1.amazonaws.com/misc/insta.png" width="42" height="42" border="0" alt="" /></a>
                                                                            <a style="margin:0 3px" href="#" target="_blank"><img src="https://brandwars.s3.ap-south-1.amazonaws.com/misc/you.png" width="42" height="42" border="0" alt="" /></a>
                                                                            </td>
                                                                        </tr>
                                                                    </table>
                                                                </td>
                                                            </tr>
                                                            <td class="text-footer" style="padding-top: 30px; color:#000; font-size:12px; line-height:22px; text-align:center;">
                                                                Brand Wars Private Limited
                                                            </td>
                                                        </table>
                                                    </td>
                                                </tr>
                                            </table>
                                            <!-- END Footer -->
                                        </td>
                                    </tr>
                                    
                                </table>
                            </td>
                        </tr>
                    </table>
                    <!-- END Container -->
                </td>
            </tr>
        </table>
    </body>
    </html>`;
    return { subject: subject, body: template };
}

// Actual Contest Joining Template
exports.contestJoiningTemplate = (username, matchName, entryFee) => {
    let subject = "Contest Joined Successfully"
    let template = `<!DOCTYPE html>
    <html>
    <head>
        <meta http-equiv="Content-type" content="text/html; charset=utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <!--<![endif]-->
        <title>Brand wars</title>
    
        <style type="text/css" media="screen">
            /* Linked Styles */
            body { padding:0 !important; margin:0 !important; display:block !important; min-width:100% !important; width:100% !important; background:#2e57ae; -webkit-text-size-adjust:none; font-family:arial; }
            a { color:#000001; text-decoration:none }
            p { padding:0 !important; margin:0 !important } 
            img { -ms-interpolation-mode: bicubic; /* Allow smoother rendering of resized image in Internet Explorer */ }
            .mcnPreviewText { display: none !important; }
            
            /* Mobile styles */
            @media only screen and (max-device-width: 480px), only screen and (max-width: 480px) {
                .mobile-shell { width: 100% !important; min-width: 100% !important; }
                
                .m-center { text-align: center !important; }
                .text3,
                .text-footer,
                .text-header { text-align: center !important; }
                
                .center { margin: 0 auto !important; }
                
                .td { width: 100% !important; min-width: 100% !important; }
                
                .m-br-15 { height: 15px !important; }
                .p30-15 { padding: 30px 15px !important; }
                .p30-15-0 { padding: 30px 15px 0px 15px !important; }
                .p40 { padding-bottom: 30px !important; }
                .box,
                .footer,
                .p15 { padding: 15px !important; }
                .h2-white { font-size: 40px !important; line-height: 44px !important; text-align: center !important; }
    
                .h2 { font-size: 42px !important; line-height: 50px !important; }
    
                .m-td,
                .m-hide { display: none !important; width: 0 !important; height: 0 !important; font-size: 0 !important; line-height: 0 !important; min-height: 0 !important; }
    
                .m-block { display: block !important; }
                .container { padding: 0px !important; }
                .separator { padding-top: 30px !important; }
    
                .fluid-img img { width: 100% !important; max-width: 100% !important; height: auto !important; }
    
                .column,
                .column-top,
                .column-dir,
                .column-empty,
                .column-empty2,
                .column-bottom,
                .column-dir-top,
                .column-dir-bottom { float: left !important; width: 100% !important; display: block !important; }
    
                .column-empty { padding-bottom: 10px !important; }
                .column-empty2 { padding-bottom: 30px !important; }
    
                .content-spacing { width: 15px !important; }
            }
        </style>
    </head>
    <body class="body" style="padding:0 !important; margin:0 !important; display:block !important; min-width:100% !important; width:100% !important; background:#f1f1f1; -webkit-text-size-adjust:none;">
        <table width="100%" border="0" cellspacing="0" cellpadding="0" bgcolor="#f1f1f1">
            <tr>
                <td align="center" valign="top" class="container" style="padding:50px 10px;">
                    <!-- Container -->
                    <table width="100%" border="0" cellspacing="0" cellpadding="0">
                        <tr>
                            <td align="center">
                                <table width="100%" border="0" cellspacing="0" cellpadding="0" class="mobile-shell">
                                    <tr>
                                        <td class="td" bgcolor="#ffffff" style="width:80%; min-width:80%; font-size:0pt; line-height:0pt; padding:0; margin:0; font-weight:normal;">
                                            <!-- Header -->
                                            <table width="100%" border="0" cellspacing="0" cellpadding="0" style="background:url('https://brandwars.s3.ap-south-1.amazonaws.com/misc/head-bg.jpg') no-repeat; background-size:cover;">
                                                <tr>
                                                    <td style="padding: 20px 30px 20px 30px;">
                                                        <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                                            <tr>
                                                                <th class="column" style="font-size:0pt; line-height:0pt; padding:0; margin:0; font-weight:normal;">
                                                                    <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                                                        <tr>
                                                                            <td class="img m-center" style="font-size:0pt; line-height:0pt; text-align:left;"><img src="https://brandwars.s3.ap-south-1.amazonaws.com/misc/logo.png" width="80" border="0" alt="" /></td>
                                                                        </tr>
                                                                    </table>
                                                                </th>
                                                                <th class="column-empty" width="1" style="font-size:0pt; line-height:0pt; padding:0; margin:0; font-weight:normal;"></th>
                                                                <th class="column" width="200" style="font-size:0pt; line-height:0pt; padding:0; margin:0; font-weight:normal;">
                                                                    <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                                                        <tr>
                                                                            <td class="text-header right" style="color:#fff; font-size:18px; line-height:12px; text-align:right;"><a href="#" target="_blank" class="link" style="color:#fff; text-decoration:none;"><span class="link" style="color:#fff; text-decoration:none;">Biggest War of the <br><h2>Biggest Brands</h2></span></a></td>
                                                                        </tr>
                                                                    </table>
                                                                </th>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                </tr>
                                            </table>
                                            <!-- END Header -->
    
                                            <!-- Intro -->
                                            <table width="100%" border="0" cellspacing="0" cellpadding="0" bgcolor="#ffffff">
                                                <tr>
                                                    <td style="padding: 30px 30px 30px 30px;">
                                                        <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                                            <tr>
                                                                <td style="color:#000000; font-size:26px; line-height:35px; text-align:center; padding-bottom:30px; font-weight:700;">Hi ${username},</td>
                                                            </tr>
                                                            <tr>
                                                                <td style="padding-bottom:40px; text-align:center;"><img src="https://brandwars.s3.ap-south-1.amazonaws.com/misc/cjs.png" width="100" border="0" alt="" /></td>
                                                            </tr>
                                                            <tr>
                                                                <td style="font-size:20px; line-height:26px; text-align:center; color:#000; padding-bottom:30px;"><strong>You have joined a contest!</strong> <br> 
                                                                Let your favourite companies trade well and make your fortune . <br>
                                                                <b style="color:#EF1E1E">Join more contest to win more</b></td>
                                                            </tr>
                                                            
                                                            <!-- Button -->
                                                            <tr>
                                                                <td align="center" style="padding-bottom:30px;">
                                                                    <table border="0" width="100%" cellspacing="0" cellpadding="0">
                                                                        <tr>
                                                                            <td class="text-button" style="background:#EF1E1E; color:#ffffff; font-size:18px; line-height:18px; text-align:center; padding:16px 20px; border-radius: 40px; font-weight: 700;"><a href="https://brandwars.com/register.html" target="_blank" class="link-white" style="color:#ffffff; text-decoration:none;"><span class="link-white" style="color:#ffffff; text-decoration:none;">Join Contest</span></a></td>
                                                                        </tr>
                                                                    </table>
                                                                </td>
                                                            </tr>
                                                            <!-- END Button -->
                                                            
                                                            <tr>
                                                                <td style="font-size:20px; line-height:26px; text-align:center; color:#000; padding-bottom:30px; font-weight:700;">Match Name : ${matchName} <br>
                                                                Entry Fee : ${entryFee}
                                                                </td>
                                                            </tr>
                                                            
                                                        </table>
                                                    </td>
                                                </tr>
                                            </table>
                                            <!-- END Intro -->
    
                                            <!-- Footer -->
                                            <table width="100%" border="0" cellspacing="0" cellpadding="0" bgcolor="#C4C4C4">
                                                <tr>
                                                    <td style="padding: 30px 30px 30px 30px;">
                                                        <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                                            <tr>
                                                                <td style="text-align:center; padding-bottom:20px;">
                                                                    <a href="https://app.brandwars.com/" target="_blank" style="color:#ffffff; text-decoration:none;"><img src="https://brandwars.s3.ap-south-1.amazonaws.com/misc/android.png" width="150" border="0" alt="" /></a>
                                                                    <a href="https://brandwars.in/index.html" target="_blank" style="color:#ffffff; text-decoration:none;"><img src="https://brandwars.s3.ap-south-1.amazonaws.com/misc/ios.png" width="150" border="0" alt="" /></a>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td style="color:#000000; font-size:18px; line-height:22px; text-align:center;">Unsubscribe</td>
                                                            </tr>
                                                            <tr>
                                                                <td style="padding: 30px 0px 0px 0px;" align="center">
                                                                    <table width="100%" class="center" border="0" cellspacing="0" cellpadding="0" style="text-align:center;">
                                                                        <tr>
                                                                            <td class="img" style="font-size:0pt; line-height:0pt;">
                                                                            <a style="margin:0 3px" href="#" target="_blank"><img src="https://brandwars.s3.ap-south-1.amazonaws.com/misc/fa.png" width="42" height="42" border="0" alt="" /></a>
                                                                            <a style="margin:0 3px" href="#" target="_blank"><img src="https://brandwars.s3.ap-south-1.amazonaws.com/misc/wp.png" width="42" height="42" border="0" alt="" /></a>
                                                                            <a style="margin:0 3px" href="#" target="_blank"><img src="https://brandwars.s3.ap-south-1.amazonaws.com/misc/insta.png" width="42" height="42" border="0" alt="" /></a>
                                                                            <a style="margin:0 3px" href="#" target="_blank"><img src="https://brandwars.s3.ap-south-1.amazonaws.com/misc/you.png" width="42" height="42" border="0" alt="" /></a>
                                                                            </td>
                                                                        </tr>
                                                                    </table>
                                                                </td>
                                                            </tr>
                                                            <td class="text-footer" style="padding-top: 30px; color:#000; font-size:12px; line-height:22px; text-align:center;">
                                                                Brand Wars Private Limited
                                                            </td>
                                                        </table>
                                                    </td>
                                                </tr>
                                            </table>
                                            <!-- END Footer -->
                                        </td>
                                    </tr>
                                    
                                </table>
                            </td>
                        </tr>
                    </table>
                    <!-- END Container -->
                </td>
            </tr>
        </table>
    </body>
    </html>`;
    return { subject: subject, body: template };
}

// Actual Refund template
exports.refundTemplate = (username, amount) => {
    let subject = "Contest not completed, you are refunded"
    let template = `<!DOCTYPE html>
    <html>
    <head>
        <meta http-equiv="Content-type" content="text/html; charset=utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <!--<![endif]-->
        <title>Brand wars</title>
    
        <style type="text/css" media="screen">
            /* Linked Styles */
            body { padding:0 !important; margin:0 !important; display:block !important; min-width:100% !important; width:100% !important; background:#2e57ae; -webkit-text-size-adjust:none; font-family:arial; }
            a { color:#000001; text-decoration:none }
            p { padding:0 !important; margin:0 !important } 
            img { -ms-interpolation-mode: bicubic; /* Allow smoother rendering of resized image in Internet Explorer */ }
            .mcnPreviewText { display: none !important; }
            
            /* Mobile styles */
            @media only screen and (max-device-width: 480px), only screen and (max-width: 480px) {
                .mobile-shell { width: 100% !important; min-width: 100% !important; }
                
                .m-center { text-align: center !important; }
                .text3,
                .text-footer,
                .text-header { text-align: center !important; }
                
                .center { margin: 0 auto !important; }
                
                .td { width: 100% !important; min-width: 100% !important; }
                
                .m-br-15 { height: 15px !important; }
                .p30-15 { padding: 30px 15px !important; }
                .p30-15-0 { padding: 30px 15px 0px 15px !important; }
                .p40 { padding-bottom: 30px !important; }
                .box,
                .footer,
                .p15 { padding: 15px !important; }
                .h2-white { font-size: 40px !important; line-height: 44px !important; text-align: center !important; }
    
                .h2 { font-size: 42px !important; line-height: 50px !important; }
    
                .m-td,
                .m-hide { display: none !important; width: 0 !important; height: 0 !important; font-size: 0 !important; line-height: 0 !important; min-height: 0 !important; }
    
                .m-block { display: block !important; }
                .container { padding: 0px !important; }
                .separator { padding-top: 30px !important; }
    
                .fluid-img img { width: 100% !important; max-width: 100% !important; height: auto !important; }
    
                .column,
                .column-top,
                .column-dir,
                .column-empty,
                .column-empty2,
                .column-bottom,
                .column-dir-top,
                .column-dir-bottom { float: left !important; width: 100% !important; display: block !important; }
    
                .column-empty { padding-bottom: 10px !important; }
                .column-empty2 { padding-bottom: 30px !important; }
    
                .content-spacing { width: 15px !important; }
            }
        </style>
    </head>
    <body class="body" style="padding:0 !important; margin:0 !important; display:block !important; min-width:100% !important; width:100% !important; background:#f1f1f1; -webkit-text-size-adjust:none;">
        <table width="100%" border="0" cellspacing="0" cellpadding="0" bgcolor="#f1f1f1">
            <tr>
                <td align="center" valign="top" class="container" style="padding:50px 10px;">
                    <!-- Container -->
                    <table width="100%" border="0" cellspacing="0" cellpadding="0">
                        <tr>
                            <td align="center">
                                <table width="100%" border="0" cellspacing="0" cellpadding="0" class="mobile-shell">
                                    <tr>
                                        <td class="td" bgcolor="#ffffff" style="width:80%; min-width:80%; font-size:0pt; line-height:0pt; padding:0; margin:0; font-weight:normal;">
                                            <!-- Header -->
                                            <table width="100%" border="0" cellspacing="0" cellpadding="0" style="background:url('https://brandwars.s3.ap-south-1.amazonaws.com/misc/head-bg.jpg') no-repeat; background-size:cover;">
                                                <tr>
                                                    <td style="padding: 20px 30px 20px 30px;">
                                                        <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                                            <tr>
                                                                <th class="column" style="font-size:0pt; line-height:0pt; padding:0; margin:0; font-weight:normal;">
                                                                    <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                                                        <tr>
                                                                            <td class="img m-center" style="font-size:0pt; line-height:0pt; text-align:left;"><img src="https://brandwars.s3.ap-south-1.amazonaws.com/misc/logo.png" width="80" border="0" alt="" /></td>
                                                                        </tr>
                                                                    </table>
                                                                </th>
                                                                <th class="column-empty" width="1" style="font-size:0pt; line-height:0pt; padding:0; margin:0; font-weight:normal;"></th>
                                                                <th class="column" width="200" style="font-size:0pt; line-height:0pt; padding:0; margin:0; font-weight:normal;">
                                                                    <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                                                        <tr>
                                                                            <td class="text-header right" style="color:#fff; font-size:18px; line-height:12px; text-align:right;"><a href="#" target="_blank" class="link" style="color:#fff; text-decoration:none;"><span class="link" style="color:#fff; text-decoration:none;">Biggest War of the <br><h2>Biggest Brands</h2></span></a></td>
                                                                        </tr>
                                                                    </table>
                                                                </th>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                </tr>
                                            </table>
                                            <!-- END Header -->
    
                                            <!-- Intro -->
                                            <table width="100%" border="0" cellspacing="0" cellpadding="0" bgcolor="#ffffff">
                                                <tr>
                                                    <td style="padding: 30px 30px 30px 30px;">
                                                        <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                                            <tr>
                                                                <td style="color:#000000; font-size:26px; line-height:35px; text-align:center; padding-bottom:30px; font-weight:700;">Hi ${username},</td>
                                                            </tr>
                                                            <tr>
                                                                <td style="padding-bottom:40px; text-align:center;"><img src="https://brandwars.s3.ap-south-1.amazonaws.com/misc/refund.png" width="100" border="0" alt="" /></td>
                                                            </tr>
                                                            <tr>
                                                                <td style="font-size:20px; line-height:26px; text-align:center; color:#000; padding-bottom:30px;"><strong>Your entry fee has been refunded for the ₹${amount} contest.</strong> <br> The contest you joined had to be cancelled as all the spots were not filled.</td>
                                                            </tr>
                                                            
                                                            <!-- Button -->
                                                            <tr>
                                                                <td align="center" style="padding-bottom:30px;">
                                                                    <table border="0" cellspacing="0" cellpadding="0">
                                                                        <tr>
                                                                            <td class="text-button" style="background:#EF1E1E; color:#ffffff; font-size:18px; line-height:18px; text-align:center; padding:16px 20px; border-radius: 40px; font-weight: 700;"><a href="https://brandwars.com/register.html" target="_blank" class="link-white" style="color:#ffffff; text-decoration:none;">Start Playing</a></td>
                                                                        </tr>
                                                                    </table>
                                                                </td>
                                                            </tr>
                                                            <!-- END Button -->
                                                            
                                                            <tr>
                                                                <td style="font-size:20px; line-height:26px; text-align:center; color:#000; padding-bottom:30px;">You can also join one of our confirmed contests</td>
                                                            </tr>
                                                            
                                                        </table>
                                                    </td>
                                                </tr>
                                            </table>
                                            <!-- END Intro -->
    
                                            <!-- Footer -->
                                            <table width="100%" border="0" cellspacing="0" cellpadding="0" bgcolor="#C4C4C4">
                                                <tr>
                                                    <td style="padding: 30px 30px 30px 30px;">
                                                        <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                                            <tr>
                                                                <td style="text-align:center; padding-bottom:20px;">
                                                                    <a href="https://app.brandwars.com/" target="_blank" style="color:#ffffff; text-decoration:none;"><img src="https://brandwars.s3.ap-south-1.amazonaws.com/misc/android.png" width="150" border="0" alt="" /></a>
                                                                    <a href="https://brandwars.in/index.html" target="_blank" style="color:#ffffff; text-decoration:none;"><img src="https://brandwars.s3.ap-south-1.amazonaws.com/misc/ios.png" width="150" border="0" alt="" /></a>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td style="color:#000000; font-size:18px; line-height:22px; text-align:center;">Unsubscribe</td>
                                                            </tr>
                                                            <tr>
                                                                <td style="padding: 30px 0px 0px 0px;" align="center">
                                                                    <table width="100%" class="center" border="0" cellspacing="0" cellpadding="0" style="text-align:center;">
                                                                        <tr>
                                                                            <td class="img" style="font-size:0pt; line-height:0pt;">
                                                                            <a style="margin:0 3px" href="#" target="_blank"><img src="https://brandwars.s3.ap-south-1.amazonaws.com/misc/fa.png" width="42" height="42" border="0" alt="" /></a>
                                                                            <a style="margin:0 3px" href="#" target="_blank"><img src="https://brandwars.s3.ap-south-1.amazonaws.com/misc/wp.png" width="42" height="42" border="0" alt="" /></a>
                                                                            <a style="margin:0 3px" href="#" target="_blank"><img src="https://brandwars.s3.ap-south-1.amazonaws.com/misc/insta.png" width="42" height="42" border="0" alt="" /></a>
                                                                            <a style="margin:0 3px" href="#" target="_blank"><img src="https://brandwars.s3.ap-south-1.amazonaws.com/misc/you.png" width="42" height="42" border="0" alt="" /></a>
                                                                            </td>
                                                                        </tr>
                                                                    </table>
                                                                </td>
                                                            </tr>
                                                            <td class="text-footer" style="padding-top: 30px; color:#000; font-size:12px; line-height:22px; text-align:center;">
                                                                Brand Wars Private Limited
                                                            </td>
                                                        </table>
                                                    </td>
                                                </tr>
                                            </table>
                                            <!-- END Footer -->
                                        </td>
                                    </tr>
                                    
                                </table>
                            </td>
                        </tr>
                    </table>
                    <!-- END Container -->
                </td>
            </tr>
        </table>
    </body>
    </html>`;
    return { subject: subject, body: template };
}

// Actual Contest Winning template
exports.contestWinningTemplate = (username, amount) => {
    let subject = "Contest Won !!!"
    let template = `<!DOCTYPE html>
    <html>
    <head>
        <meta http-equiv="Content-type" content="text/html; charset=utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="" content="date=no" />
        <meta name="" content="address=no" />
        <meta name="" content="telephone=no" />
        <meta name="" />
        <!--<![endif]-->
        <title>Brand wars</title>
    
        <style type="text/css" media="screen">
            /* Linked Styles */
            body { padding:0 !important; margin:0 !important; display:block !important; min-width:100% !important; width:100% !important; background:#2e57ae; -webkit-text-size-adjust:none; font-family:arial; }
            a { color:#000001; text-decoration:none }
            p { padding:0 !important; margin:0 !important } 
            img { -ms-interpolation-mode: bicubic; /* Allow smoother rendering of resized image in Internet Explorer */ }
            .mcnPreviewText { display: none !important; }
            
            /* Mobile styles */
            @media only screen and (max-device-width: 480px), only screen and (max-width: 480px) {
                .mobile-shell { width: 100% !important; min-width: 100% !important; }
                
                .m-center { text-align: center !important; }
                .text3,
                .text-footer,
                .text-header { text-align: center !important; }
                
                .center { margin: 0 auto !important; }
                
                .td { width: 100% !important; min-width: 100% !important; }
                
                .m-br-15 { height: 15px !important; }
                .p30-15 { padding: 30px 15px !important; }
                .p30-15-0 { padding: 30px 15px 0px 15px !important; }
                .p40 { padding-bottom: 30px !important; }
                .box,
                .footer,
                .p15 { padding: 15px !important; }
                .h2-white { font-size: 40px !important; line-height: 44px !important; text-align: center !important; }
    
                .h2 { font-size: 42px !important; line-height: 50px !important; }
    
                .m-td,
                .m-hide { display: none !important; width: 0 !important; height: 0 !important; font-size: 0 !important; line-height: 0 !important; min-height: 0 !important; }
    
                .m-block { display: block !important; }
                .container { padding: 0px !important; }
                .separator { padding-top: 30px !important; }
    
                .fluid-img img { width: 100% !important; max-width: 100% !important; height: auto !important; }
    
                .column,
                .column-top,
                .column-dir,
                .column-empty,
                .column-empty2,
                .column-bottom,
                .column-dir-top,
                .column-dir-bottom { float: left !important; width: 100% !important; display: block !important; }
    
                .column-empty { padding-bottom: 10px !important; }
                .column-empty2 { padding-bottom: 30px !important; }
    
                .content-spacing { width: 15px !important; }
            }
        </style>
    </head>
    <body class="body" style="padding:0 !important; margin:0 !important; display:block !important; min-width:100% !important; width:100% !important; background:#f1f1f1; -webkit-text-size-adjust:none;">
        <table width="100%" border="0" cellspacing="0" cellpadding="0" bgcolor="#f1f1f1">
            <tr>
                <td align="center" valign="top" class="container" style="padding:50px 10px;">
                    <!-- Container -->
                    <table width="100%" border="0" cellspacing="0" cellpadding="0">
                        <tr>
                            <td align="center">
                                <table width="100%" border="0" cellspacing="0" cellpadding="0" class="mobile-shell">
                                    <tr>
                                        <td class="td" bgcolor="#ffffff" style="width:80%; min-width:80%; font-size:0pt; line-height:0pt; padding:0; margin:0; font-weight:normal;">
                                            <!-- Header -->
                                            <table width="100%" border="0" cellspacing="0" cellpadding="0" style="background:url('https://brandwars.s3.ap-south-1.amazonaws.com/misc/head-bg.jpg') no-repeat; background-size:100%;">
                                                <tr>
                                                    <td style="padding: 20px 30px 20px 30px;">
                                                        <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                                            <tr>
                                                                <th class="column" style="font-size:0pt; line-height:0pt; padding:0; margin:0; font-weight:normal;">
                                                                    <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                                                        <tr>
                                                                            <td class="img m-center" style="font-size:0pt; line-height:0pt; text-align:left;"><img src="https://brandwars.s3.ap-south-1.amazonaws.com/misc/logo.png" width="80" border="0" alt="" /></td>
                                                                        </tr>
                                                                    </table>
                                                                </th>
                                                                <th class="column-empty" width="1" style="font-size:0pt; line-height:0pt; padding:0; margin:0; font-weight:normal;"></th>
                                                                <th class="column" width="200" style="font-size:0pt; line-height:0pt; padding:0; margin:0; font-weight:normal;">
                                                                    <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                                                        <tr>
                                                                            <td class="text-header right" style="color:#fff; font-size:18px; line-height:12px; text-align:right;"><a href="#" target="_blank" class="link" style="color:#fff; text-decoration:none;"><span class="link" style="color:#fff; text-decoration:none;">Biggest War of the <br><h2>Biggest Brands</h2></span></a></td>
                                                                        </tr>
                                                                    </table>
                                                                </th>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                </tr>
                                            </table>
                                            <!-- END Header -->
    
                                            <!-- Intro -->
                                            <table width="100%" border="0" cellspacing="0" cellpadding="0" bgcolor="#ffffff">
                                                <tr>
                                                    <td style="padding: 30px 30px 30px 30px;">
                                                        <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                                            <tr>
                                                                <td style="color:#000000; font-size:26px; line-height:35px; text-align:center; padding-bottom:30px; font-weight:700;">Hi ${username},</td>
                                                            </tr>
                                                            <tr>
                                                                <td style="padding-bottom:40px; text-align:center;"><img src="https://brandwars.s3.ap-south-1.amazonaws.com/misc/Winner.png" width="100" border="0" alt="" /></td>
                                                            </tr>
                                                            <tr>
                                                                <td style="font-size:20px; line-height:26px; text-align:center; color:#000; padding-bottom:30px;">Greetings from Brand Wars for your terrific performance.
                                                                <strong>You have won ₹${amount.toFixed(2)}</strong>
                                                            </tr>
                                                            
                                                            <!-- Button -->
                                                            <tr>
                                                                <td align="center" style="padding-bottom:30px;">
                                                                    <table border="0" cellspacing="0" cellpadding="0">
                                                                        <tr>
                                                                            <td class="text-button" style="background:#EF1E1E; color:#ffffff; font-size:18px; line-height:18px; text-align:center; padding:16px 20px; border-radius: 40px; font-weight: 700;"><a href="https://brandwars.com/register.html" target="_blank" class="link-white" style="color:#ffffff; text-decoration:none;"><span class="link-white" style="color:#ffffff; text-decoration:none;">Join Contest</span></a></td>
                                                                        </tr>
                                                                    </table>
                                                                </td>
                                                            </tr>
                                                            <!-- END Button -->
                                                            
                                                            <tr>
                                                                <td style="font-size:20px; line-height:26px; text-align:center; color:#000; padding-bottom:30px;">Create your companies, try your skills? <br><strong>Join the war and win big!</strong></td>
                                                            </tr>
                                                            
                                                        </table>
                                                    </td>
                                                </tr>
                                            </table>
                                            <!-- END Intro -->
    
                                            <!-- Footer -->
                                            <table width="100%" border="0" cellspacing="0" cellpadding="0" bgcolor="#C4C4C4">
                                                <tr>
                                                    <td style="padding: 30px 30px 30px 30px;">
                                                        <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                                            <tr>
                                                                <td style="text-align:center; padding-bottom:20px;">
                                                                    <a href="https://app.brandwars.com/" target="_blank" style="color:#ffffff; text-decoration:none;"><img src="https://brandwars.s3.ap-south-1.amazonaws.com/misc/android.png" width="150" border="0" alt="" /></a>
                                                                    <a href="https://brandwars.in/index.html" target="_blank" style="color:#ffffff; text-decoration:none;"><img src="https://brandwars.s3.ap-south-1.amazonaws.com/misc/ios.png" width="150" border="0" alt="" /></a>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td style="color:#000000; font-size:18px; line-height:22px; text-align:center;">Unsubscribe</td>
                                                            </tr>
                                                            <tr>
                                                                <td style="padding: 30px 0px 0px 0px;" align="center">
                                                                    <table width="100%" class="center" border="0" cellspacing="0" cellpadding="0" style="text-align:center;">
                                                                        <tr>
                                                                            <td class="img" style="font-size:0pt; line-height:0pt;">
                                                                            <a style="margin:0 3px" href="#" target="_blank"><img src="https://brandwars.s3.ap-south-1.amazonaws.com/misc/fa.png" width="42" height="42" border="0" alt="" /></a>
                                                                            <a style="margin:0 3px" href="#" target="_blank"><img src="https://brandwars.s3.ap-south-1.amazonaws.com/misc/wp.png" width="42" height="42" border="0" alt="" /></a>
                                                                            <a style="margin:0 3px" href="#" target="_blank"><img src="https://brandwars.s3.ap-south-1.amazonaws.com/misc/insta.png" width="42" height="42" border="0" alt="" /></a>
                                                                            <a style="margin:0 3px" href="#" target="_blank"><img src="https://brandwars.s3.ap-south-1.amazonaws.com/misc/you.png" width="42" height="42" border="0" alt="" /></a>
                                                                            </td>
                                                                        </tr>
                                                                    </table>
                                                                </td>
                                                            </tr>
                                                            <td class="text-footer" style="padding-top: 30px; color:#000; font-size:12px; line-height:22px; text-align:center;">
                                                                Brand Wars Private Limited
                                                            </td>
                                                        </table>
                                                    </td>
                                                </tr>
                                            </table>
                                            <!-- END Footer -->
                                        </td>
                                    </tr>
                                    
                                </table>
                            </td>
                        </tr>
                    </table>
                    <!-- END Container -->
                </td>
            </tr>
        </table>
    </body>
    </html>`;
    return { subject: subject, body: template };

}

exports.verifyEmailTemplate = (link, username) => {
    let subject = "Brand War Email Verification";
    let template = `<!DOCTYPE html>
    <html>
    <head>
        <meta http-equiv="Content-type" content="text/html; charset=utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <!--<![endif]-->
        <title>Brand wars</title>
    
        <style type="text/css" media="screen">
            /* Linked Styles */
            body { padding:0 !important; margin:0 !important; display:block !important; min-width:100% !important; width:100% !important; background:#2e57ae; -webkit-text-size-adjust:none; font-family:arial; }
            a { color:#000001; text-decoration:none }
            p { padding:0 !important; margin:0 !important } 
            img { -ms-interpolation-mode: bicubic; /* Allow smoother rendering of resized image in Internet Explorer */ }
            .mcnPreviewText { display: none !important; }
            
            /* Mobile styles */
            @media only screen and (max-device-width: 480px), only screen and (max-width: 480px) {
                .mobile-shell { width: 100% !important; min-width: 100% !important; }
                
                .m-center { text-align: center !important; }
                .text3,
                .text-footer,
                .text-header { text-align: center !important; }
                
                .center { margin: 0 auto !important; }
                
                .td { width: 100% !important; min-width: 100% !important; }
                
                .m-br-15 { height: 15px !important; }
                .p30-15 { padding: 30px 15px !important; }
                .p30-15-0 { padding: 30px 15px 0px 15px !important; }
                .p40 { padding-bottom: 30px !important; }
                .box,
                .footer,
                .p15 { padding: 15px !important; }
                .h2-white { font-size: 40px !important; line-height: 44px !important; text-align: center !important; }
    
                .h2 { font-size: 42px !important; line-height: 50px !important; }
    
                .m-td,
                .m-hide { display: none !important; width: 0 !important; height: 0 !important; font-size: 0 !important; line-height: 0 !important; min-height: 0 !important; }
    
                .m-block { display: block !important; }
                .container { padding: 0px !important; }
                .separator { padding-top: 30px !important; }
    
                .fluid-img img { width: 100% !important; max-width: 100% !important; height: auto !important; }
    
                .column,
                .column-top,
                .column-dir,
                .column-empty,
                .column-empty2,
                .column-bottom,
                .column-dir-top,
                .column-dir-bottom { float: left !important; width: 100% !important; display: block !important; }
    
                .column-empty { padding-bottom: 10px !important; }
                .column-empty2 { padding-bottom: 30px !important; }
    
                .content-spacing { width: 15px !important; }
            }
        </style>
    </head>
    <body class="body" style="padding:0 !important; margin:0 !important; display:block !important; min-width:100% !important; width:100% !important; background:#f1f1f1; -webkit-text-size-adjust:none;">
        <table width="100%" border="0" cellspacing="0" cellpadding="0" bgcolor="#f1f1f1">
            <tr>
                <td align="center" valign="top" class="container" style="padding:50px 10px;">
                    <!-- Container -->
                    <table width="100%" border="0" cellspacing="0" cellpadding="0">
                        <tr>
                            <td align="center">
                                <table width="100%" border="0" cellspacing="0" cellpadding="0" class="mobile-shell">
                                    <tr>
                                        <td class="td" bgcolor="#ffffff" style="width:80%; min-width:80%; font-size:0pt; line-height:0pt; padding:0; margin:0; font-weight:normal;">
                                            <!-- Header -->
                                            <table width="100%" border="0" cellspacing="0" cellpadding="0" style="background:url('https://brandwars.s3.ap-south-1.amazonaws.com/misc/head-bg.jpg') no-repeat; background-size:cover;">
                                                <tr>
                                                    <td style="padding: 20px 30px 20px 30px;">
                                                        <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                                            <tr>
                                                                <th class="column" style="font-size:0pt; line-height:0pt; padding:0; margin:0; font-weight:normal;">
                                                                    <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                                                        <tr>
                                                                            <td class="img m-center" style="font-size:0pt; line-height:0pt; text-align:left;"><img src="https://brandwars.s3.ap-south-1.amazonaws.com/misc/logo.png" width="80" border="0" alt="" /></td>
                                                                        </tr>
                                                                    </table>
                                                                </th>
                                                                <th class="column-empty" width="1" style="font-size:0pt; line-height:0pt; padding:0; margin:0; font-weight:normal;"></th>
                                                                <th class="column" width="200" style="font-size:0pt; line-height:0pt; padding:0; margin:0; font-weight:normal;">
                                                                    <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                                                        <tr>
                                                                            <td class="text-header right" style="color:#fff; font-size:18px; line-height:12px; text-align:right;"><a href="#" target="_blank" class="link" style="color:#fff; text-decoration:none;"><span class="link" style="color:#fff; text-decoration:none;">Biggest War of the <br><h2>Biggest Brands</h2></span></a></td>
                                                                        </tr>
                                                                    </table>
                                                                </th>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                </tr>
                                            </table>
                                            <!-- END Header -->
    
                                            <!-- Intro -->
                                            <table width="100%" border="0" cellspacing="0" cellpadding="0" bgcolor="#ffffff">
                                                <tr>
                                                    <td style="padding: 30px 30px 30px 30px;">
                                                        <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                                            <tr>
                                                                <td style="color:#000000; font-size:26px; line-height:35px; text-align:center; padding-bottom:30px; font-weight:700;">Hi ${username},</td>
                                                            </tr>
                                                            <tr>
                                                                <td style="padding-bottom:40px; text-align:center;"><img src="https://brandwars.s3.ap-south-1.amazonaws.com/misc/verified-protection.png" width="100" border="0" alt="" /></td>
                                                            </tr>
                                                            <tr>
                                                                <td style="font-size:20px; line-height:26px; text-align:center; color:#000; padding-bottom:30px;"><strong>Please click on the button below to complete the verification of your mail id</strong> Complete your PAN & Bank verification to activate your account.
                                                                Verify</td>
                                                            </tr>
                                                            
                                                            <!-- Button -->
                                                            <tr>
                                                                <td align="center" style="padding-bottom:30px;">
                                                                    <table border="0" cellspacing="0" cellpadding="0">
                                                                        <tr>
                                                                            <td class="text-button" style="background:#EF1E1E; color:#ffffff; font-size:18px; line-height:18px; text-align:center; padding:16px 20px; border-radius: 40px; font-weight: 700;"><a href="${link}" target="_blank" class="link-white" style="color:#ffffff; text-decoration:none;"><span class="link-white" style="color:#ffffff; text-decoration:none;">Verify Email</span></a></td>
                                                                        </tr>
                                                                    </table>
                                                                </td>
                                                            </tr>
                                                            <!-- END Button -->
                                                            
                                                            <tr>
                                                                <td style="font-size:20px; line-height:26px; text-align:center; color:#000; padding-bottom:30px;">Create your companies, try your skills? <br><strong>Join the war and win big!</strong></td>
                                                            </tr>
                                                            
                                                        </table>
                                                    </td>
                                                </tr>
                                            </table>
                                            <!-- END Intro -->
    
                                            <!-- Footer -->
                                            <table width="100%" border="0" cellspacing="0" cellpadding="0" bgcolor="#C4C4C4">
                                                <tr>
                                                    <td style="padding: 30px 30px 30px 30px;">
                                                        <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                                            <tr>
                                                                <td style="text-align:center; padding-bottom:20px;">
                                                                    <a href="https://app.brandwars.com/" target="_blank" style="color:#ffffff; text-decoration:none;"><img src="https://brandwars.s3.ap-south-1.amazonaws.com/misc/android.png" width="150" border="0" alt="" /></a>
                                                                    <a href="https://brandwars.in/index.html" target="_blank" style="color:#ffffff; text-decoration:none;"><img src="https://brandwars.s3.ap-south-1.amazonaws.com/misc/ios.png" width="150" border="0" alt="" /></a>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td style="color:#000000; font-size:18px; line-height:22px; text-align:center;">Unsubscribe</td>
                                                            </tr>
                                                            <tr>
                                                                <td style="padding: 30px 0px 0px 0px;" align="center">
                                                                    <table width="100%" class="center" border="0" cellspacing="0" cellpadding="0" style="text-align:center;">
                                                                        <tr>
                                                                            <td class="img" style="font-size:0pt; line-height:0pt;">
                                                                            <a style="margin:0 3px" href="#" target="_blank"><img src="https://brandwars.s3.ap-south-1.amazonaws.com/misc/fa.png" width="42" height="42" border="0" alt="" /></a>
                                                                            <a style="margin:0 3px" href="#" target="_blank"><img src="https://brandwars.s3.ap-south-1.amazonaws.com/misc/wp.png" width="42" height="42" border="0" alt="" /></a>
                                                                            <a style="margin:0 3px" href="#" target="_blank"><img src="https://brandwars.s3.ap-south-1.amazonaws.com/misc/insta.png" width="42" height="42" border="0" alt="" /></a>
                                                                            <a style="margin:0 3px" href="#" target="_blank"><img src="https://brandwars.s3.ap-south-1.amazonaws.com/misc/you.png" width="42" height="42" border="0" alt="" /></a>
                                                                            </td>
                                                                        </tr>
                                                                    </table>
                                                                </td>
                                                            </tr>
                                                            <td class="text-footer" style="padding-top: 30px; color:#000; font-size:12px; line-height:22px; text-align:center;">
                                                                Brand Wars Private Limited
                                                            </td>
                                                        </table>
                                                    </td>
                                                </tr>
                                            </table>
                                            <!-- END Footer -->
                                        </td>
                                    </tr>
                                    
                                </table>
                            </td>
                        </tr>
                    </table>
                    <!-- END Container -->
                </td>
            </tr>
        </table>
    </body>
    </html>`;

    return { subject: subject, body: template };
}