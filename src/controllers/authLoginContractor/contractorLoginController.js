import { ContractorsService } from "../../services/contractors/contractorsServices.js";

const contractorService = new ContractorsService();

export class ContractorLoginController {
  async login(req, res) {
    const { email, password } = req.body;

    try {
      const { user, token } = await contractorService.loginContractor({
        email,
        password,
      });

      return res.status(200).json({
        msg: "Login successful.",
        token,
        user: {
          id: user.contractor_id,
          name: user.name,
          email: user.email,
        },
      });
    } catch (err) {
      let status = 500;

      if (err.message === "User not found") status = 404;
      if (err.message === "Invalid password") status = 422;
      if (err.message === "Email and password are required") status = 400;

      return res.status(status).json({ msg: err.message });
    }
  }
}
