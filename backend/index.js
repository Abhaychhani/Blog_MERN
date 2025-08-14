import './config.env.js'

import { app } from './app.js';
import connectDB from "./src/db/index.js";

const port = process.env.PORT || 8080;

connectDB()
  .then(() => {
    app.listen(port, () => {
      console.log("App is listening on port : ", port);
    });
  })
  .catch((err) => {
    console.log(`MongoDB connection FAILED!! : ${err}`);
  });
