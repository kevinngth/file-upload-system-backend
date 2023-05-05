const buildResponse = (statusCode, body) => ({
  statusCode,
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
    "Access-Control-Allow-Headers": "Content-Type,Authorization,Access-Control-Allow-Origin",
    body: JSON.stringify(body),
  },
});

module.exports.buildResponse = buildResponse;
