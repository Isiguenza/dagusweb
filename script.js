function conectar (accion,url,regreso,body,type){
    var request= new XMLHttpRequest (); 
    request.open (accion,url);
    request.onload= regreso;
    request.setRequestHeader ("Content-Type", type);
    request.send (body);
}
