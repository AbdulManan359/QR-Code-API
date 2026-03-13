import express from "express";
import QRCode from "qrcode";

const app = express();



app.get("/generate_qrcode/:outputtype", async (req, res) => {

    const outputType = req.params.outputtype
    const size = Number(req.query.size);
    const data = req.query.data;

    try {
        QRCode.toDataURL(data, { width: size }, (err, url) => {
            // url includes base64 encoded data.
            let result;
            switch (outputType) {
                case "base64":
                    result = { encodedData: url.slice(22) };
                    break;
                case "image":
                    result = { imgHtmlTag: `<img src="${url}">` }
                    break;
            }
            res.json(result);
        });
    } catch (err) {
        console.log(err);
        res.sendStatus(400);
    }
});


app.listen(3000, () => {
    console.log("Server listening on port 3000");

})




