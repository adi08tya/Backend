import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
const app = express();
const port = process.env.PORT;

// const jsonobj = {
//     "name" : "Aditya",
//     "profession": "software engineer"
// }
app.get("/", (req, res) => {
  res.send("Server is ready");
});

app.get("/api/jokes",(req,res)=>{
  const jokes = [
    {
      id: 1,
      title: "Programmer's Diet",
      joke: "Why do programmers prefer dark mode? Because light attracts bugs!"
    },
    {
      id: 2,
      title: "Null Nightmare",
      joke: "I told my code a joke. Now it won’t stop throwing exceptions!"
    },
    {
      id: 3,
      title: "Loop Trouble",
      joke: "Why did the while loop break up with the for loop? It found someone more iterable."
    },
    {
      id: 4,
      title: "404 Fun",
      joke: "Why did the developer go broke? Because he used up all his cache."
    },
    {
      id: 5,
      title: "Semicolon Drama",
      joke: "Why don’t Java developers wear glasses? Because they can C#!"
    },
  ];

  res.send(jokes);
})
// app.get("/twitter",(req,res)=>{
//     res.send("Adityatwitter")
// })
// app.get("/login",(req,res)=>{
//     res.send('<h1>Login successfull</h1>')
// })
// app.get("/obj",(req,res)=>{
//     res.json(jsonobj)

// })
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
