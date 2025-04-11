import express from "express";
import dotenv from "dotenv";
dotenv.config();
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const baseUrl = "https://api.openweathermap.org/data/2.5/weather";

app.get("/", (req, res) => {
  res.send("Hello World!");
});

const apiKey = process.env.API_KEY;

app.post("/getData", async (req, res) => {
  const city = req.body.city;
  try {
    if (!city) {
      return res.status(400).json({ error: "City is required" });
    }
    const response = await fetch(
      `${baseUrl}?q=${city}&appid=${apiKey}&units=metric`
    );

    if (!response.ok) {
      if (response.status === 404) {
        return res.status(404).json({ error: "City not found" });
      } else {
        return res
          .status(500)
          .json({ error: "Internal Server Error", error: response.statusText });
      }
    }
    const data = await response.json();
    return res.status(200).json({
      data: {
        city: data.name,
        country: data.sys.country,
        temperature: data.main.temp,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        icon: data.weather[0].icon,
        windSpeed: data.wind.speed,
        windDirection: data.wind.deg,
        visibility: data.visibility,
        pressure: data.main.pressure,
      },
    });
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .json({ error: "Failed to fetch Weather try after sometime" });
  }
});

app.listen(4000, () => {
  console.log("Server is running on port 4000");
});
