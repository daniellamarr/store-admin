import {Op} from 'sequelize';
import {User} from '../../db/models';

const CREATE = async (req, res) => {
  try {
    const {fullname, customerId, phone, email, address} = req.body;

    const data = {
      fullname,
      customerId,
      phone,
      email,
      address
    }

    const findUser = await User.findOne({
      where: {
        [Op.or]: [
          {customerId},
          {email}
        ]
      }
    });

    if (findUser) {
      return res.status(400).send({
        success: false,
        message: 'User already exists'
      });
    }

    await User.create(data);

    return res.status(201).send({
      success: true,
      message: 'User created',
      data
    });
  } catch (err) {
    return res.status(500).send({
      success: false,
      message: 'Something went wrong on the server'
    });
  }
};

export default CREATE;
