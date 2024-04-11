import { ClientModel } from "../../../database/models/clientModel.js";

export class InsertMoneyController {
  async insertMoney(req, res) {
    let { balance } = req.body;
    const { client_id } = req.params;
    try {
      const client = await ClientModel.findByPk(client_id);

      if (!client) {
        return res.status(404).json({ msg: "Client not found." });
      }
      const updatedBalance = balance + client.balance;
      const updatedClient = await client.update({ balance: updatedBalance });

      res.status(200).json({
        msg: "Money inserted successfully.",
        actualMoney: updatedClient,
      });
    } catch (err) {
      console.log(err);
      res.status(401).json({ msg: "Unable to insert money into balance." });
    }
  }
}
