
alert("Hola soy tu agente de censo, hoy voy a tomar unos pequeños datos");

let i=0;
let Pasar="";
let Nombre=0;
let cont=0;

while(i==0){  
            Pasar = prompt("si esta de acuerdo escriba si \n sino estas deacuerdo escriba no"); 

            if((Pasar=="si") || (Pasar=="Si") || (Pasar=="SI") || (Pasar=="yes")){
                i=1;    
              }else{
                   alert("hasta que no ponga que si no se va a poder ir :)")
                   cont++;
                    };
          };
  if(i!=0){
          alert("veo que decidio seguir con el censo, muchas gracias :)");
            i=0;
          }
    while(i==0){
                  Nombre=prompt("escriba su nombre y apellido por favor")
                  if(Nombre!=0){
                    i++;
                  }else{
                        cont++;
                      }
                };

document.write("usted tuvo "+cont+ " error/es");
