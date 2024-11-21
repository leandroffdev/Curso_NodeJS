const express = require('express');

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
    return res.status(200).json('Olá mundo');
});

app.get('/users/:id', (req, res) => {
    return res.status(200).json(req.params.id);
});

app.get("/users", (req, res) => {
    console.log(req.query);
    // return res.status(200).json(req.query.usuario);
    return res.status(200).json({ 
        sensor:"Temperatura",
        valor: 25.5,
        local:"Praia"
    });

});

app.listen(3000, () => {
    console.log("Server running on port", 3000);
});
