import { ClientModel } from "../../../../database/models/clientModel.js";

export class HighestPayingClientController {
  async highestPayingClientsReport(req, res) {
    const { updated_at } = req.body;
    try {
      const highestPayingClients = await ClientModel.findAll({
        where: {
          updated_at: updated_at,
        },
        attributes: ["name", "email", "balance"],
        order: [["balance", "DESC"]],
        limit: 10,
      });

      res.status(200).json({
        msg: "Highest Paying Clients read successfully.",
        highestPayingClients,
      });
    } catch (err) {
      console.log(err);
      res
        .status(400)
        .json({ msg: "Unable to read the Highest Paying Clients." });
    }
  }
}
