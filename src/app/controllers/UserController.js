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

  async update(req, res) {
    const { id, email, oldPassword } = req.body;
    const user = await User.findByPk(id);
    if (email !== user.email) {
      const userExists = await User.findOne({ where: { email } });

      if (userExists) {
        return res.status(400).json({
          message: 'E-mail já existe',
        });
      }
    }
    if (oldPassword && !(await user.checkPassword(oldPassword))) {
      return res.status(400).json({
        message: 'Senha antiga inválida',
      });
    }

    const { name, provider } = await user.update(req.body);
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
