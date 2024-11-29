fetch('http://localhost:3000/api/schedules')
  .then(response => response.json())
  .then(data => {
    console.log('Schedules:', data);
  })
  .catch(error => console.error('Error:', error));
import dotenv from "dotenv";
import connect_db from "./config/db.js";
import app from "./app.js";

dotenv.config();

connect_db()
  .then(() => {
    const PORT = process.env.PORT; // Use environment variable or default to 7865

    app.listen(PORT, () => {
      console.log(`App is up and running on port ${PORT}`);
    });
  })
  .catch(err => {
    console.error("Failed to connect to the database:", err.message);
    process.exit(1); // Exit process if DB connection fails
});