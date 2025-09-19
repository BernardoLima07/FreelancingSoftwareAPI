import { ContractorsService } from "../../services/contractors/contractorsServices.js";

const contractorService = new ContractorsService();

export class ContractorRegisterController {
  async register(req, res) {
    const { name, email, password, balance } = req.body;

    try {
      const newContractor = await contractorService.registerContractor({
        name,
        email,
        password,
        balance,
      });
      res.status(201).json({
        msg: "Contractor created successfully.",
        contractor: newContractor,
      });
    } catch (err) {
      console.log(err);
      res.status(400).json({ msg: "Unable to create a Contractor." });
    }
  }
}
