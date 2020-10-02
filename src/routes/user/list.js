import {User, Plot} from '../../db/models';

const LIST = async (req, res) => {
  try {
    const users = await User.findAll({
      include: [
        {
          model: Plot,
          as: 'plots'
        }
      ]
    });

    return res.status(200).send({
      success: true,
      message: 'User returned',
      data: users
    });
  } catch (err) {
    return res.status(500).send({
      success: false,
      message: 'Something went wrong on the server'
    });
  }
};

export default LIST;
