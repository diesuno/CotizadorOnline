
//array de productos



var divisa = [
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


//Ajax de api con Jquery


let urlDOL= "https://api.exchangerate.host/convert?from=DOL&to=ARS"
let urlEUR = "https://api.exchangerate.host/convert?from=EUR&to=ARS"
let urlYUA = "https://api.exchangerate.host/convert?from=CNY&to=ARS"
let urlREA = "https://api.exchangerate.host/convert?from=BRL&to=ARS"
let urlUYU = "https://api.exchangerate.host/convert?from=UYU&to=ARS"
let urlMXN = "https://api.exchangerate.host/convert?from=MXN&to=ARS"


//Aca traigo varios datos y los envio al array de divisas


$.get(urlDOL,function(datos){
    divisa[0].valor = (datos.result).toFixed(2) 
    //console.log(divisa);
})
$.get(urlEUR,function(datos){
    divisa[1].valor = (datos.result).toFixed(2) 
    //console.log(divisa);
})
$.get(urlYUA,function(datos){
    divisa[2].valor = (datos.result).toFixed(2)  
    //console.log(divisa);
})
$.get(urlREA,function(datos){
    divisa[3].valor = (datos.result).toFixed(2)  
    //console.log(divisa);
})
$.get(urlUYU,function(datos){
    divisa[4].valor = (datos.result).toFixed(2)  
    //console.log(divisa);
})
$.get(urlMXN,function(datos){
    divisa[5].valor = (datos.result).toFixed(2)  
    //console.log(divisa);
})







