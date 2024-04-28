const axios = require("axios");
const express = require("express");
const fs = require("fs");
const FormData = require("form-data");
require("dotenv").config();

const JWT = process.env.JWT;
const PINATA_API = process.env.PINATA_API;

const app = express();

app.post("/upload", async(req, res) => {
    if(req.method !== "POST"){
        res.status(400).json({error: "Invalid request method. Please use POST method."});
        return;
    }

    try{
        let formData = new FormData();
        const filePath = "./files/Minor - 2 Synopsis.pdf";
        const readStream = fs.createReadStream(filePath);
        formData.append("file", readStream);

        const response = await axios.post(PINATA_API, formData, {
            headers: {
                ...formData.getHeaders(),
                "Authorization" : `Bearer ${JWT}`,
            }
        });
        
        const pinataResponse = response.data;
        const fileHash = pinataResponse.IpfsHash;
        res.status(200).send(`File uploaded to IPFS: ${fileHash}`);
    }
    catch(err){
        res.status(500).send(`Error in uploading file to IPFS`);
    }
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});