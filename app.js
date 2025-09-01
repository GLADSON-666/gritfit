const Express = require("express")
const cors = require("cors")
const Mongoose = require("mongoose")
const Bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const userModel = require("./models/users")

let app = Express()
app.use(Express.json())
app.use(cors())

Mongoose.connect("mongodb+srv://GladsonGeorge:chimera@cluster0.c89d4qt.mongodb.net/gritfit?retryWrites=true&w=majority&appName=Cluster0")

app.post("/signup", async (req, res) => {
    try {
        let input = req.body

        // hash password
        let hashedpassword = Bcrypt.hashSync(req.body.password, 10)
        input.password = hashedpassword

        // check if email exists
        let check = await userModel.findOne({ email: req.body.email })
        if (check) {
            return res.json({ status: "email id already exist" })
        }

        // save new user
        let result = new userModel(input)
        await result.save()

        res.json({ status: "success" })
    } catch (error) {
        console.error(error)
        res.status(500).json({ status: "error", message: "Something went wrong" })
    }
})

app.listen(3030, () => {
    console.log("server started")
})
