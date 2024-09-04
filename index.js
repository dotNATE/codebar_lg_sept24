const express = require('express');
const app = express();

const getData = async () => {
    const url = "http://api.worldbank.org/v2/country/br?format=json";
    const data = await fetch(url);

    return data;
};

app.get("/msg", async (req, res) => {
    const data2 = await getData();
   res.json(await data2.json());
});

app.listen(3000, () => {
    console.log("server running on port 3000");
});