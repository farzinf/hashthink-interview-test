import bodyParser from 'body-parser';
import routes from '../api';

export default ({ app }) => {
  // Middleware that transforms the raw string of req.body into json
  app.use(bodyParser.json());

  /**
   * Health Check endpoints
   */
  app.get('/status', (req, res) => {
    res.status(200).end();
  });
  app.head('/status', (req, res) => {
    res.status(200).end();
  });

  app.use(routes());
};