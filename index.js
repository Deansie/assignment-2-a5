import express from "express";
import fs from "fs/promises";

const app = express();

app.get('/', async ( request, response ) => {
    const buf = await fs.readFile("./static/index.html");
    const html = buf.toString();

    response.send(html);
});

app.use('/static', express.static('./static/'));
app.use('/assets', express.static('./static/assets'));

app.listen(5080);