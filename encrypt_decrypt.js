function getText(){
    let textToEncrypt = document.getElementById('message-encrypt');
    displayEncryptedMessage(textToEncrypt);     
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

function displayEncryptedMessage(textToEncrypt){    
    document.getElementById("image-searching").style.visibility = "hidden";
    document.getElementById("empty-message").style.visibility = "hidden";
    document.getElementById("info-message").style.visibility = "hidden";
    document.getElementById('message-encrypted').innerText = encryptMessage(textToEncrypt.value);
}


function displayDecryptedMessage(){
    let textToDecrypt = document.getElementById("message-encrypt");
    document.getElementById("image-searching").style.visibility = "visible";
    document.getElementById("empty-message").style.visibility = "visible";
    document.getElementById("info-message").style.visibility = "visible";
    document.getElementById('message-encrypted').innerText = decryptMessage(textToDecrypt.value);
}

function decryptMessage(encryptedText) {
    // Replace each encoded string back to its corresponding vowel
    let decryptedText = encryptedText
        .replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ai/g, 'a')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u');
    return decryptedText;
}