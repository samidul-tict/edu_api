const config = require('config');
const { BlobServiceClient,StorageSharedKeyCredential } = require("@azure/storage-blob");

// azure file stoarge db setup
exports.azureNotesUpload = (fileName,filePath) => {
    const account    = config.get('azureAccessKeyId');
    const accountKey = config.get('azureSecretAccessKey');
    const sharedKeyCredential = new StorageSharedKeyCredential(account, accountKey);
    const blobServiceClient   = new BlobServiceClient(`https://${account}.blob.core.windows.net`,sharedKeyCredential );
    // Create a container
    const containerName   = `notescontainer`;
    const containerClient = blobServiceClient.getContainerClient(containerName);
    // const createContainerResponse = await containerClient.create();
    const blockBlobClient = containerClient.getBlockBlobClient(fileName);
    const uploadBlobResponse = blockBlobClient.uploadFile(filePath);
    // console.log(`Upload block blob ${fileName} successfully`, uploadBlobResponse.requestId);
    console.log("Blob URL: ", blockBlobClient.url);
    return blockBlobClient.url;
}
exports.azureStudentsUpload = (fileName,filePath) => {
    const account    = config.get('azureAccessKeyId');
    const accountKey = config.get('azureSecretAccessKey');
    const sharedKeyCredential = new StorageSharedKeyCredential(account, accountKey);
    const blobServiceClient   = new BlobServiceClient(`https://${account}.blob.core.windows.net`,sharedKeyCredential );
    // Create a container
    const containerName   = `studentcontainer`;
    const containerClient = blobServiceClient.getContainerClient(containerName);
    // const createContainerResponse = await containerClient.create();
    const blockBlobClient = containerClient.getBlockBlobClient(fileName);
    const uploadBlobResponse = blockBlobClient.uploadFile(filePath);
    // console.log(`Upload block blob ${fileName} successfully`, uploadBlobResponse.requestId);
    console.log("Blob URL: ", blockBlobClient.url);
    return blockBlobClient.url;
}

// Convert Base64 image to file buffer
exports.convertBase64ToBuffer = (file) => {
    var base64Str = file;
    let mimeType = base64Str.match(/[^:/]\w+(?=;|,)/)[0];       // Getting Extension
    let image = new Buffer.from(base64Str.split(';base64,')[1], 'base64');  // Getting image buffer
    let imageFile = {
        originalname: `abc.${mimeType}`,
        buffer: image
    }
    // console.log(imageFile);
    return imageFile
}