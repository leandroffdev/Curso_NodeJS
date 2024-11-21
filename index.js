const express = require('express');

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
    return res.status(200).json('Olá mundo');
});

app.get("/users", (req, res) => {
    return res.status(200).json("Pagina Users")
})

app.listen(3000, () => {
    console.log("Server running on port", 3000);
});
