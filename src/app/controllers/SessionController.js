import jwt from 'jsonwebtoken';
import authConfig from '../../config/auth';
import User from '../models/User';

class SessionController {
  async store(req, res) {
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email } });
    if (!user) {
      return res.status(400).json({
        message: 'Usuário não encontrado',
      });
    }

    if (!(await user.checkPassword(password))) {
      return res.status(400).json({
        message: 'Senha inválida',
      });
    }

    const { id, name } = user;
    return res.json({
      user: {
        id,
        name,
        email,
      },
      token: jwt.sign({ id }, authConfig.secretToken, {
        expiresIn: authConfig.expiresIn,
      }),
    });
  }
}

export default new SessionController();
