function validar() { var valor, text; valor =
    document.getElementById("numero").value; if
    (isNaN(valor) || valor < 1 || valor > 10) { text
    = "No es peque&ntilde;o!"; } else { text =
    "Muy bien!"; }
    document.getElementById("mensaje").innerHTML= text; }

function validar2(){var color, text; 
    color = document.getElementById("color").value;
    var x = document.getElementById("fondo");
    x.style.backgroundColor = color;
  
            if (color = "#FF0000"){
                text="Lo sabia!"
            }
        document.getElementById("mensaje2").innerHTML= text; 
    } 