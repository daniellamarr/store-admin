import {User, Plot} from '../../db/models';

const READ = async (req, res) => {
  try {
    const {customerId} = req.params;

    const user = await User.findOne({
      where: {customerId},
      include: [
        {
          model: Plot,
          as: 'plots'
        }
      ]
    });

    if (!user) {
      return res.status(404).send({
        success: false,
        message: 'We could not find this customer'
      });
    }

    return res.status(200).send({
      success: true,
      message: 'User returned',
      data: user
    });
  } catch (err) {
    return res.status(500).send({
      success: false,
      message: 'Something went wrong on the server'
    });
  }
};

export default READ;
