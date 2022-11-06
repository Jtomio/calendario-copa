function createGame(player1, hour, player2) {
  return `
  <li>
          <img
            src="./assets/flags/icon-${player1}.svg"
            alt="Bandeira ${player1}"
            title="${player1}"
          />
          <strong>${hour}</strong>
          <img
            src="./assets/flags/icon-${player2}.svg"
            alt="Bandeira ${player2}"
            title="${player2}"
          />
        </li>
  `;
}

let delay = -0.4;

function createCard(date, day, games) {
  delay = delay + 0;
  return `
    <div class="card" style="animation-delay: ${delay}s">
      <h2>${date}<span>${day}</span></h2>
      <ul>
        ${games}
      </ul>
    </div>
  `;
}

document.querySelector("#cards").innerHTML =
  createCard("20/11", "domingo", createGame("Qatar", "13:00", "Ecuador")) +
  createCard(
    "21/11",
    "segunda",
    createGame("England", "10:00", "Iran") +
      createGame("Senegal", "13:00", "Holanda") +
      createGame("Usa", "16:00", "Gales")
  ) +
  createCard(
    "22/11",
    "terça",
    createGame("Argentina", "07:00", "Arabia-Saudita") +
      createGame("Dinamarca", "10:00", "Tunisia") +
      createGame("Mexico", "13:00", "Polonia") +
      createGame("Franca", "16:00", "Australia")
  ) +
  createCard(
    "23/11",
    "quarta",
    createGame("Marrocos", "07:00", "Croacia") +
      createGame("Alemanha", "10:00", "Japao") +
      createGame("Espanha", "13:00", "Costa-Rica") +
      createGame("Belgica", "16:00", "Canada")
  ) +
  createCard(
    "24/11",
    "quinta",
    createGame("Suica", "07:00", "Cameroon") +
      createGame("Uruguay", "10:00", "South-Korea") +
      createGame("Portugal", "13:00", "Ghana") +
      createGame("Brazil", "16:00", "Serbia")
  ) +
  createCard(
    "25/11",
    "sexta",
    createGame("Gales", "07:00", "Iran") +
      createGame("Qatar", "10:00", "Senegal") +
      createGame("Holanda", "13:00", "Ecuador") +
      createGame("England", "16:00", "Usa")
  ) +
  createCard(
    "26/11",
    "sabado",
    createGame("Tunisia", "07:00", "Australia") +
      createGame("Polonia", "10:00", "Arabia-Saudita") +
      createGame("Franca", "13:00", "Dinamarca") +
      createGame("Argentina", "16:00", "Mexico")
  ) +
  createCard(
    "27/11",
    "domingo",
    createGame("Japao", "07:00", "Costa-Rica") +
      createGame("Belgica", "10:00", "Marrocos") +
      createGame("Croacia", "13:00", "Canada") +
      createGame("Espanha", "16:00", "Alemanha")
  ) +
  createCard(
    "28/11",
    "segunda",
    createGame("Cameroon", "07:00", "Serbia") +
      createGame("South-Korea", "10:00", "Ghana") +
      createGame("Brazil", "13:00", "Suica") +
      createGame("Portugal", "16:00", "Uruguay")
  ) +
  createCard(
    "29/11",
    "terça",
    createGame("Ecuador", "07:00", "Senegal") +
      createGame("Holanda", "10:00", "Qatar") +
      createGame("Iran", "13:00", "Usa") +
      createGame("Ghales", "16:00", "England")
  ) +
  createCard(
    "30/11",
    "quarta",
    createGame("Tunisia", "07:00", "Franca") +
      createGame("Australia", "10:00", "Dinamarca") +
      createGame("Polonia", "13:00", "Argentina") +
      createGame("Arabia-Saudita", "16:00", "Mexico")
  ) +
  createCard(
    "01/12",
    "quinta",
    createGame("Croacia", "07:00", "Belgica") +
      createGame("Canada", "10:00", "Marrocos") +
      createGame("Japao", "13:00", "Espanha") +
      createGame("Costa-Rica", "16:00", "Alemanha")
  ) +
  createCard(
    "02/12",
    "sexta",
    createGame("South-Korea", "07:00", "Portugal") +
      createGame("Ghana", "10:00", "Uruguay") +
      createGame("Serbia", "13:00", "Suica") +
      createGame("Cameroon", "16:00", "Brazil")
  );
