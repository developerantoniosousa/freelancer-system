import Income from "../models/Income";

class IncomeController {
  async index(req, res) {
    const where = {};

    if (req.query.client_id) {
      where.client_id = req.query.client_id;
    }

    const limit = 10;
    const offset = (req.query.page || 1) * limit - limit;

    const incomes = await Income.findAll({ where, limit, offset });

    return res.json(incomes);
  }

  async store(req, res) {
    const income = await Income.create(req.body);

    return res.json(income);
  }
}

export default new IncomeController();
