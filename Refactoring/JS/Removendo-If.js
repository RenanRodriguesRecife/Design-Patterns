/*Qualquer if/else que tem true ou false
 você já pode eliminar pq toda condicional 
 retorna true ou false*/

 function eDeMaior(idade){
     if(idade >= 18){
         return true;
     }else{
         return false;
     }
 }

 // USE:

 function eDeMaior(idade, sexo){
     return (idade >= 18 && sexo == 'M')
 }

 