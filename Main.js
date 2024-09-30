window.addEventListener('load', function() {
    atualizaRelogio();
});
            
    function copyFun(ctxt) {
        var copyText = document.getElementById(ctxt);
            
        var string = copyText.value
        if(ctxt === 'hora'){
            string = string.substr(0,string.length+5);
        }
                
        navigator.clipboard.writeText(string)
        .then(() => {
        })
        .catch(() => {
        alert("something went wrong");
        });
        }
        

function atualizaRelogio(){ 
    var momentoAtual = new Date();
            
    var vhora = momentoAtual.getHours();
    var vminuto = momentoAtual.getMinutes();
    var vsegundo = momentoAtual.getSeconds();

    var vdia = momentoAtual.getDate();
    var vmes = momentoAtual.getMonth() + 1;
    var vano = momentoAtual.getFullYear();
            
    if (vdia < 10){ vdia = "0" + vdia;}
    if (vmes < 10){ vmes = "0" + vmes;}
    if (vhora < 10){ vhora = "0" + vhora;}
    if (vminuto < 10){ vminuto = "0" + vminuto;}
    if (vsegundo < 10){ vsegundo = "0" + vsegundo;}

    dataFormat = vdia + " / " + vmes + " / " + vano;
        hourFormat = vhora + " : " + vminuto + " : " + vsegundo
            if (vhora < 11 ){	
                horaFormat = "Entrada: " + vhora + "h" + vminuto + " (Pedro) ";
            }else if (vhora < 14){
                horaFormat = "Almoço: " + vhora + "h" + vminuto + " (Pedro) "; 
            }else if(vhora < 15){
                horaFormat = "Retorno: " + vhora + "h" + vminuto + " (Pedro) "; 
            }    else if(vhora => 18){
                    horaFormat = "Saída: " + vhora + "h" + vminuto + " (Pedro) ";
            }
 
document.getElementById("data").innerHTML = dataFormat;
document.getElementById("hora").innerHTML = horaFormat;
document.getElementById("hour").innerHTML = hourFormat;


            
newDt = momentoAtual;
newDt.setMinutes(momentoAtual.getMinutes() + 10);
            
var nhora = newDt.getHours();
var nmin = newDt.getMinutes();
var nseg = newDt.getSeconds();
            
if (nhora < 10){ nhora = "0" + nhora;}
if (nmin < 10){ nmin = "0" + nmin;}
if (nseg < 10){ nseg = "0" + nseg;}
            
            
/*var txt = "Café: " + vhora + "h" + vminuto + " (Pedro) "*/
/*var txt2 = "Retorno: " + vhora + "h" + vminuto + " (Pedro) "*/
        
var txt = "Café: " + vhora + "h" + vminuto + " (Pedro) "
var txt2 = "Retorno: " + vhora + "h" + vminuto + " (Pedro) "

            
document.getElementById("cafe").innerHTML = txt
document.getElementById("retorno").innerHTML = txt2

            
setTimeout("atualizaRelogio()",1000);
}