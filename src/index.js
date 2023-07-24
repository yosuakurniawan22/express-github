import express from "express";

const app = express();

app.use(express.urlencoded({ extended: true}));
app.use(express.json());

app.get('/', (req, res) => {
  res.json({ test: "Halo Express"});
});

app.listen(3000, () => {
  console.log('Server jalan');
})