//Aca utilice todo en Jquery


// le quito la parte para que no refresque 

$("#form").submit(function(e) {
e.preventDefault();
  
});

 

let consultas = []
// funcion para enviar productos a una variable y despues al localstorage
$("#btnSubmit").click(function(){
  let contacto = {
    nombre: $("#nombre").val(),
    email: $("#email").val(),
    pais: $("#pais").val(),
    ciudad: $("#ciudad").val(),
    consulta: $("#consulta").val()
  }
 
 consultas.push(contacto)
  localStorage.setItem("consulta", JSON.stringify(consultas))
  $("#consultasYaRealizadas").append(`
  <p>Gracias por tu consulta</p>`)
  
  
}) 


//Btn limpiar contenido

$("#btnLimpiar").click(function(){
  $("input").val(" ") // resolvi de esta forma, pero se que hay otras
  $("#consulta").val(" ")
  localStorage.removeItem("consulta")
})


// levanto la data de localStorage para imprimirla con el boton ultimas consultas

$("#btnConsultas").click(function(){
  let consultasGuardadas = JSON.parse(localStorage.getItem("consulta"))

  $("#consultasYaRealizadas").show(function(){
      
  

   consultasGuardadas.forEach(element => {
        
        $("#consultasYaRealizadas").append(`
      <li>El usuario ${element.nombre} envio la siguiente consulta:\n${element.consulta}</li>`)
    
       
 })
 })
  
})

