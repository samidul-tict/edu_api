const config = require('config');
const apiConst = 'https://financialmodelingprep.com/api/v3';

// Market Hour Url
exports.marketHourUrl = `${apiConst}/market-hours?apikey=${config.get("apiKey")}`;

//Get Stock Profile Url
exports.getProfileUrl = (symbols) => {
    if (apiUrl.apiKey == 'apiKey')
        return `${apiUrl.url}/profile/${symbols}?apikey=${config.get(apiUrl.apiKey)}`;
    else
        return `${apiUrl.url}/profile/${symbols}`;
}

// Get Stocks Quote RealTime (for point calculation);
exports.getStocksQuote = (symbols) => {
    if (apiUrl.apiKey === 'apiKey') return `${apiUrl.url}/quote/${symbols}?apikey=${config.get(apiUrl.apiKey)}`;
    else return `${apiUrl.url}/quote/${symbols}`;
}

//Get Stock News Url
exports.getNewsUrl = (symbol) => {
    return `${apiConst}/stock_news?tickers=${symbol}&limit=50&apikey=${config.get("apiKey")}`;
}

// DataYuge Operator Lookup URL
exports.getLookupUrl = (number) => {
    return `https://api.phndir.com/indware/lookup/+91${number}?&apikey=${config.get("dataYugeKey")}`
}

// Get Bank Details from IFSC Razorpay
exports.getBankDetail = (code) => {
    return `https://ifsc.razorpay.com/${code}`
}

// Zoop URl
exports.zoopURL = "https://prod.aadhaarapi.com"

// Create Razorpay Contact
exports.razorpayContact = "https://api.razorpay.com/v1/contacts";

// Create Razorpay Contact Fund Account
exports.razorpayFundAccount = "https://api.razorpay.com/v1/fund_accounts";

//Payout
exports.razorpayPayout = "https://api.razorpay.com/v1/payouts/";

exports.appDownloadUrl = "https://app.brandwars.com";