import httpStatus from 'http-status';

const sendResponse = (props) => {
  let {
    res,
    response,
    status = httpStatus.OK,
  } = props;

  if (response?.result) {
    // Send success response
    res.status(status);
    res.json(response.result);
  } else if (response?.error) {
    // Send error response
    res.status(status);
    res.json({ errors: { message: response.error } });
  } else {
    // Send unknown error response
    res.status(httpStatus.INTERNAL_SERVER_ERROR);
    res.json('System error');
  }
};

export default sendResponse;