const express = require("express");
const router = express.Router();
const Visit = require("../models/visit");

const axios = require("axios");

router.get("/", async (req, res) => {
  try {
    const visits = await Visit.find();

    // console.log("visits find ==>", visits);

    return res.send(visits);
  } catch (err) {
    return res.status(400).send({ error: "Erro ao buscar visitas" });
  }
});

router.post("/", (req, res) => {
  try {
    axios
      .get("https://json.geoiplookup.io/")
      .then(async (resIP) => {
        const body = {
          ...resIP.data,
          createdAt: new Date(),
        };

        const visit = await Visit.create(body);

        console.log("visit create ==>", visit);

        return res.send(visit);
      })
      .catch((error) => {
        console.error("error get http://ip-api.com/json ==> ", error);
        return res
          .status(400)
          .send({ error: "Erro ao buscar API http://ip-api.com/json" });
      });
  } catch (err) {
    return res.status(400).send({ error: "Erro ao criar visita" });
  }
});

module.exports = (app) => app.use("/visits", router);
