# QR-Code API

## This API generates the QR Code for the given input data.
## Introduction

QR-Code API generates the QR Code for given input and returns in these two types of outputs:
- Base64 encoded text
- HTML Image tag of QR-Code

### Tools and Technologies Used
- Javascript
- HTML
- NodeJS
- ExpressJS

### Dependencies Used
- "express" version 5.2.1
- "qrcode" version 1.5.4

### How to use it?
- After getting the files, go to any CLI like BASH and then **cd** towards the project file.
- And then write "node server.js" in the Command Line (Make sure the node has already been installed)
- You will see the message: "Server Listening on Port 3000"
- And then, make a **GET** request to this link
  <br>"http:localhost:3000/[outputType]?size=[outputSize]&&data=[Data]"<br>
  In [outputType], write the type of output you want either, "base64" or "image". In case of base64, you will get a JSON with base64 encoded data of the QR-Code Image. In case of image, you will get a JSON with HTML image tag of QR-Code.
  <br>In [outputSize], write the size of the output image you want in numbers only with no unit.<br> In [Data], write the data which you want to convert to a QR-Code.
- And thus, you will get your desired output accordingly.
