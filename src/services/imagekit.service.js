var ImageKit = require("imagekit");
const { v4: uuidv4 } = require('uuid');
var imagekit = new ImageKit({
    publicKey : process.env.PUBLIC_KEY,
    privateKey : process.env.PRIVATE_KEY,
    urlEndpoint :process.env.URL_ENDPOINT
});

async function uploadImage({ buffer, folder = '/products' }) {
    const res = await imagekit.upload({
        file: buffer,
        fileName: uuidv4(),
        folder,
    });
    return {
        url: res.url,
        thumbnail: res.thumbnailUrl || res.url,
        id: res.fileId,
    };
}

module.exports={
    uploadImage
}