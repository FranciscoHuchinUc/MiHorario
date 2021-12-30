function mostrarSaludo(){
    var texto = "";
    var ahora=new Date(); 
    var hora=ahora.getHours();
    if(hora>=1 && hora<12){
        texto="Buenos Días";  
    }
    if(hora>=12 && hora<21){ 
        texto="Buenas Tardes";
    }
    if (hora>=20 || hora<0){ 
        texto="Buenas Noches";
    }
   document.getElementById('greeting').innerHTML = texto;
} 
mostrarSaludo();