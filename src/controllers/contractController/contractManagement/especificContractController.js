import { ContractModel } from "../../../database/models/contractModel.js";

export class EspecificContractController {
  async especificContract(req, res) {
    const { status } = req.body;
    try {
      const readContract = await ContractModel.findAll({
        where: {
          status: status,
        },
      });
      if (!readContract) {
        res.status(401).json({
          msg: "Unable to read the Especific Contract.",
          contract: readContract,
        });
      }
      res.status(200).json({
        msg: "Especific Contract readed successfully.",
        contract: readContract,
      });
    } catch (err) {
      console.log(err);
      res.status(500).json({ msg: "Unable to read the Especific Contract." });
    }
  }
}
