// Factuur Klasse
class Factuur {
  constructor(factuurnummer, datum, bedrag, betaald = false) {
    this.factuurnummer = factuurnummer;
    this.datum = new Date(datum);
    this.bedrag = bedrag;
    this.betaald = betaald;
  }

  markeerAlsBetaald() {
    this.betaald = true;
  }

  toString() {
    return `Factuur ${this.factuurnummer}: €${this.bedrag.toFixed(2)} - ${
      this.betaald ? "Betaald" : "Openstaand"
    }`;
  }
}

// Klant Klasse
class Klant {
  constructor(id, naam, email) {
    this.id = id;
    this.naam = naam;
    this.email = email;
    this.facturen = [];
  }

  voegFactuurToe(factuur) {
    if (factuur instanceof Factuur) {
      this.facturen.push(factuur);
    } else {
      throw new Error(
        "Alleen instanties van Factuur kunnen worden toegevoegd."
      );
    }
  }

  getOpenstaandeFacturen() {
    return this.facturen.filter((f) => !f.betaald);
  }

  getTotaalBedragOpenstaand() {
    // bereken het totaal van de facturen die nog niet betaald zijn.
    const som = [];
    for (let i = 0; i < this.facturen.length; i++) {
      const som = 0;
      if (this.facturen[i].betaald === false) {
        som.push(this.facturen[i].bedrag);
      }
    }

    console.log(som);
  }
  printFacturen(facturen) {
    console.log("Facturen voor Jan Jansen:");
    for (let i = 0; i < this.facturen.length; i++) {
      if (this.facturen[i].betaald === false) {
        this.facturen[i].betaald = "Openstaand";
      }
      if (this.facturen[i].betaald === true) {
        this.facturen[i].betaald = "Betaald";
      }
      console.log(
        `${this.facturen[i].factuurnummer}: €${this.facturen[i].bedrag}.00 - ${this.facturen[i].betaald} `
      );
    }
  }
}

module.exports = {
  Factuur,
  Klant,
};
