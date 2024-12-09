import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
  console.log("Hello World!");
});

app.get("/api/calculate-imc", (req, res) => {
  const { weight, height } = req.query;
  const imc = (weight / (height * height)).toFixed(2);
  let classification = "";

  if (imc < 16.6) classification = "Underweight";
  else if (imc <= 24.9) classification = "Normal";
  else classification = "Overweight";

  res.json({ imc, classification });
});

app.listen(port, console.log(`Server running at http://localhost:${port}`));
