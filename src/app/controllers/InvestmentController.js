import Investment from "../models/Investment";

class InvestmentController {
  async index(req, res) {
    const filters = {};

    const limit = 10;
    filters.limit = limit;

    filters.offset = (req.query.page || 1) * limit - limit;

    const investments = await Investment.findAll(filters);

    return res.json(investments);
  }

  async store(req, res) {
    const client = await Investment.create(req.body);

    return res.json(client);
  }
}

export default new InvestmentController();
