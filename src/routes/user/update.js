import {User} from '../../db/models';

const UPDATE = async (req, res) => {
  try {
    const {customerId} = req.params;
    const {fullname, phone, email, address} = req.body;

    const findUser = await User.findOne({where: {customerId}});

    if (!findUser) {
      return res.status(404).send({
        success: false,
        message: 'We could not find the user'
      });
    }

    const data = {
      fullname: fullname || findUser.fullname,
      phone: phone || findUser.phone,
      email: email || findUser.email,
      address: address || findUser.address
    }

    await User.update(data, {where: {customerId}});

    return res.status(200).send({
      success: true,
      message: 'User updated',
      data
    });
  } catch (err) {
    return res.status(500).send({
      success: false,
      message: 'Something went wrong on the server'
    });
  }
};

export default UPDATE;
