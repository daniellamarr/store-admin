import express from 'express';
import bodyParser from 'body-parser';
import routes from './routes';

const server = express();

server.use(bodyParser.urlencoded({ extended: false }));
server.use(bodyParser.json());
server.use('/api/v1', routes);

const port = process.env.PORT || 2609;

server.listen(port);

export default server;