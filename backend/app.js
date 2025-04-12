import express from "express";
import dotenv from "dotenv";
import cors from "cors";
dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const baseUrl = "https://api.openweathermap.org/data/2.5/weather";
const daysWeatherUrl = "https://api.openweathermap.org/data/2.5/forecast";
const port = process.env.PORT || 4000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

const apiKey = process.env.API_KEY;

app.post("/getCurrentWeather/:city", async (req, res) => {
  const city = req.params.city;
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
        condition: data.weather[0].main,
        feelsLike: data.main.feels_like,
        description: data.weather[0].description,
        icon: data.weather[0].icon,
        windSpeed: data.wind.speed,
        windDirection: data.wind.deg,
        visibility: data.visibility,
        timestamp: data.dt,
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

app.post("/getFiveDaysWeather/:city", async (req, res) => {
  try {
    const city = req.params.city;
    if (!city) {
      return res.status(400).json({ error: "City is required" });
    }

    const response = await fetch(
      `${daysWeatherUrl}?q=${city}&appid=${apiKey}&units=metric`
    );

    if (!response.ok) {
      if (response.status === 404) {
        return res.status(404).json({ error: "City not found" });
      } else {
        return res.status(500).json({
          error: "Internal Server Error",
          details: response.statusText,
        });
      }
    }

    const data = await response.json();

    const formattedData = [];
    const processedDates = new Set();

    for (const item of data.list) {
      const date = new Date(item.dt * 1000);
      const dateString = date.toISOString().split("T")[0]; // YYYY-MM-DD format

      //This function is to take only one forcaset per day default it has multiple hourly forcast.
      if (!processedDates.has(dateString)) {
        processedDates.add(dateString);

        formattedData.push({
          date: date.toLocaleDateString(),
          temperature: item.main.temp,
          humidity: item.main.humidity,
          condition: item.weather[0].main,
          description: item.weather[0].description,
          icon: item.weather[0].icon,
          windSpeed: item.wind.speed,
          windDirection: item.wind.deg,
          pressure: item.main.pressure,
        });
      }
    }

    return res.status(200).json({ forecast: formattedData });
  } catch (err) {
    console.error(err);
    return res
      .status(500)
      .json({ error: "Failed to fetch Weather try after sometime" });
  }
});

app.listen(port, () => {
  console.log("Server is running on port 4000");
});
