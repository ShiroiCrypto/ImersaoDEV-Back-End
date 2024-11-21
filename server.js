// import express from "express";
// import conectarAoBanco from "./src/config/dbConfig.js";
// const conexao = await conectarAoBanco(process.env.STRING_CONEXAO);

// const posts = [
//     { id: 1, descricao: "Uma foto teste", imagem: "https://placecats.com/millie/300/150" },
//     { id: 2, descricao: "Gato fazendo yoga", imagem: "https://placecats.com/millie/300/150" },
//     { id: 3, descricao: "Gato fazendo panqueca", imagem: "https://placecats.com/millie/300/150"},
//     { id: 4, descricao: "Gato lendo um livro", imagem: "https://placecats.com/millie/300/150" },
//     { id: 5, descricao: "Gato tomando sol na janela", imagem: "https://placecats.com/millie/300/150" },
//     { id: 6, descricao: "Gato brincando com um novelo de lã", imagem: "https://placecats.com/millie/300/150" }
// ];

// const app = express();
// app.use(express.json());

// app.listen(3000, () => {
//     console.log("Servidor escutando...");
// });

// async function getTodosPosts(){
//     const db = conexao.db
//     const colecao = db.collection("posts")
//     return colecao.find().toArray()
// }

// app.get("/posts", async (req, res) => {
//     const posts = await getTodosPosts()
//     res.status(200).json(posts);
// });

// // function buscarPostID(id) {
// //     return posts.findIndex((post) => {
// //         return post.id === Number(id)
// //     })
// // }

// // app.get("/posts/:id", (req, res) => {
// //     const index = buscarPostID(req.params.id)
// //     res.status(200).json(posts[index]);
// // });
import express from "express";
import routes from "./src/routes/postsRoutes.js";

const app = express();

routes(app);

app.listen(3000, () => {
    console.log("Servidor escutando...");
});