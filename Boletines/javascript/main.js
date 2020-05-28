//DOM
//querySelector/querySelectorAll
/*let links = document.querySelectorAll("a");
links.forEach(function(link){
  console.log(link);
});
let celdas = document.querySelectorAll("td");
  celdas.forEach(function(td){
    td.addEventListener("click", function(){
      console.log(this);
  })
});*/

let closse = document.querySelectorAll(".close");
  closse.forEach(function(close){
      console.log(closse);

    close.addEventListener("click", function(ev){
      ev.preventDefault();

      let content = document.querySelector(".content");

      //Quitarle las clases de animación que ya tiene
      content.classList.remove("animate__backInDown")
      content.classList.remove("animate__animated")

      //Agregamos las clases de animacion de salida
      content.classList.add("animate__backOutDown")
      content.classList.add("animate__animated")

      //Nos redireccionamos al home de la pagína y lo retrasamos setTimeout 600 milisegundos
      //setTimeout solo se ejecuta una vez retrasandose el tiempo que se le indica
      setTimeout(function(){
        location.href = ("../")
      },600);
      //setInterval se ejecuta cada cierto tieempo que se le indica

      /*
      console.log("sssssssssssssssssssssssssssssssssssssssssssssssssss");
      return false;*/
  })
});
