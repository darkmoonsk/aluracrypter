const text = document.querySelector(".text");
const textOutput = document.querySelector(".text-output");
const output = document.querySelector(".output");
const outputContainer = document.querySelector(".output-container");
const textNotFound = document.querySelector(".text-not-found");
const buttonEncode = document.querySelector(".btn-encode");
const buttonDecode = document.querySelector(".btn-decode");
const buttonCopy = document.querySelector(".btn-copy");


const aluracrypter = {
    encoder: function (text) {
        const textEncoded = text
            .replace(/e/g, "enter")
            .replace(/i/g, "imes")
            .replace(/a/g, "ai")
            .replace(/o/g, "ober")
            .replace(/u/g, "ufat");

        return textEncoded;
    },
    decoder: function (text) {
        const textDecoded = text
            .replace(/enter/g, "e")
            .replace(/imes/g, "i")
            .replace(/ai/g, "a")
            .replace(/ober/g, "o")
            .replace(/ufat/g, "u");
        return textDecoded;
    },
};

buttonEncode.onclick = () => {
    const encodedText = aluracrypter.encoder(text.value);
    if(!encodedText){
        return;
    }
    output.value = encodedText;
    textNotFound.classList.add("alert-hidden");
    outputContainer.classList.remove("alert-hidden");
    text.value = "";
};

buttonDecode.onclick = () => {
    const decodedText = aluracrypter.decoder(text.value);
    if(!decodedText){
        return;
    }
    output.value = decodedText;
    textNotFound.classList.add("alert-hidden");
    output.classList.remove("alert-hidden");
    text.value = "";

};

buttonCopy.onclick = () => {
    const textCopied = document.querySelector(".output").value;
    navigator.clipboard.writeText(textCopied);
};

    