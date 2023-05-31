import User from "../model/userModel.js";

export const userRegister = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const user = await User.create({
      name,
      email,
      password,
      avatar: {
        public_id: "Sample id",
        url: "sample url",
      },
    });

    const token = user.getJWTToken()
    res
      .status(201)
      .json({ success: true, msg: "User created successfully", token });
  } catch (error) {
    res.status(500).json({
      success: false,
      msg: "user not able to create : " + error,
    });
  }
};
