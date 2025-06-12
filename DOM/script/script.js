// Onderstaande JS code krijg je van mij
// pas aan waar jij denkt dat het nodig is!
const klanten = [
  {
    klantID: 1,
    naam: "Karel Kleintjes",
  },
  {
    klantID: 2,
    naam: "Els Dotjes",
  },
];

const facturenData = {
  1: [
    { factuurid: 101, bedrag: 250, betaald: true, id: 1 },
    { factuurid: 102, bedrag: 125, betaald: false, id: 1 },
    { factuurid: 103, bedrag: 300, betaald: true, id: 1 },
  ],
  2: [
    { factuurid: 201, bedrag: 400, betaald: false, id: 2 },
    { factuurid: 202, bedrag: 150, betaald: false, id: 2 },
  ],
};

const klantSelect = document.getElementById("klantSelect");
const betaaldContainer = document.getElementById("betaaldContainer");
const nietBetaaldContainer = document.getElementById("nietBetaaldContainer");
// ______________________________________________________________________________________
/**
 * Zorg ervoor dat:
 * 1. Alle klanten in de lijst van klanten komt
 * 2. Alle betaalde facturen van de klanten verschijnen van de gekozen klant
 * 3. Alle niet betaalde verschijnen
 * 4. De facturen kijrgen een kleur op basis van betaald / niet betaald (zie css)
 * 5. Klik je op een factuur-regel dan krijg je een popup met de prijs van de factuur
 */
klanten.forEach((klant) => {
  const option = document.createElement("option");
  option.innerText = klant.naam;
  option.value = klant.klantID;
  klantSelect.appendChild(option);
});

klantSelect.addEventListener("click", function (e) {
  const target = e.target;
  facturenData[1].forEach((element) => {
    if (element.id == target.value) {
      if (element.betaald == true) {
        betaaldContainer.innerText = `Factuur #${element.factuurid} - €${element.bedrag}`;
      }
    }
    console.log(element.id);
  });
  facturenData[1].forEach((element) => {
    if (element.id == target.value) {
      if (element.betaald == false) {
        nietBetaaldContainer.innerText = `Factuur #${element.factuurid} - €${element.bedrag}`;
      }
    }
  });
  facturenData[2].forEach((element) => {
    if (element.id == target.value) {
      if (element.betaald == false) {
        nietBetaaldContainer.innerText = "";
        nietBetaaldContainer.innerText = `Factuur #${element.factuurid} - €${element.bedrag}`;
      }
    }
  });
  facturenData[2].forEach((element) => {
    if (element.id == target.value) {
      if (element.betaald == false) {
        betaaldContainer.innerText = "";
      }
    }
  });
});
