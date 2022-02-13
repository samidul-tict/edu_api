// FCM Notification Gateway Functionality
exports.firebaseNotification = (DeviceKeyFire, msgBody, msgHead) => {
    var FCM = require('fcm-node');
    var serverKey = 'AAAArZiSeEo:APA91bGtr5slYPktm8fWTd3V1AqAItrYYVSCf9vciG5AthjZtfZmHvHRVXEwNe9ZRTByMbPdkOqQaYLtZITK2_S5nD1Y0gnHdududS5EF-kij5LF1Va2ltEoMpisI-iJNy9Mu9Y3CQdy';
    var fcm = new FCM(serverKey);


    var message = {
        to: DeviceKeyFire,
        notification: {
            title: msgHead,
            body: msgBody
        }
    }

    fcm.send(message, function(err, response) {
        if (err) {
            console.log("Something has gone wrong!", err);
        } else {
            console.log("Successfully sent with response: ", response);
        }
    });

}


// Email Gateway Functionality
exports.emailGateway = (EmailData, subject, body) => {

    var nodemailer = require('nodemailer');
    var OAuth2 = require('oauth2');
    var transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            type: 'OAuth2',

            user: "info@brandwars.com",
            clientId: '251298718046-p3uuhc1imba1bjeoci22j6tsr3otl4v5.apps.googleusercontent.com',
            clientSecret: 'wy7md-9JsckenYaO9uw7DfVu',
            refreshToken: '1//04jmyWfqlQkl2CgYIARAAGAQSNwF-L9Ir_HH2FoAMjmIN1VXP9wqMYle3rh0lp_XUxP9yRap97ON5baTQc1bLvJom-cpdwUrXn90',
            accessToken: 'ya29.a0AfH6SMCRbN5w5aX2Qjw4v0i88YjlGNo03pXiQUxT_w7dXGPm7FVuhigoOkrh7vwOSLgnHtKchGs9TKG3pk3TJvn9v7QaHav_m6wQvCBfhhpqkeWJFzKcuY2XB9uDu2OOi43VPYcAssjUwy53n7IslTvcDMX2fUeFdPk7z7Taeb8'
        }
    });
    var mailOptions = {
        from: 'Brand Wars',
        to: EmailData,
        subject: subject,
        html: body
    };

    transporter.sendMail(mailOptions, (err, info) => {
        if (err) {
            console.log('Error ' + err)
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
}

// Email Gateway for Report Functionality
exports.emailReportGateway = (fileAttachement, AttachmentName, EmailData, subject, body) => {

    var nodemailer = require('nodemailer');
    var OAuth2 = require('oauth2');
    var transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            type: 'OAuth2',
            user: "info@brandwars.com",
            clientId: '251298718046-p3uuhc1imba1bjeoci22j6tsr3otl4v5.apps.googleusercontent.com',
            clientSecret: 'wy7md-9JsckenYaO9uw7DfVu',
            refreshToken: '1//04jmyWfqlQkl2CgYIARAAGAQSNwF-L9Ir_HH2FoAMjmIN1VXP9wqMYle3rh0lp_XUxP9yRap97ON5baTQc1bLvJom-cpdwUrXn90',
            accessToken: 'ya29.a0AfH6SMCRbN5w5aX2Qjw4v0i88YjlGNo03pXiQUxT_w7dXGPm7FVuhigoOkrh7vwOSLgnHtKchGs9TKG3pk3TJvn9v7QaHav_m6wQvCBfhhpqkeWJFzKcuY2XB9uDu2OOi43VPYcAssjUwy53n7IslTvcDMX2fUeFdPk7z7Taeb8'
        },
        tls: {
            rejectUnauthorized: false
        }
    });
    var mailOptions = {
        from: 'Brand Wars',
        to: EmailData,
        subject: subject,
        html: body,
        attachments: [{
            filename: AttachmentName,
            path: fileAttachement,
            contentType: 'application/pdf'
        }]
    };

    transporter.sendMail(mailOptions, (err, info) => {
        if (err) {
            console.log('Error ' + err)
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
}

// SMS Gateway Functionality for OTP
exports.mobileOTP = (PhoneNumberSMSGateway, OTPSMSGateway) => {
    var urlencode = require('urlencode');
    var request = require('request');
    var des = 'destination=' + PhoneNumberSMSGateway;
    var OTP_msg = 'Your OTP to access BrandWars is ' + OTPSMSGateway + ' and it shall remain valid for 3 minutes. NEVER SHARE YOUR OTP WITH ANYONE. \nBrandWars does not call or message to ask for OTP.';
    var new_OTP_msg = urlencode(OTP_msg);
    var msg = 'message=' + new_OTP_msg;
    var templateId = '&tempid=1007813163364771574'
    var entityId = '&entityid=1001933819690459173'

    request({
        url: 'https://sms6.rmlconnect.net/bulksms/bulksms?username=BWPT&password=yQBXOIsH&type=0&dlr=0&' + des + '&source=BRANDW&' + msg + entityId + templateId,

        method: 'GET',

    }, function(error, response, body) {
        if (error) {
            console.log(error);
        } else {
            console.log(response.statusCode, body);
        }
    });
}



// SMS Gateway Functionality for APK Link
exports.mobileApkLink = (PhoneNumberSMSGateway, ApkLinkSMSGateway) => {
    var urlencode = require('urlencode');
    var request = require('request');
    var des = 'destination=' + PhoneNumberSMSGateway;
    var AppLink_msg = 'Click here  ' + ApkLinkSMSGateway + ' to download the App. Brand Wars Private Limited';
    var new_AppLink_msg = urlencode(AppLink_msg);
    var msg = 'message=' + new_AppLink_msg;
    var templateId = '&tempid=1007005724258191278'
    var entityId = '&entityid=1001933819690459173'
    request({
        url: 'https://sms6.rmlconnect.net/bulksms/bulksms?username=BWPT&password=yQBXOIsH&type=0&dlr=0&' + des + '&source=BRANDW&' + msg + entityId + templateId,
        method: 'GET',
    }, function(error, response, body) {
        if (error) {
            console.log(error);
        } else {
            console.log(response.statusCode, body);
        }
    });
}