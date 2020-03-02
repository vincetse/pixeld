import dotenv from "dotenv"
import express from "express"
import path from "path"

// initialize configuration
dotenv.config()

const app = express()
const port = process.env.PORT || 5000

// define a route handler for the default home page
app.get("/", (req, res) => {
  res.send("")
})

app.get("/js", (req, res) => {
  res.set({
    "Content-Type": "text/javascript"
  })
  res.send("// nop")
})

app.get("/html", (req, res) => {
  res.set({
    "Content-Type": "text/html"
  })
  res.send("<html></html>")
})

app.get("/image", (req, res) => {
  res.set({
    "Content-Type": "image/gif"
  })
  res.sendFile(path.join( __dirname, "../images/1x1.gif"))
})

// start the Express server
app.listen(port, () => {
  // tslint:disable-next-line:no-console
  console.log(`server listening on port ${port}`)
})
