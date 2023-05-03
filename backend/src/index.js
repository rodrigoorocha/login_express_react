import express from "express"
import cors from "cors"
import users from "./data/users.js"
const app = express()

app.use(cors())
app.use(express.json())

app.post("/", (req, res) => {
   const email = req.body.email
   const password = req.body.password

   const user = users.find(u => u.email === email && u.password === password)
   console.log(email)
   console.log(password)
   if (user) {
      res.send({
        user,
        error : false        
      })
   } else {
      res.send({
         error:true
      })
   }


})




app.listen(5000)