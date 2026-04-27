const socket = io();
let card = [];
let marked = [];

const tg = window.Telegram?.WebApp;

if (!tg || !tg.initDataUnsafe) {
  console.log("Not in Telegram environment");
}

socket.emit("telegramAuth", tg?.initDataUnsafe || {});
/* AUTH */
socket.emit("telegramAuth", tg?.initDataUnsafe);

/* ROOM */
socket.emit("joinRoom", { roomId: "room1" });

/* CARD */
socket.on("card", c => {
  card = c;
  render();
});

/* NUMBER */
socket.on("number", n => {
  document.getElementById("number").innerText = n;
});

/* MARK */
socket.on("marked", data => {
  marked[data.index] = true;
  render();
});

/* WINNER */
socket.on("winner", data => {
  alert("Winner: " + data.name);
});

/* UI */
function render() {
  const grid = document.getElementById("grid");
  grid.innerHTML = "";

  card.forEach((n, i) => {
    const d = document.createElement("div");
    d.innerText = n;
    d.className = marked[i] ? "cell marked" : "cell";

    d.onclick = () => {
      socket.emit("mark", { index: i, number: n });
    };

    grid.appendChild(d);
  });
}