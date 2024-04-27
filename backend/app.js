import { createRequire } from "module";
const require = createRequire(import.meta.url);

const express = require("express");
const multer  = require("multer");
const app = express();
const cors = require("cors");
app.use(cors());
require("dotenv").config();

import { create } from '@web3-storage/w3up-client'

async function main() {
    try {
        const client = await create();

        const space = await client.createSpace('Akshita Gupta Space');
        console.log('Space:', space); // Log the entire space object
        console.log('Space created with SID:', space.model.name);

        const myAccount = await client.login('akshita.g1507@gmail.com');

        await myAccount.provision(space.did());
        await space.save();

        await client.setCurrentSpace(space.did());

        const recovery = await space.createRecovery(myAccount.did());
        await client.capability.access.delegate({
            space: space.did(),
            delegations: [recovery],
        });

        console.log('Web3.Storage setup completed successfully');
    } 
    catch (error) {
        console.error('Error during Web3.Storage setup:', error);
        if (space) {
            console.error('Space:', space); // Log the entire space object
            console.error('Space SID:', space.sid);
        }
    }
}
main();

const upload = multer({ dest: 'uploads/' });

app.post('/upload', upload.single('file'), async (req, res) => {
    try {
        const client = await create();
        await client.setCurrentSpace('Akshita Gupta Space');
        console.log('Current space set');

        const uploadedFile = await client.uploadFile(req.file.path);
        res.json({ cid: uploadedFile.cid });
    } 
    catch (error) {
        console.error('Error uploading file:', error);
        res.status(404).json({ error: 'Failed to upload file' });
    }
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});