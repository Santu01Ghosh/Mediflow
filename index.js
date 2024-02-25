const express = require("express");
const app = express();



app.listen(3000, () => { console.log("app started ") });
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/login", { useNewUrlParser: true, useUnifiedTopology: true }).then(() => { console.log("db connection successful") }).catch(() => { console.log("error") });

