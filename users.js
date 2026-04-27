let users = {};

function getUser(id) {
  if (!users[id]) {
    users[id] = {
      id,
      balance: 100,
      wins: 0
    };
  }
  return users[id];
}

function addBalance(id, amount) {
  if (!users[id]) return;
  users[id].balance += amount;
}

function deductBalance(id, amount) {
  if (!users[id]) return;
  users[id].balance -= amount;
}

module.exports = {
  users,
  getUser,
  addBalance,
  deductBalance
};