import {User} from '../../db/models';

const DELETE = async (req, res) => {
  try {
    const {customerId} = req.params;

    await User.destroy({where: {customerId}});

    return res.status(200).send({
      success: true,
      message: 'User deleted'
    });
  } catch (err) {
    return res.status(500).send({
      success: false,
      message: 'Something went wrong on the server'
    });
  }
};

export default DELETE;
