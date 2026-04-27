function generateCard() {
  return Array.from({ length: 25 }, (_, i) =>
    i === 12 ? "FREE" : Math.floor(Math.random() * 75) + 1
  );
}

function checkWin(marked) {
  return marked.every(v => v);
}

module.exports = { generateCard, checkWin };