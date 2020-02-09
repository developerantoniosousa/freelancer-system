import { Client } from "../models";

class UserController {
  async store(req, res) {
    const { email } = req.body;

    if (await Client.findOne({ where: { email } })) {
      return res.status(400).json({ error: "Client already exists" });
    }

    const client = await Client.create(req.body);

    return res.json(client);
  }
}

export default new UserController();
