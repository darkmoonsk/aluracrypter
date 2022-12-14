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
            .replaceAll("e", "enter")
            .replaceAll("i", "imes")
            .replaceAll("a", "ai")
            .replaceAll("o", "ober")
            .replaceAll("u", "ufat");

        return textEncoded;
    },
    decoder: function (text) {
        const textDecoded = text
            .replaceAll("enter", "e")
            .replaceAll("imes", "i")
            .replaceAll("ai", "a")
            .replaceAll("ober", "o")
            .replaceAll("ufat", "u");

        return textDecoded;
    },
};

buttonEncode.onclick = () => {
    console.log(text.value);
    const encodedText = aluracrypter.encoder(text.value);
    output.value = encodedText;
    textNotFound.classList.add("alert-hidden");
    outputContainer.classList.remove("alert-hidden");

};

buttonDecode.onclick = () => {
    console.log(text.value);
    const decodedText = aluracrypter.decoder(text.value);
    output.value = decodedText;
    textNotFound.classList.add("alert-hidden");
    output.classList.remove("alert-hidden");

};

buttonCopy.onclick = () => {
    const textCopied = document.querySelector(".output").value;
    navigator.clipboard.writeText(textCopied);
};
