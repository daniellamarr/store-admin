import {User, Plot} from '../../db/models';

const REALLOCATE = async (req, res) => {
  try {
    const {customerId, plotNumber} = req.body;

    const findUser = await User.findOne({where: {customerId}});

    if (!findUser) {
      return res.status(404).send({
        success: false,
        message: 'We could not find the user'
      });
    }

    const data = {
      userId: findUser.id,
    }

    const findPlot = await Plot.findOne({where: {plotNumber}});

    if (!findPlot) {
      return res.status(404).send({
        success: false,
        message: 'We could not find the plot'
      });
    }

    await Plot.update(data, {where: {plotNumber}});

    return res.status(200).send({
      success: true,
      message: 'Plot reallocated',
      data
    });
  } catch (err) {
    return res.status(500).send({
      success: false,
      message: 'Something went wrong on the server'
    });
  }
};

export default REALLOCATE;
