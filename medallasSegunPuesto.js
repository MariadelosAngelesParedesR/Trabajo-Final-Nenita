function medallaSegunPuesto(lugar)
{  
    if(lugar === 1){    
        return("oro") 
 } else if(lugar === 2) {  
      return("plata") 
 } else if(lugar === 3) {  
      return("bronce")  
} else {
        return("Seguir Intentando")  }
}

console.log(medallaSegunPuesto (9))