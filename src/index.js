import "./db/index.js";
import express, { request } from "express";
import { query } from "./db/index.js";
const app = express();

//appp.method (path, handler);
// app.use("/", (req, res, next) => {
//   res.send("hello world");
// });

// app.use('/users', )
app.use(express.json());
app.use(express.urlencoded());

app.get("/ambildata", async (req, res) => {
  res.json(await query("SELECT * from users"));
});

app.post("/tambahuser", async (req, res) => {
  await query(`
  INSERT into users (user_id,
    username,
    email,
    password,
    active,
    avatar,
    created_at,
    update_at) values
    (${Object.keys(req.body)
      .map((e) => req.body[e])
      .join(",")})
  `);
  res.json({ message: "data berhasil ditambahkan" });
});

app.get("/", (req, res) => {
  res.send("Hello Get Methode");
});

app.post("/", (req, res) => {
  res.send("Hello POST Methode");
});

app.listen(4000, () => {
  console.log("server berhasil dirunning di port 4000");
});

app.post("/tambahuser", async (req, res) => {
  await query(`
  INSERT into users (user_id,
    username,
    email,
    password,
    active,
    avatar,
    created_at,
    update_at) values
    (${Object.keys(req.body)
      .map((e) => req.body[e])
      .join(",")})
  `);
  res.json({ message: "data berhasil ditambahkan" });
});
