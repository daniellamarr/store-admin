import {User, Plot} from '../../db/models';

const CREATE = async (req, res) => {
  try {
    const {plotNumber, plotDimensions, estate, estateAddress, customerId} = req.body;

    const findUser = await User.findOne({where: {customerId}});

    if (!findUser) {
      return res.status(404).send({
        success: false,
        message: 'No user exists with that customer ID',
      });
    }

    const data = {
      plotNumber,
      plotDimensions,
      estate,
      estateAddress,
      userId: findUser.id
    }

    const findPlot = await Plot.findOne({where: {plotNumber}});

    if (findPlot) {
      return res.status(400).send({
        success: false,
        message: 'This plot has already been allocated to a user',
      });
    }

    await Plot.create(data);

    return res.status(201).send({
      success: true,
      message: 'Plot created',
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
