


setTimeout(function(){
// impresion de cards en el DOM 

const contenedor = document.querySelector(".cotizaciones")


 divisa.forEach(moneda => {
    contenedor.innerHTML += `<div class="card" style="width: 18rem;">
    <img src="${moneda.img}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${moneda.nombre}</h5>
      <span>${moneda.simbolo}</span>
      <p class="card-text " id="valor">${moneda.valor}</p>
      <a href="#" id="${moneda.id}" cl data-bs-toggle="modal" class="btn btn-primary cotizar" data-bs-target="#exampleModal">Cotizar</a>
    </div>
  </div>
     `
     
});  



let calculadora = []

// Funcion de compra y impresion en modal la compra
let cotizar
let modal
// Funcion de compra y impresion en modal la compra

    
    cotizar = document.querySelectorAll(".cotizar")
    //console.log(compra)
    modal = document.querySelector(".modal-body")
    //console.log(modal)
const agregarCompra = (e) =>{
        
        let hijo = e.target
        let padre = hijo.parentNode
        let abuelo = padre.parentNode
        let img = abuelo.querySelector("img").src
        let nombre = padre.querySelector("h5").textContent
        let valor = padre.querySelector("#valor").textContent
        let simbolo = padre.querySelector("span").textContent
        
        class objeto {
            constructor(img ,nombre, valor, simbolo){
                this.img = img
                this.nombre = nombre
                this.valor = valor
                this.simbolo =simbolo
            }
        }
        const resultado =  new objeto (img, nombre , valor, simbolo)
        calculadora.push(resultado)
        localStorage.setItem("producto", JSON.stringify(resultado))
        modal.innerHTML = `<img id="imgDivisa" src="${img}"></img>
        <p id="etiquetaM">${nombre}</p>
        <div class="input-group mb-3">
        <span class="input-group-text">${simbolo}</span>
        <span id="valorM" class="input-group-text">${valor}</span>
        <input id="cantidad" type="number" class="form-control" aria-label="Dollar amount (with dot and two decimal places)">
        </div>
        `
       //console.log(valor);
}
cotizar.forEach( elemento =>{
    elemento.addEventListener("click", agregarCompra)
})  
;


//funcion con evento de compra con calculo y impresion en modal

let calcular = document.querySelector(".calcular")
function total(){

  
    let valorM = document.querySelector("#valorM");
    let cantidad = document.querySelector("#cantidad")
    let impuestoPais = 1.35
    let impuestoGanancias = 1.30 
    //console.log(valorM);
    


    // Calculo de valor final
    let suma = parseInt(valorM.innerText) * parseInt(cantidad.value) * impuestoPais * impuestoGanancias
    //console.log(suma);
  
     
   let calculo = document.querySelector("#calculo")
   calculo.innerHTML = `  <p id="impPais">% Impuesto Pais $ ${(parseInt(valorM.innerText) * parseInt(cantidad.value) * impuestoPais - (parseInt(valorM.innerText) * parseInt(cantidad.value) )).toFixed(2) }</p>
                          <p id="impGan">% Impuesto a las Ganancias $ ${(parseInt(valorM.innerText) * parseInt(cantidad.value) * impuestoGanancias - (parseInt(valorM.innerText) * parseInt(cantidad.value) )).toFixed(2) }</p>
                          <p id="total">Su cotizacion es: ARS$ ${suma.toFixed(2)} </p>
                            `
   //condicional para que deje solo 2 decimales y si te pasas de un maximo de 200 dolares te tira leyenda
   if(suma.toFixed(2) > 36855){
    calculo.innerHTML = `<p id="alerta">Excediste el minimo, la AFIP esta yendo en camino!!</p>`
}

   }
 



// evento de confirmar compra con impresion de calculo

calcular.addEventListener("click", total)

//botones cerrar modal para eliminar contenido

let cerrar = document.querySelectorAll(".cerrar")

function borrar(){
    let calculo = document.querySelector("#calculo")
    calculo.innerHTML =``
} 
cerrar.forEach(element => {
    element.addEventListener("click",borrar)
});



},200)





 

  












