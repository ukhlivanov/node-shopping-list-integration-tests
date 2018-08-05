
function checkForRequiredFields(body) {
  const requiredFields = ["name", "checked"];
  for (let i = 0; i < requiredFields.length; i++) {
    const field = requiredFields[i];
    if (!(field in body)) {
      const message = `Missing \`${field}\` in request body`;
      console.error(message);
      return message;
      // return res.status(400).send(message);
    }
  }
  return null;
}

module.exports = { checkForRequiredFields }