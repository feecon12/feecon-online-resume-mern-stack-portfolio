const express = require("express");
require("dotenv").config();
const app = express();
const cors = require("cors");

const PORT = process.env.PORT || 3300;

// const corsOptions = {
//   origin: "http://localhost:5173/",
//   optionsSuccessStatus: 200,
// };

// app.get("http://localhost:3000/api/user", cors(corsOptions), (req, res) => {

//   res.json({
//     msg: "successfull",
//   });

// });

app.post("http://localhost:3000/", (req, res) => {
    res.status(200).json({
        msg:"successfull"
    })
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
