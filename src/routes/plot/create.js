import {Plot} from '../../db/models';

const CREATE = async (req, res) => {
  try {
    const {plotNumber, estate, userId} = req.body;

    const data = {
      plotNumber,
      estate,
      userId
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
