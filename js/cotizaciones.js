//Ajax con Jquery
let urlExt = "https://api.exchangerate.host/convert?from=EUR&to=ARS"



$("body").ready(function(){
    $.get(urlExt,function(datos){
        //console.log(datos.result);
        $("#valor1").prepend(`${(datos.result / 1.13).toFixed(2)}`)    
        $("#valor2").prepend(`${(datos.result).toFixed(2)}`)    
        $("#valor3").prepend(`${(datos.result / 7.22).toFixed(2)}`)    
        $("#valor4").prepend(`${(datos.result / 6.40).toFixed(2)}`)    
        $("#valor5").prepend(`${(datos.result / 50.59).toFixed(2)}`)    
        $("#valor6").prepend(`${(datos.result/ 23.11).toFixed(2)}`)    
        
    
  
});

})





//array de productos

   let divisa = [
    {
        id: "divisa1",
        nombre: "DOLAR",
        valor: "valor1",
        simbolo: "U$S",
        img: "../img/dolar.png"
    },
    {
        id: "divisa2",
        nombre: "EURO",
        valor: "valor2",
        simbolo: "€",
        img: "../img/euro.png"
    },
    {
        id: "divisa3",
        nombre: "YUAN",
        valor: "valor3",
        simbolo: "¥",
        img: "../img/yuan.png"
    },
    {
        id: "divisa4",
        nombre: "REAL",
        valor: "valor4",
        simbolo: "R$",
        img: "../img/reales.png"
    },
   
    {
        id: "divisa5",
        nombre: "PESO URUGUAYO",
        valor: "valor5",
        simbolo: "N$",
        img: "../img/uruguayo.png"
    },
    {
        id: "divisa6",
        nombre: "PESO MEXICANO",
        valor: "valor6",
        simbolo: "MXN",
        img: "../img/mexicano.png"
    }
]  




// impresion de cards en el DOM 
const contenedor = document.querySelector(".cotizaciones")


 divisa.forEach(moneda => {
    contenedor.innerHTML += `<div class="card" style="width: 18rem;">
    <img src="${moneda.img}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${moneda.nombre}</h5>
      <span>${moneda.simbolo}</span>
      <p class="card-text valor" id="${moneda.valor}"> </p>
      <a href="#" id="${moneda.id}" cl data-bs-toggle="modal" class="btn btn-primary compra" data-bs-target="#exampleModal">Cotizar</a>
    </div>
  </div>
     `
     
});  



let calculadora = []

// Funcion de compra y impresion en modal la compra
let compra
let modal
// Funcion de compra y impresion en modal la compra
setTimeout(function(){
    cotizar = document.querySelectorAll(".compra")
    //console.log(compra)
    modal = document.querySelector(".modal-body")
    //console.log(modal)
const agregarCompra = (e) =>{
        
        let hijo = e.target
        let padre = hijo.parentNode
        let abuelo = padre.parentNode
        let img = abuelo.querySelector("img").src
        let nombre = padre.querySelector("h5").textContent
        let valor = padre.querySelector(".valor").textContent
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
},100);


//funcion con evento de compra con calculo y impresion en modal

let calcular = document.querySelector(".confirmar")
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








 

  












