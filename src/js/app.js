import _ from 'lodash';



window.onload = function () {
   //las imagnes claras solo dragstart y dragend
   var bulbasur = document.getElementById("bulbasur");
    bulbasur.addEventListener("dragstart", arrastrar, false);
    bulbasur.addEventListener("dragend", finArrastrar, false);
    
    
   //dragover drop dragenter dragleave las oscuras

    
    function arrastrar(ev){
        
        ev.dataTransfer.setData("text", ev.target.id)
        console.log(ev.target.id);
    }
    
    function finArrastrar(ev){
        
        
    }
}

