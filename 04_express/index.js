const express = require("express")
const app = express()
//console.dir(app)

const port = 3000

app.listen(port, () => {
    console.log("working at port 3000");
})