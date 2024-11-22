const express = require('express');
const cors = require('cors');

const app = express();
app.use(express.json());
// app.use(cors());    // Permite que qualquer frontend acesse o servidor
app.use(cors('http://localhost:5173'));    // Permite que apenas o frontend específico acesse o servidor

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

app.get("/usuarios", (req, res) => {
    console.log(req.query);
    // return res.status(200).json(req.query.usuario);
    return res.status(200).json({ 
        sensor:"Temperatura",
        valor: 25.5,
        local:"Praia"
    });
});

app.post('/usuarios', (req, res) => {
    const { nome, idade } = req.body;
})

app.listen(3000, () => {
    console.log("Server running on port", 3000);
});
