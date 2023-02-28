//Obteniendo ID de los datos introducidos por teclado
const inputName = document.getElementById("name");
const inputLastName = document.getElementById("lastname");
const inputMatricula = document.getElementById("matricula");
const inputPhone = document.getElementById("phone");
const inputEmail = document.getElementById("email");

//Expresiones Regulares
let RegExpFirstName = /[^0-9\.\,\"\?\!\;\:\#\$\%\&\(\)\*\+\-\/\<\>\=\@\[\]\\\^\_\{\}\|\~]+/;
let RegExpLastName = /[^0-9\.\,\"\?\!\;\:\#\$\%\&\(\)\*\+\-\/\<\>\=\@\[\]\\\^\_\{\}\|\~]+/;
let RegExpMatricula = /^\d{8}$/;
let RegExpPhone = /(?:^\([0]?[1-9]{2}\)|^[0]?[1-9]{2}[\.-\s]?)[9]?[1-9]\d{3}[\.-\s]?\d{4}$/;
let RegExpEmail = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;






function CreateCurriculum() {

  if (Validate()) {
    const valueName = inputName.value;
    const valueLastName = inputLastName.value;
    const valueMatricula = inputMatricula.value;
    const valuePhone = inputPhone.value;
    const valueEmail = inputEmail.value;
    
    
    //Creación contenedor de información
    const mainContainer = document.getElementById("contact-container");

    
    const divCol = document.createElement("div");
    divCol.setAttribute("class", "col-4 mt-2 mb-2");

    const divCard1 = document.createElement("div");
    divCard1.setAttribute("class", "card mt-2 mb-2 bg-dark");

    const divCard2 = document.createElement("div");
    divCard2.setAttribute("class", "card-header bg-primary text-white");


    const h5 = document.createElement("h5");
    h5.setAttribute("class", "text-center fw-bold");
    h5.innerText = "Registro de Estudiante-" + valueName;


    const divCardBody = document.createElement("div");
    divCardBody.setAttribute("class", "card-body text-white");

    const ul = document.createElement("ul");
    ul.setAttribute("class", "list-group list-group-flush");

    const liNombre = document.createElement("h5");
    liNombre.setAttribute("class", "mb-4 fw-bold");
    liNombre.innerText = "Nombres:";

    const vaNombre = document.createElement("h6");
    vaNombre.setAttribute("class", "mb-4");
    vaNombre.innerText = valueName;

    const liApellidos = document.createElement("h5");
    liApellidos.setAttribute("class", "mb-4 fw-bold");
    liApellidos.innerText = "Apellidos:";

    const vaLastName = document.createElement("h6");
    vaLastName.setAttribute("class", "mb-4");
    vaLastName.innerText = valueLastName;

    const liMatricula = document.createElement("h5");
    liMatricula.setAttribute("class", "mb-4 fw-bold");
    liMatricula.innerText = "Matrícula:";

    const vaMatricula = document.createElement("h6");
    vaMatricula.setAttribute("class", "mb-4");
    vaMatricula.innerText = valueMatricula;

    const liTelefono = document.createElement("h5");
    liTelefono.setAttribute("class", "mb-4 fw-bold");
    liTelefono.innerText = "Telefono:";

    const vaPhone = document.createElement("h6");
    vaPhone.setAttribute("class", "mb-4");
    vaPhone.innerText = valuePhone;

    const liCorreo = document.createElement("h5");
    liCorreo.setAttribute("class", "mb-4 fw-bold");
    liCorreo.innerText = "Correo:";

    const vaEmail = document.createElement("h6");
    vaEmail.setAttribute("class", "mb-4");
    vaEmail.innerText = valueEmail;



    const btnDelete = document.createElement("button");
    btnDelete.setAttribute("class", "btn btn-danger float-end");
    btnDelete.innerText = "Eliminar";
    btnDelete.addEventListener("click", function () {
      if (confirm("¿Estás seguro que deseas eliminar este registro?")) {
        mainContainer.removeChild(divCol);
        toastr.success("El registro ha sido eliminado correctamente.", {timeOut: 2000});
      }
    })

    
    //Añadiendo relaciones padre e hijo mediante el DOM
    divCol.appendChild(divCard1);
    divCard1.appendChild(divCard2);
    divCard2.appendChild(h5);
    divCard1.appendChild(divCardBody);
    divCardBody.appendChild(ul);
    divCardBody.appendChild(btnDelete);
    ul.appendChild(liNombre);
    ul.appendChild(vaNombre);
    ul.appendChild(liApellidos);
    ul.appendChild(vaLastName);
    ul.appendChild(liCorreo);
    ul.appendChild(vaEmail);
    ul.appendChild(liTelefono);
    ul.appendChild(vaPhone);
    ul.appendChild(liMatricula);
    ul.appendChild(vaMatricula);

    

    mainContainer.appendChild(divCol);

    Clear();

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
  
  inputPhone.value = "";
  inputPhone.classList.remove("input-error");
  inputPhone.classList.remove("input-success");

  inputEmail.value = "";
  inputEmail.classList.remove("input-error");
  inputEmail.classList.remove("input-success");

  toastr.warning("Se han limpiado los campos", {timeOut: 2000});
  
  
}

function Validate() {
  let isValid = true;

  const valueName = inputName.value;
  const valueLastName = inputLastName.value;
  const valueMatricula = inputMatricula.value;
  const valuePhone = inputPhone.value;
  const valueEmail = inputEmail.value;
  
  //Validación de Expresiones Regulares
  let firstnameOK = RegExpFirstName.test(valueName);
  let lastnameOK = RegExpLastName.test(valueLastName);
  let matriculaOK = RegExpMatricula.test(valueMatricula);
  let phoneOK = RegExpPhone.test(valuePhone);
  let emailOK = RegExpEmail.test(valueEmail);

  

  if (valueName == "" || valueName == null || valueName == undefined || firstnameOK === false) {
    isValid = false;
    //alert("!!!NOMBRE VACÍO O INVÁLIDO!!!(No se aceptan caracteres especiales)");
    toastr.error("No se aceptan caracteres especiales.", "!!!NOMBRE VACÍO O INVÁLIDO!!!", {timeOut: 4000});
    inputName.classList.remove("input-success");
    inputName.classList.add("input-error");

  } else{
    inputName.classList.remove("input-error");
    inputName.classList.add("input-success");
  }


  if (valueLastName == "" || valueLastName == null || valueLastName == undefined || lastnameOK === false){
    isValid = false;
    //alert("!!!APELLIDO VACÍO O INVÁLIDO!!!(No se aceptan caracteres especiales)");
    toastr.error("No se aceptan caracteres especiales.", "!!!APELLIDO VACÍO O INVÁLIDO!!!", {timeOut: 4000});
    inputLastName.classList.add("input-error");
    inputLastName.classList.remove("input-success");

  } else{
    inputLastName.classList.remove("input-error");
    inputLastName.classList.add("input-success");
  }


  if (valueMatricula == "" || valueMatricula == null || valueMatricula == undefined || matriculaOK === false) {
    isValid = false;
    //alert("!!!MATRÍCULA VACÍA O INVÁLIDA!!!Formato requerido: ####-####");
    toastr.error("Formato requerido: ####-####", "!!!MATRÍCULA VACÍA O INVÁLIDA!!!", {timeOut: 4000});
    inputMatricula.classList.add("input-error");
    inputMatricula.classList.remove("input-success");

  } else{
    inputMatricula.classList.remove("input-error");
    inputMatricula.classList.add("input-success");
  }



  if (valuePhone == "" || valuePhone == null || valuePhone == undefined || phoneOK === false) {
    isValid = false;
    //alert("!!!TELÉFONO VACÍO O INVÁLIDO!!! Formato requerido:(###)-###-####");
    toastr.error("Formato requerido:(###)-###-####", "!!!TELÉFONO VACÍO O INVÁLIDO!!!", {timeOut: 4000});
    inputPhone.classList.add("input-error");
    inputPhone.classList.remove("input-success");
    
  } else{
    inputPhone.classList.remove("input-error");
    inputPhone.classList.add("input-success");
  }
  

  if (valueEmail == "" || valueEmail == null || valueEmail == undefined || emailOK === false) {
    isValid = false;
    //alert("!!!CORREO VACÍO O INVÁLIDO!!! Formato requerido: #@gmail.com");
    toastr.error("Formato requerido: #@gmail.com", "!!!CORREO VACÍO O INVÁLIDO!!!", {timeOut: 4000});
    inputEmail.classList.add("input-error");
    inputEmail.classList.remove("input-success");
    
  } else{
    inputEmail.classList.remove("input-error");
    inputEmail.classList.add("input-success");
  }

  

  return isValid;
}

function Info(){
  toastr.info("Estudiante: Amín Jesús Báez Espinosa Asignatura: Programación Web Maestro: Luis Soto Alias: EL MEJOR", {timeOut: 8000});
}