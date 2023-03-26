//Getting IDs entered through keyboard
const inputName = document.getElementById("name");
const inputLastName = document.getElementById("lastname");
const inputMatricula = document.getElementById("matricula");
const inputMateria = document.getElementById("materia");
const inputNota = document.getElementById("nota");

//Regular Expressions
let RegExpFirstName = /^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ]+(?:['\s][a-zA-ZáéíóúÁÉÍÓÚüÜñÑ]+)*$/;
let RegExpLastName = /^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ]+(?:['\s][a-zA-ZáéíóúÁÉÍÓÚüÜñÑ]+)*$/;
let RegExpMatricula = /^[0-9-]+$/;
let RegExpMateria = /^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ0-9]+(?:['\s][a-zA-ZáéíóúÁÉÍÓÚüÜñÑ0-9]+)*$/;
let RegExpNota = /^(?:100(?:\.0{1,2})?|\d{1,2}(?:\.\d{1,2})?)$/;






function CreateCurriculum() {

  if (Validate()) {
    const valueName = inputName.value;
    const valueLastName = inputLastName.value;
    const valueMatricula = inputMatricula.value;
    const valueMateria = inputMateria.value;
    const valueNota = inputNota.value;
    
    
    //Creation of information container
    const mainContainer = document.getElementById("contact-container");

    const tbody = document.getElementById("tbody");
    

    const tr = document.createElement("tr");
    tr.setAttribute("class", "bg-dark text-light");

    const tdNombre = document.createElement("td");

    const tdApellido = document.createElement("td");

    const tdMatricula = document.createElement("td");

    const tdMateria = document.createElement("td");

    const tdNota = document.createElement("td");

    

    
    

    const vaNombre = document.createElement("h6");
    vaNombre.setAttribute("class", "mb-2 mt-2");
    vaNombre.innerText = valueName;

    const vaLastName = document.createElement("h6");
    vaLastName.setAttribute("class", "mb-2 mt-2");
    vaLastName.innerText = valueLastName;

    const vaMatricula = document.createElement("h6");
    vaMatricula.setAttribute("class", "mb-2 mt-2");
    vaMatricula.innerText = valueMatricula;

    const vaMateria = document.createElement("h6");
    vaMateria.setAttribute("class", "mb-2 mt-2");
    vaMateria.innerText = valueMateria;

    const vaNota = document.createElement("h6");
    vaNota.setAttribute("class", "mb-2 mt-2");
    vaNota.innerText = valueNota;

    const btnDelete = document.createElement("button");
    btnDelete.setAttribute("class", "btn bg-danger btn-danger");
    btnDelete.innerText = "Eliminar";
    btnDelete.addEventListener("click", function () {
      if (confirm("¿Estás seguro que deseas eliminar este registro?")) {
        tbody.removeChild(tr);
        toastr.success("El registro ha sido eliminado correctamente.", {timeOut: 2000});
      }
    })


    

    
    //Adding parent and child relationships with DOM
    
    tbody.appendChild(tr);
    tr.appendChild(tdNombre);
    tr.appendChild(tdApellido);
    tr.appendChild(tdMatricula);
    tr.appendChild(tdMateria);
    tr.appendChild(tdNota);
    tr.appendChild(btnDelete);
    tdNombre.appendChild(vaNombre);
    tdApellido.appendChild(vaLastName);
    tdMatricula.appendChild(vaMatricula);
    tdMateria.appendChild(vaMateria);
    tdNota.appendChild(vaNota);
    
    

    toastr.success("La información ha sido guardada e impresa correctamente.", "¡Felicitaciones!", {timeOut: 3000});



  } else {
    alert("Debe completar toda la info.");
  }


}
  


function Clear() {
  inputName.value = "";
  inputName.classList.remove("input-error");
  inputName.classList.remove("input-success");

  inputLastName.value = "";
  inputLastName.classList.remove("input-error");
  inputLastName.classList.remove("input-success");

  inputMatricula.value = "";
  inputMatricula.classList.remove("input-error");
  inputMatricula.classList.remove("input-success");
  
  inputMateria.value = "";
  inputMateria.classList.remove("input-error");
  inputMateria.classList.remove("input-success");

  inputNota.value = "";
  inputNota.classList.remove("input-error");
  inputNota.classList.remove("input-success");

  toastr.warning("Se han limpiado los campos", {timeOut: 2000});
  
  
}

function Validate() {
  let isValid = true;

  const valueName = inputName.value;
  const valueLastName = inputLastName.value;
  const valueMatricula = inputMatricula.value;
  const valueMateria = inputMateria.value;
  const valueNota = inputNota.value;
  
  //Regular Expressions validation
  let firstnameOK = RegExpFirstName.test(valueName);
  let lastnameOK = RegExpLastName.test(valueLastName);
  let matriculaOK = RegExpMatricula.test(valueMatricula);
  let materiaOK = RegExpMateria.test(valueMateria);
  let notaOK = RegExpNota.test(valueNota);

  

  if (valueName == "" || valueName == null || valueName == undefined || firstnameOK === false) {
    isValid = false;
    toastr.error("No se aceptan caracteres especiales.", "!!!NOMBRE VACÍO O INVÁLIDO!!!", {timeOut: 4000});
    inputName.classList.remove("input-success");
    inputName.classList.add("input-error");

  } else{
    inputName.classList.remove("input-error");
    inputName.classList.add("input-success");
  }


  if (valueLastName == "" || valueLastName == null || valueLastName == undefined || lastnameOK === false){
    isValid = false;
    toastr.error("No se aceptan caracteres especiales.", "!!!APELLIDO VACÍO O INVÁLIDO!!!", {timeOut: 4000});
    inputLastName.classList.add("input-error");
    inputLastName.classList.remove("input-success");

  } else{
    inputLastName.classList.remove("input-error");
    inputLastName.classList.add("input-success");
  }


  if (valueMatricula == "" || valueMatricula == null || valueMatricula == undefined || matriculaOK === false) {
    isValid = false;
    toastr.error("Formato requerido: ####-####", "!!!MATRÍCULA VACÍA O INVÁLIDA!!!", {timeOut: 4000});
    inputMatricula.classList.add("input-error");
    inputMatricula.classList.remove("input-success");

  } else{
    inputMatricula.classList.remove("input-error");
    inputMatricula.classList.add("input-success");
  }



  if (valueMateria == "" || valueMateria == null || valueMateria == undefined || materiaOK === false) {
    isValid = false;
    toastr.error("No se aceptan caracteres especiales.", "!!!MATERIA VACÍA O INVÁLIDA!!!", {timeOut: 4000});
    inputMateria.classList.add("input-error");
    inputMateria.classList.remove("input-success");
    
  } else{
    inputMateria.classList.remove("input-error");
    inputMateria.classList.add("input-success");
  }
  

  if (valueNota == "" || valueNota == null || valueNota == undefined || notaOK === false) {
    isValid = false;
    toastr.error("Valores del 0 al 100", "!!!NOTA VACÍA O INVÁLIDA!!!", {timeOut: 4000});
    inputNota.classList.add("input-error");
    inputNota.classList.remove("input-success");
    
  } else{
    inputNota.classList.remove("input-error");
    inputNota.classList.add("input-success");
  }

  

  return isValid;
}

function Info(){
  toastr.info("Author: Amín Jesús Báez Espinosa", {timeOut: 8000});
}