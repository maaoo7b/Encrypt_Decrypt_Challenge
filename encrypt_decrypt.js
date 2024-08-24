function getText(action){
    let message = document.getElementById('message-encrypt').value;
    if(action === 'encrypt'){
        document.getElementById('message-encrypt').value = ""; 
        document.getElementById("image-searching").style.visibility = "hidden";
        document.getElementById("empty-message").style.visibility = "hidden";
        document.getElementById("info-message").style.visibility = "hidden";
        document.getElementById('message-encrypted').innerHTML = encryptMessage(message);
    } else{
        document.getElementById('message-encrypted').innerHTML = decryptMessage(message);
    }   
}

function encryptMessage(text){
    let encryptedText = text
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");
    return encryptedText;
}

function decryptMessage(text){
    let decryptedText = text
    .replace(/enter/g, 'e')
    .replace(/imes/g, 'i')
    .replace(/ai/g, 'a')
    .replace(/ober/g, 'o')
    .replace(/ufat/g, 'u');
    return decryptedText;
}

function copy() {
    let copyText = document.querySelector("#message-encrypted");
    copyText.select();
    document.execCommand("copy");
  }
document.querySelector("#copy").addEventListener("click", copy);