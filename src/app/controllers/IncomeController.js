import Income from "../models/Income";

class IncomeController {
  async store(req, res) {
    const income = await Income.create(req.body);

    return res.json(income);
  }
}

export default new IncomeController();
