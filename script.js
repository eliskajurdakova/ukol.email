const jmeno = prompt("Zadej svoje jméno bez diakritiky").trim().toLowerCase().slice(0, 4);
const prijmeni = prompt("Zadej svoje příjmení bez diakritiky").trim().toLowerCase().slice(0, 6);

const domena = "fit.cvut.cz"


document.body.innerHTML = `
      <p>${jmeno}.${prijmeni}@${domena}</p>

`