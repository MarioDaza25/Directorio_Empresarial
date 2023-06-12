let cont = 0;
const miBoton = document.getElementById('Agregar');


miBoton.addEventListener('click',function agregar(e) {
    e.preventDefault();

    //Accedo A cada Elemento "DOM"
    const tabla = document.getElementById('tabla');
    const nombre = document.getElementById('nombre').value;
    const correo = document.getElementById('correo').value;
    const telefono = document.getElementById('telefono').value;
        
    if ((nombre === '') || (correo === '') || (telefono === '')) {
        alert('Campos Vacios');

    }else{    
        cont++

        //Creo la fila y sus columnas
        let fila = document.createElement('tr');
        let num = document.createElement('td');
        let colnombre = document.createElement('td');
        let colcorreo = document.createElement('td');
        let coltel = document.createElement('td');
        let boton = document.createElement('td');
        let botonEliminar = document.createElement('button');

        //Asigno atributos a los ELementos
        fila.setAttribute('id', cont)
        botonEliminar.setAttribute('id', cont)
        botonEliminar.setAttribute('class', 'boton_eliminar')
        
        //Asigno Contenido de cada Columna
        num.textContent = cont
        colnombre.textContent = nombre
        colcorreo.textContent = correo
        coltel.textContent = telefono
        botonEliminar.textContent = 'Eliminar';

        //Agrego cada Columna a la Fila(Padre)
        fila.appendChild(num)
        fila.appendChild(colnombre)
        fila.appendChild(colcorreo)
        fila.appendChild(coltel)
        boton.appendChild(botonEliminar);
        fila.appendChild(boton);
    
        //Agreo la fila a la Tabla(Padre)
        tabla.appendChild(fila) 

        //Evento Eliminar
        botonEliminar.onclick = () => eliminarEmpleados();


        document.getElementById('nombre').value = '';
        document.getElementById('correo').value = '';
        document.getElementById('telefono').value = '';
    }
})

function eliminarEmpleados() {
    let boton = event.target; 
    let fila = boton.parentNode.parentNode; 
    fila.remove(); 
}

