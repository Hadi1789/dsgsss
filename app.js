const express = require('express');


const app = express();
const port = 3000;




app.use(express.static(__dirname + '/templ'));



app.get('/', (req, res) => {
    res.sendfile('./templ/Home.html')
})
app.get('/Experience', (req, res) => {
    res.sendfile('./templ/Working.html')
})
app.listen(port, () => {
    console.log("app is ok \nand The port is:", port);
});

app.all('*', (req, res) => {
    res.status('404').sendfile('./templ/404.html')
})