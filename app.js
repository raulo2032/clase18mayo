const express = require('express');
const path = require('path');
// quiero sunir algo a GIT
const app = express();

const publicFolderPath = path.resolve(__dirname, './public');
app.use(express.static(publicFolderPath));

app.listen(3000, ()=>{    console.log("Servidor corriendo");        });
app.get('/', (req,res)=>{    res.sendFile(path.resolve(__dirname, './views/home.html'))
})