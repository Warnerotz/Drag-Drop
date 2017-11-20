import _ from 'lodash';



window.onload = function () {
    var seleccionado;
    document.getElementById("reini").addEventListener("click", reiniciar,false);
    //bulbasur
    var bulbOsc = document.getElementById("bulbasurOsc");
    var bulbasur = document.getElementById("bulbasur");

    //charmander

    var charOsc = document.getElementById("charmanderOsc");
    var charmander = document.getElementById("charmander");

    //picachu

    var picOsc = document.getElementById("picachuOsc");
    var picachu = document.getElementById("picachu");

    //squirtel


    var squirtOsc = document.getElementById("squirtelOsc");
    var squirtel = document.getElementById("squirtel");

    //las imagnes claras solo dragstart y dragend

    bulbasur.addEventListener("dragstart", inArrastrar, false);   
    charmander.addEventListener("dragstart", inArrastrar, false);    
    picachu.addEventListener("dragstart", inArrastrar, false);    
    squirtel.addEventListener("dragstart", inArrastrar, false);
   


    //oscuras dragenter dragleave drop dragover   
    bulbOsc.addEventListener("dragenter", entrar, false);
    bulbOsc.addEventListener("dragleave", salir, false);
    bulbOsc.addEventListener("drop", soltar, false);
    bulbOsc.addEventListener("dragover", prevent, false);

    charOsc.addEventListener("dragenter", entrar, false);
    charOsc.addEventListener("dragleave", salir, false);
    charOsc.addEventListener("drop", soltar, false);
    charOsc.addEventListener("dragover", prevent, false);

    picOsc.addEventListener("dragenter", entrar, false);
    picOsc.addEventListener("dragleave", salir, false);
    picOsc.addEventListener("drop", soltar, false);
    picOsc.addEventListener("dragover", prevent, false);

    squirtOsc.addEventListener("dragenter", entrar, false);
    squirtOsc.addEventListener("dragleave", salir, false);
    squirtOsc.addEventListener("drop", soltar, false);
    squirtOsc.addEventListener("dragover", prevent, false);

// funcion que se ejecuta al iniciar el drag pongo la variable porque para algunos eventos
// no me funciona el getData
    function inArrastrar(ev) {
        seleccionado = ev.target.id;
        ev.dataTransfer.setData("text", ev.target.id);
        //dragged = ev.target;
        //ev.dataTransfer.setData("text", ev.target.id)
        //console.log(ev.target.id);
        //dragged.style.opacity = 0.5;
    }

//funcion para prevenir la accion por defecto
    function prevent(ev) {

        ev.preventDefault();
    }

  
//funcion para cuando hace el dragenter
    function entrar(ev) {
        var data = seleccionado;
        //var data = ev.dataTransfer.getData("text");
        console.log("data: " + seleccionado);
        //console.log("id: "+this.id);
        colocarFondo(this.id, data);
                

       


    }
//funcion que coloca el fondo segun corresponda
    function colocarFondo(valor, data) {
        if (data == "bulbasur") {
            switch (valor) {
                case "bulbasurOsc":
                    document.getElementById("bulb").style.backgroundColor = "#5cb85c";
                    break;
                case "charmanderOsc":
                    document.getElementById("char").style.backgroundColor = "#DE1A0D";
                    break;
                case "picachuOsc":
                    document.getElementById("pic").style.backgroundColor = "#DE1A0D";
                    break;
                case "squirtelOsc":
                    document.getElementById("squir").style.backgroundColor = "#DE1A0D";
                    break;
            }

        }
        
        if (data == "charmander") {
            switch (valor) {
                case "bulbasurOsc":
                    document.getElementById("bulb").style.backgroundColor = "#DE1A0D";
                    break;
                case "charmanderOsc":
                    document.getElementById("char").style.backgroundColor = "#5cb85c";
                    break;
                case "picachuOsc":
                    document.getElementById("pic").style.backgroundColor = "#DE1A0D";
                    break;
                case "squirtelOsc":
                    document.getElementById("squir").style.backgroundColor = "#DE1A0D";
                    break;
            }

        }
        
        if (data == "picachu") {
            switch (valor) {
                case "bulbasurOsc":
                    document.getElementById("bulb").style.backgroundColor = "#DE1A0D";
                    break;
                case "charmanderOsc":
                    document.getElementById("char").style.backgroundColor = "#DE1A0D";
                    break;
                case "picachuOsc":
                    document.getElementById("pic").style.backgroundColor = "#5cb85c";
                    break;
                case "squirtelOsc":
                    document.getElementById("squir").style.backgroundColor = "#DE1A0D";
                    break;
            }

        }
        
        if (data == "squirtel") {
            switch (valor) {
                case "bulbasurOsc":
                    document.getElementById("bulb").style.backgroundColor = "#DE1A0D";
                    break;
                case "charmanderOsc":
                    document.getElementById("char").style.backgroundColor = "#DE1A0D";
                    break;
                case "picachuOsc":
                    document.getElementById("pic").style.backgroundColor = "#DE1A0D";
                    break;
                case "squirtelOsc":
                    document.getElementById("squir").style.backgroundColor = "#5cb85c";
                    break;
            }

        }


    }


//funcion que se ejecuta cuando se hace el dragleave
    function salir(ev) {
        var data = seleccionado;
        //var data = ev.dataTransfer.getData("text");
        document.getElementById("bulb").style.backgroundColor= "";
        document.getElementById("char").style.backgroundColor= "";
        document.getElementById("pic").style.backgroundColor= "";
        document.getElementById("squir").style.backgroundColor= "";
    }
//funcion que se ejecuta cuando se hace el drop
    function soltar(ev) {
        ev.preventDefault();
        var data = ev.dataTransfer.getData("text");

        switch (data) {
            case "bulbasur":
                if (this.id == "bulbasurOsc") {
                    document.getElementById("bulb").appendChild(document.getElementById(data));
                    document.getElementById(data).setAttribute("draggable", "false");
                    document.getElementById("bulb").removeChild(document.getElementById(this.id));
                    document.getElementById("bulb").style.backgroundColor ="";
                }
                break;


            case "charmander":
                if (this.id == "charmanderOsc") {
                    document.getElementById("char").appendChild(document.getElementById(data));
                    document.getElementById(data).setAttribute("draggable", "false");
                    document.getElementById("char").removeChild(document.getElementById(this.id));
                    document.getElementById("char").style.backgroundColor ="";

                }
                break;

            case "picachu":
                if (this.id == "picachuOsc") {
                    document.getElementById("pic").appendChild(document.getElementById(data));
                    document.getElementById(data).setAttribute("draggable", "false");
                    document.getElementById("pic").removeChild(document.getElementById(this.id));
                    document.getElementById("pic").style.backgroundColor ="";

                }
                break;
            case "squirtel":
                if (this.id == "squirtelOsc") {
                    document.getElementById("squir").appendChild(document.getElementById(data));
                    document.getElementById(data).setAttribute("draggable", "false");
                    document.getElementById("squir").removeChild(document.getElementById(this.id));
                    document.getElementById("squir").style.backgroundColor ="";

                }
                break;
        }



    }
}


function reiniciar() {
        window.location.reload();
    }