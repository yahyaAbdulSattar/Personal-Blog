const express = require("express");
const cors = require("cors");
const { blog, admin } = require("./database/db");
const { AuthMiddleware } = require("./middlewares/admin");
const app = express();
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("./config");


app.use(cors());

app.use(express.json());

app.post("/login", async (req, res) => {

    const username = req.body.username;
    const password = req.body.password;

    try {
        const find_admin = await admin.findOne({
            username, password
        });

        if (!find_admin) {
            return res.status(401).json({
                msg: "invalid credentials"
            });
        }

        const token = jwt.sign({ username: username }, JWT_SECRET);

        res.send({
            token
        });


    } catch (err) {
        console.error(err);
    }


})

app.post("/create-post", AuthMiddleware, async (req, res) => {
    const title = req.body.title;
    const content = req.body.content;

    await blog.create({
        title,
        content
    })

    res.json({
        msg: "blog created"
    });
})

app.get("/posts", async (req, res) => {
    const blogs = await blog.find({});

    res.send(blogs);
})

app.get("/post/:id", async (req, res) => {
    const single_blog = await blog.findOne({ _id: req.params.id })

    res.send(single_blog)
})

app.listen(3000);