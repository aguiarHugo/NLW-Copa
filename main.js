function createGame(player1, hour, player2) {
  return `
        <li>
          <img src="./assets/${player1}.svg" alt="Bandeira do ${player1}" />
          <strong>${hour}</strong>
          <img src="./assets/${player2}.svg" alt="Bandeira de ${player2}" />
        </li>
  `
}

let delay = -0.5;
function createCard(date, day, games) {
  delay = delay + 0.5;
  return `
        <div class="card" style="animation-delay: ${delay}s">
            <h2>${date}<span>${day}</span></h2>
            <ul>
              ${games}
            </ul>
        </div>
  `
}

document.querySelector("#cards").innerHTML = 
      createCard("24/11", "quinta", createGame("brazil", "16:00", "serbia"))+

      createCard("28/11","segunda",
        createGame("brazil", "13:00", "swiss")+ 
          createGame("portugal", "16:00", "uruguay"))+

      createCard("02/12", "sexta", createGame("brazil", "16:00", "camaroes"))
