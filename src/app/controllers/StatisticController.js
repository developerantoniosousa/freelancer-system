import Client from "../models/Client";
import Income from "../models/Income";
import Investment from "../models/Investment";

class StatisticController {
  async index(req, res) {
    const clientsCount = await Client.count();
    const incomesCount = await Income.count();
    const investmentsCount = await Investment.count();

    const incomesTotal = await Income.sum("value");
    const investmentsTotal = await Investment.sum("price");

    return res.json({
      clientsCount,
      incomesCount,
      investmentsCount,
      incomesTotal,
      investmentsTotal
    });
  }
}

export default new StatisticController();
