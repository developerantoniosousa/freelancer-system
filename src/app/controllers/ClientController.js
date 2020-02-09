import Client from "../models/Client";

class ClientController {
  async index(req, res) {
    const filters = {};

    const limit = 10;
    filters.limit = limit;

    filters.offset = (req.query.page || 1) * limit - limit;

    const clients = await Client.findAll(filters);

    return res.json(clients);
  }

  async store(req, res) {
    const { email } = req.body;

    if (await Client.findOne({ where: { email } })) {
      return res.status(400).json({ error: "Client already exists" });
    }

    const client = await Client.create(req.body);

    return res.json(client);
  }
}

export default new ClientController();
