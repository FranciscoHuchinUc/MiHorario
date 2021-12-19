function mostrarSaludo(){
    var texto = "";
    var ahora=new Date(); 
    var hora=ahora.getHours();
    if(hora>=6 && hora<12){
        texto="Buenos Días";  
    }
    if(hora>=12 && hora<21){ 
        texto="Buenas Tardes";
    }
    if (hora>=21 || hora<6){ 
        texto="Buenas Noches";
    }
   document.getElementById('greeting').innerHTML = texto;
} 
mostrarSaludo();