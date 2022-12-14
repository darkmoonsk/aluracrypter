const aluracrypter = {
    encoder: function (text) {
        
        const textEncoded = text.replaceAll("e", "enter")
            .replaceAll("i", "imes")
            .replaceAll("a", "ai")
            .replaceAll("o", "ober")
            .replaceAll("u", "ufat");

        return textEncoded;   
    },
    decoder: function (text) {
        
        const textDecoded = text.replaceAll("enter", "e")
            .replaceAll("imes", "i")
            .replaceAll("ai", "a")
            .replaceAll("ober", "o")
            .replaceAll("ufat", "u");

        return textDecoded;   
    },
};

// const myText = "Ele é um menino muito bonito"
// const myTextEncoded = "Elenter é ufatm menternimesnober mufatimestober bobernimestober";

// console.log(aluracrypter.encoder(myText));
// console.log(aluracrypter.decoder(myTextEncoded));

export default aluracrypter;