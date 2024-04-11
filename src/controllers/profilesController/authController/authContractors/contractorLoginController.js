import { ContractorModel } from "../../../../database/models/contractorModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { configDotenv } from "dotenv";
configDotenv();

export class ContractorLoginController {
  async login(req, res) {
    const { email, password } = req.body;

    if (!email) {
      return res.status(422).json({ msg: "Email is required" });
    }
    if (!password) {
      return res.status(422).json({ msg: "Password is required" });
    }

    try {
      const user = await ContractorModel.findOne({
        where: {
          email: email,
        },
      });
      console.log(user)
      if (!user) {
        return res.status(404).json({ msg: "Usuario not found" });
      }

      const checkPassword = await bcrypt.compare(password, user.password);
      console.log(password, user.password, checkPassword);

      if (!checkPassword) {
        return res.status(422).json({ msg: "Invalid password." });
      }

      try {
        const SECRET_KEY = process.env.SECRET_KEY;

        const token = jwt.sign(
          {
            user_id: user.user_id,
          },
          SECRET_KEY
        );
        console.log(token)

        return res
          .status(200)
          .json({ msg: "Login successfully.", token: token });
      } catch (err) {
        console.log(err);
        return res.status(400).json({ msg: "Error generating token." });
      }
    } catch (err) {
      console.log(err);
      res.status(500).json({ msg: "Error loggin in." });
    }
  }
}
