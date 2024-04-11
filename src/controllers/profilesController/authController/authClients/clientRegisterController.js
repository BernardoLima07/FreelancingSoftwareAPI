import bcrypt from "bcrypt";
import { ClientModel } from "../../../../database/models/clientModel.js";

export class ClientRegisterController {
  async register(req, res) {
    const { name, email, password, balance } = req.body;

    const salt = await bcrypt.genSalt(12);
    const passwordHash = await bcrypt.hash(password, salt);
    const userExists = await ClientModel.findOne({ email });

    if (userExists) {
      console.log("Exist");
    }

    try {
      const newClient = await ClientModel.create({
        name,
        email,
        password: passwordHash,
        balance,
      });
      res
        .status(201)
        .json({ msg: "Client created successfully.", client: newClient });
    } catch (err) {
      console.log(err)
      res.status(400).json({ msg: "Unable to create a Client."});
    }
  }
}
