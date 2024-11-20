import express from "express";

const posts = [
    {
        descricao: "Uma foto teste",
        imagem: "https://placecats.com/millie/300/150"
    }
];

const app = express();
app.listen(3000, () => {
    console.log("Servidor escutando...");
});

app.get("/api", (req, res) => {
    res.status(200).send("Servidor ativado! Preparem os cafezinhos, a imersão de código começou! ☕.");
});