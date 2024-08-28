const textarea = document.querySelector(".textarea");
const mensaje = document.querySelector(".textarea-input-encriptado");
const mensajePorDefecto = document.querySelector("#h1");
const copiar = document.querySelector("#copiar")
console.log(mensajePorDefecto)

function btnEncriptar() {
    const textoEncriptado = encriptar(textarea.value);
    mensaje.value = textoEncriptado;
    mensajePorDefecto.style.display = "none";
    copiar.style.display = "block"

}


function btnDesencriptar() {
    const textoDesencriptado = desencriptar(textarea.value);
    mensaje.value = textoDesencriptado;


}

function copiarTexto() {
    mensaje.select();
    document.execCommand("copy");
}


function encriptar(stringEncriptado) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptado = stringEncriptado.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringEncriptado.includes(matrizCodigo[i][0])) {
            stringEncriptado = stringEncriptado.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }

    return stringEncriptado;
}


function desencriptar(stringDesencriptado) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDesencriptado = stringDesencriptado.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringDesencriptado.includes(matrizCodigo[i][1])) {
            stringDesencriptado = stringDesencriptado.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }

    return stringDesencriptado;
}
