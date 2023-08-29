export const notas= (nota1,nota2,nota3)=>{

let resultado = (nota1+nota2+nota3) / 3 ;
//se hace el filtro de la condicion 
if (resultado <= 3.9){
   return "Estudie";
}else{

return "Becado";
}
}