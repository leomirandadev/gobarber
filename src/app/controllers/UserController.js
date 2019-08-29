import User from '../models/User';

class UserController {
  async store(req, res) {
    const userExists = await User.findOne({ where: { email: req.body.email } });

    if (userExists) {
      return res.status(400).json({
        message: 'E-mail já existe',
      });
    }

    const { id, name, email, provider } = await User.create(req.body);
    return res.json({
      message: 'Cadastrado com sucesso',
      output: {
        id,
        name,
        email,
        provider,
      },
    });
  }
}

export default new UserController();
