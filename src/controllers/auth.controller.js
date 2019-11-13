/* eslint-disable linebreak-style */
class authController {
  static signUp(req, res) {
    const {
      firstname, lastname, email, password, password2,
    } = req.body;

    res.status(201).json({
      messsage: 'User signup successfully',
      user: {
        firstname,
        lastname,
        email,
        password,
        password2,
      },
    });
  }

  static login(req, res) {
    const { email, password } = req.body;
    res.status(200).json({
      message: 'Login Successful',
      userData: {
        email,
        password,
      },
    });
  }
}

export default authController;
