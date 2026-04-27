const crypto = require("crypto");

function verifyTelegram(data = {}, botToken) {
  if (!data || typeof data !== "object") return false;
  if (!botToken) return false;

  const secret = crypto
    .createHash("sha256")
    .update(botToken)
    .digest();

  const checkString = Object.keys(data)
    .filter(key => key !== "hash" && data[key] !== undefined && data[key] !== null)
    .sort()
    .map(key => `${key}=${data[key]}`)
    .join("\n");

  const expectedHash = crypto
    .createHmac("sha256", secret)
    .update(checkString)
    .digest("hex");

  return expectedHash === data.hash;
}

module.exports = { verifyTelegram };