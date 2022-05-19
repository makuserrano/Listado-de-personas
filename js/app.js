const personas= [
    new Persona('Juan', 'Perez'),
    new Persona('Enzo', 'Fernandez')

];

function mostrarPersonas(){
    let texto = '';
    for(let persona of personas){
        console.log(persona);
        texto += `<li>${persona.nombre} ${persona.apellido} </li>`
    }
    document.getElementById('personas').innerHTML = texto;

}


function agregarPersona(){
    const forma= document.forms['forma'];
    const nombre = forma['nombre'];
    const apellidos = forma['apellido'];
    if(nombre.value != '' && apellidos.value != ''){
        const persona = new Persona(nombre.value, apellidos.value);
        console.log(persona);
        personas.push(persona);
        mostrarPersonas();
    }
    else {
        console.log('Escriba un nombre y apellido');
    }
}