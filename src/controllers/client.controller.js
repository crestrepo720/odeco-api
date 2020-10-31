const Client = require('../models/clients.model.js');

exports.findAll = async (req, res) => {
  try {
    const clients = await Client.find({});
    res.json(clients);
  } catch (error) {
    res.status(500).send({ message: error.message });
    next();
  }
}

exports.findById = async (req, res) => {
  try {
    const client = await Client.findById(req.params.id);

    if (!client) {
      res.status(404).json({
        message: 'Client not found'
      });
    }

    res.json(client);
  } catch (error) {
    res.status(500).send({ message: error.message });
    next();
  }
}

exports.create = async (req, res) => {
  const client = new Client(req.body);

  try {
    let savedClient = await client.save();
    res.status(201).json(savedClient);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
}

exports.update = async (req, res) => {
  try {
    let updatedClient = await Client.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!updatedClient) {
      res.status(404).json({
        message: 'Client not found'
      });
    }

    res.json(updatedClient);
  } catch (error) {
    res.status(500).send({ message: error.message });
    next();
  }
}

exports.delete = async (req, res) => {
  try {
    let clientDeleted = await Client.findByIdAndDelete(req.params.id);

    if (!clientDeleted) {
      res.status(404).json({
        message: 'Client not found'
      });
    }
    
    res.json({ message: 'Client deleted succesfully' });
  } catch (error) {
    res.status(500).send({ message: error.message });
    next();
  }
}