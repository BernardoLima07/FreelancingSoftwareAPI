import { ContractsService } from "../../services/contracts/contractsServices.js";

const contractService = new ContractsService();

export class EspecificContractController {
  async especificContract(req, res) {
    const { status } = req.body;

    try {
      const readContract = await contractService.listContracts({
        status,
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
      console.debug(err);
      res.status(500).json({ msg: "Unable to read the Especific Contract." });
    }
  }
}
