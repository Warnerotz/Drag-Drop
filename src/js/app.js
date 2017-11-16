import _ from 'lodash';



window.onload = function () {
    var seleccionado;

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
    bulbasur.addEventListener("dragend", finArrastrar, false);
    charmander.addEventListener("dragstart", inArrastrar, false);
    charmander.addEventListener("dragend", finArrastrar, false);
    picachu.addEventListener("dragstart", inArrastrar, false);
    picachu.addEventListener("dragend", finArrastrar, false);
    squirtel.addEventListener("dragstart", inArrastrar, false);
    squirtel.addEventListener("dragend", finArrastrar, false);


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


    function inArrastrar(ev) {
        seleccionado = ev.target.id;
        ev.dataTransfer.setData("text", ev.target.id);
        //dragged = ev.target;
        //ev.dataTransfer.setData("text", ev.target.id)
        //console.log(ev.target.id);
        //dragged.style.opacity = 0.5;
    }

    function prevent(ev) {

        ev.preventDefault();
    }

    function finArrastrar(ev) {

    }

    function entrar(ev) {
        var data = seleccionado;
        //var data = ev.dataTransfer.getData("text");
        console.log("data: " + seleccionado);
        //console.log("id: "+this.id);
        colocarFondo(this.id, data);
                

       


    }

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



    function salir(ev) {
        var data = seleccionado;
        //var data = ev.dataTransfer.getData("text");
        document.getElementById("bulb").style.backgroundColor= "";
        document.getElementById("char").style.backgroundColor= "";
        document.getElementById("pic").style.backgroundColor= "";
        document.getElementById("squir").style.backgroundColor= "";
    }

    function soltar(ev) {
        ev.preventDefault();
        var data = ev.dataTransfer.getData("text");

        switch (data) {
            case "bulbasur":
                if (this.id == "bulbasurOsc") {
                    document.getElementById("bulb").appendChild(document.getElementById(data));
                    document.getElementById(data).setAttribute("draggable", "false");
                    document.getElementById("bulb").removeChild(document.getElementById(this.id));
                }
                break;


            case "charmander":
                if (this.id == "charmanderOsc") {
                    document.getElementById("char").appendChild(document.getElementById(data));
                    document.getElementById(data).setAttribute("draggable", "false");
                    document.getElementById("char").removeChild(document.getElementById(this.id));

                }
                break;

            case "picachu":
                if (this.id == "picachuOsc") {
                    document.getElementById("pic").appendChild(document.getElementById(data));
                    document.getElementById(data).setAttribute("draggable", "false");
                    document.getElementById("pic").removeChild(document.getElementById(this.id));

                }
                break;
            case "squirtel":
                if (this.id == "squirtelOsc") {
                    document.getElementById("squir").appendChild(document.getElementById(data));
                    document.getElementById(data).setAttribute("draggable", "false");
                    document.getElementById("squir").removeChild(document.getElementById(this.id));

                }
                break;
        }



    }
}
