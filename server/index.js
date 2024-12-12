import express from "express";
import cors from "cors";

const app = express();
const port = 3001;

app.use(cors());

app.get("/api/calculate-bmi", (req, res) => {
  const { weight, height } = req.query;
  const bmi = (weight / (height * height)).toFixed(2);

  let classification = "";
  if (bmi < 16.6) classification = "Underweight";
  else if (bmi <= 24.9) classification = "Normal";
  else classification = "Overweight";

  res.json({ bmi, classification });
});

app.listen(port, console.log(`Server running at http://localhost:${port}`));
