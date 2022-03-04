const express = require("express");
const router = express.Router();
const Customer = require("../models/customer");

router.get("/", async (req, res) => {
  try {
    const customers = await Customer.find();

    return res.send(customers);
  } catch (err) {
    return res.status(400).send({ error: "Erro ao buscar clientes" });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const customer = await Customer.findById(req.params.id);

    return res.send(customer);
  } catch (err) {
    return res.status(400).send({ error: "Erro ao buscar cliente" });
  }
});

router.get("/businessKey/:businessKey", async (req, res) => {
  try {
    const customers = await Customer.find({
      businessKey: { $regex: req.params.businessKey, $options: "i" },
    });

    return res.send(customers);
  } catch (err) {
    return res
      .status(400)
      .send({ error: "Erro ao buscar cliente por chave de negócio" });
  }
});

router.post("/", async (req, res) => {
  try {
    const customer = await Customer.create(req.body);

    return res.send(customer);
  } catch (err) {
    return res.status(400).send({ error: "Erro ao criar cliente" });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const customer = await Customer.findByIdAndUpdate(req.params.id, req.body);

    return res.send(customer);
  } catch (err) {
    return res.status(400).send({ error: "Erro ao atualizar cliente" });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    await Customer.findByIdAndRemove(req.params.id);

    return res.send();
  } catch (err) {
    return res.status(400).send({ error: "Error ao excluir cliente" });
  }
});

module.exports = (app) => app.use("/customers", router);
