function listar_empresa() {
    var comboBox = document.getElementById("empresa");

    const request_options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json' // Indicar que se envían datos JSON
        },
        body: JSON.stringify(data) // Convertir los datos a JSON
    }; 

    // Realizar una solicitud GET al servicio (supongamos que utiliza fetch)
    fetch('/empresa')
        .then(response => response.json())
        .then(data => {
            // Iterar a través de los datos del servicio y agregar opciones al combo box
            data.forEach(empresa => {
                var option = document.createElement("option");
                option.value = empresa.ruc; // El valor que se enviará al servidor
                option.text = empresa.nombre; // El texto que se mostrará al usuario
                comboBox.appendChild(option);
            });
        })
        .catch(error => {
            console.error('Error al obtener datos:', error);
        });
}
 
function cargarEnTabla() {
  var combo = document.getElementById("empresa");
  var tabla = document.getElementById("tablaEmpresas");
  var selectedOption = combo.options[combo.selectedIndex];

  if (selectedOption.value !== "0") {
    var id = selectedOption.value;
    var nombre = selectedOption.text;

    var newRow = tabla.insertRow(tabla.rows.length);
    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    //cell1.style.display = "none";

    cell1.innerHTML = id;
    cell2.innerHTML = nombre;

    combo.selectedIndex = 0; // Restablece la selección del combo
  } else {
    alert("Selecciona un registro válido del combo antes de cargarlo en la tabla.");
  }
}
 
function guardar() {

    let ruc_ = document.getElementById('ruc').value
    let cedula_ = document.getElementById('cedula').value
    let nombre_ = document.getElementById('nombre').value
    let apellido_ = document.getElementById('apellido').value
    let email_ = document.getElementById('email').value
    let domicilio_ = document.getElementById('domicilio').value
    let telefono_ = document.getElementById('telefono').value
    let tabla = document.getElementById("tablaEmpresas");
    const empresas_ = []; 

    // Recorre las filas de la tabla
    for (var i = 0; i < tabla.rows.length; i++) {
        var fila = tabla.rows[i];
        var celda = fila.cells[0];
        // Accede al contenido de la celda y muestra en la consola 
        console.log(celda.innerText);
        empresas_.push({ empresa: { _id: celda.innerText } }); 
        
    }  

    // Crea un objeto JSON con los datos necesarios de representante legal
    let data = { ruc:ruc_, 
                 cedula:cedula_, 
                 nombre:nombre_, 
                 apellido:apellido_,
                 email:email_,
                 domicilio:domicilio_,
                 telefono:telefono_,
                 empresas: empresas_}

    console.log(data);

    return new Promise((resolve, reject) => {
        const request_options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json' // Indicar que se envían datos JSON
            },
            body: JSON.stringify(data) // Convertir los datos a JSON
        };

        fetch('/representantelegal', request_options)
            .then((data) => resolve(data.json()))
            .catch((error) => reject(`[error]: ${error}`));
    })
}

function guardar_representantelegal() {
    guardar()
        .then( (response) => {
            alert('Registro exitoso.')
        } )
        .catch( (error) => {
            alert('Error al ingresar.')
        } )
}

function cancelar_producto() { 
    document.getElementById("cancelar").addEventListener("click", function() {
        history.back();
      });
}

// Función para cargar opciones en el combo
function cargarCombo() {
    var comboBox = document.getElementById("empresa");  
    // Realizar una solicitud GET al servicio (supongamos que utiliza fetch)
    fetch('/empresa')
        .then(response => response.json())
        .then(data => {
            // Iterar a través de los datos del servicio y agregar opciones al combo box
            data.body.forEach(empresa => {
                var option = document.createElement("option");
                option.value = empresa._id; // El valor que se enviará al servidor
                option.text = empresa.nombre; // El texto que se mostrará al usuario
                comboBox.appendChild(option);
            });
            console.error('Entro:', error);
        })
        .catch(error => {
          
        });
} 

 // Llama a la función para cargar el combo cuando se carga la página
 cargarCombo();

 
 
function cargarEnTablaRol() {
    var combo = document.getElementById("role");
    var tabla = document.getElementById("tablaRoles");
    var selectedOption = combo.options[combo.selectedIndex];
  
    if (selectedOption.value !== "0") {
      var id = selectedOption.value;
      var nombre = selectedOption.text;
  
      var newRow = tabla.insertRow(tabla.rows.length);
      var cell1 = newRow.insertCell(0);
      var cell2 = newRow.insertCell(1);
      //cell1.style.display = "none";
  
      cell1.innerHTML = id;
      cell2.innerHTML = nombre;
  
      combo.selectedIndex = 0; // Restablece la selección del combo
    } else {
      alert("Selecciona un registro válido del combo antes de cargarlo en la tabla.");
    }
  }


  function guardarUsuario() {

    let usuario_ = document.getElementById('usuario').value
    let email_ = document.getElementById('email').value
    let contrasenia_ = document.getElementById('contrasenia').value 
    let tablaRole = document.getElementById("tablaRoles");
    const roles_ = []; 

    // Recorre las filas de la tabla
    for (var i = 0; i < tablaRole.rows.length; i++) {
        var fila = tablaRole.rows[i];
        var celda = fila.cells[0];
        // Accede al contenido de la celda y muestra en la consola 
        console.log(celda.innerText);
        roles_.push({ roles: { _id: celda.innerText } }); 
        
    }  

    // Crea un objeto JSON con los datos necesarios de representante legal
    let data = { username:usuario_,  
                 email:email_, 
                 password:contrasenia_,
                 roles: roles_}

    console.log(data);

    return new Promise((resolve, reject) => {
        const request_options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json' // Indicar que se envían datos JSON
            },
            body: JSON.stringify(data) // Convertir los datos a JSON
        };

        fetch('/user', request_options)
            .then((data) => resolve(data.json()))
            .catch((error) => reject(`[error]: ${error}`));
    })
} 

function guardar_usuario() {
    guardarUsuario()
        .then( (response) => {
            alert('Registro exitoso.')
        } )
        .catch( (error) => {
            alert('Error al ingresar.')
        } )
}