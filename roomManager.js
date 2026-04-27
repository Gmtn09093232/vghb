const rooms = {};

function createRoom(id) {
  rooms[id] = {
    players: {},
    gameActive: false,
    calledNumbers: [],
    takenCards: new Set()
  };
}

function getRoom(id) {
  if (!rooms[id]) createRoom(id);
  return rooms[id];
}

module.exports = { rooms, getRoom };