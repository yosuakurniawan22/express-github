import express from "express";
import database from "./db/index.js";

const app = express();

app.use(express.urlencoded({ extended: true}));
app.use(express.json());

database.sync()
.then(() => {
  console.log('database synced');
})
.catch((err) => {
  console.log('failed to sync database: ' + err.message);
})

app.get('/', (req, res) => {
  res.json({ test: "Halo Express"});
});

app.listen(3000, () => {
  console.log('Server jalan');
})