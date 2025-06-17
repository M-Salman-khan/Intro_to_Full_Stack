import express from "express"
import cors from"cors"
const app = express()
const PORT = 3000
app.use(cors())
const jokes = [
  {
    id: 1,
    title: "Programmer's Diet",
    description: "Why do programmers prefer dark mode? Because the light attracts bugs!"
  },
  {
    id: 2,
    title: "Binary Confusion",
    description: "There are only 10 kinds of people in the world: those who understand binary and those who don’t."
  },
  {
    id: 3,
    title: "Infinite Loop",
    description: "Why did the developer go broke? Because he used up all his cache."
  },
  {
    id: 4,
    title: "HTML Humor",
    description: "Why did the HTML tag break up with the head tag? Because it found someone more in the body."
  },
  {
    id: 5,
    title: "Stack Overflow",
    description: "I told my friend a joke about a stack. He didn’t get it... so I pushed it again!"
  }
];

app.get("/api/jokes",(req,res)=>{
    res.send(jokes)
})

app.listen(PORT,()=>{
    console.log(`Server is running on ${PORT}`);
})