import { Titulo } from "./Titulo"

export const TituloAlternativo =({titulo2})=>{

if(titulo2){
    return<>
    <Titulo titulo1={'Titulo Original'}/>
    </>
}

    return<>
    <Titulo titulo1={'Titulo Alternativo'}/>
    </>
}