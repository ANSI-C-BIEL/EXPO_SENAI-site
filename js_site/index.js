
const formCalcularFracao = document.getElementById("form-calcular-fracao");

formCalcularFracao.addEventListener("submit", (event) => {
  event.preventDefault();

const fracao1 = event.target.fracao1.value;
const fracao2 = event.target.fracao2.value;

const resultado = document.getElementById("resutlado-calculo-fracao");
resultado.innerHTML = `<p>Resultado: ${Number(
  (fracao1 / fracao2) * 25.4
).toFixed(3)}</p>`;
});

/*-----------------------------------------------------------------------------------*/

const formCalcularMilimetroPraInFracao = document.getElementById("form-calcular-milimetro");

formCalcularMilimetroPraInFracao.addEventListener("submit", (event) => {
  event.preventDefault();

const milimetro = event.target.milimetro.value;


const resultado = document.getElementById("resulMMpraFraIN");
resultado.innerHTML = `<p>Resultado: ${Number(
  (milimetro) * 5.04
).toFixed(3)}</p>`;
});

/*-----------------------------------------------------------------------------------*/

const formCalcularInPraInMM = document.getElementById("form-calcular-in-inFracao");

formCalcularInPraInMM.addEventListener("submit", (event) => {
  event.preventDefault();

const fracao3 = event.target.fracao3.value;
const fracao4 = event.target.fracao4.value;


const resultado = document.getElementById("resulInFracaoPraInMM");
resultado.innerHTML = `<p>Resultado: ${Number(
  fracao3 / fracao4
).toFixed(3)}</p>`;
});

/*------------------------------------------------------------------------------------*/

const formcalcularInMMparaInFracao = document.getElementById("form-calcular-InMM-para-InFracao");

formcalcularInMMparaInFracao.addEventListener("submit", (event) => {
  event.preventDefault();

const milimetroIn = event.target.milimetroIn.value;

const resultado = document.getElementById("resulInMMparaInFracao");
resultado.innerHTML = `<p>Resultado: ${Number(
  (milimetroIn * 128) / 128
).toFixed(3)}</p>`;
});

/*-------------------------------------------------------------------------------------------*/

const formcalcularMMparaInMM = document.getElementById("form-calcular-MM-para-InMM");

formcalcularMMparaInMM.addEventListener("submit", (event) => {
  event.preventDefault();

const milimetroMM = event.target.milimetroMM.value;

const resultado = document.getElementById("resulMMparaInMM");
resultado.innerHTML = `<p>Resultado: ${Number(
  milimetroMM / 25.4
).toFixed(3)}</p>`;
});

/*-------------------------------------------------------------------------------------------*/

const formcalcularInMiparaMM = document.getElementById("form-calcular-InMi-para-MM");

formcalcularInMiparaMM.addEventListener("submit", (event) => {
  event.preventDefault();

const fpolegadaMM = event.target.fpolegadaMM.value;

const resultado = document.getElementById("resulInparaMM");
resultado.innerHTML = `<p>Resultado: ${Number(
  fpolegadaMM * 25.4
).toFixed(3)}</p>`;
});
  

