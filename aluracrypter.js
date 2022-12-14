export const aluracrypter = {
    encoder: function (text) {
       if(text.includes("e") || text.includes("i") || text.includes("a") 
       || text.includes("o") || text.includes("u")){ 
            const textEncoded = text.replaceAll("e", "enter")
                .replaceAll("i", "imes")
                .replaceAll("a", "ai")
                .replaceAll("o", "ober")
                .replaceAll("u", "ufat");

            return textEncoded;
        } else {
            return text;
        }   
    },
    decoder: function (text) {
        if(text.includes("enter") || text.includes("imes") || text.includes("ai") 
       || text.includes("ober") || text.includes("ufat")){
            const textDecoded = text.replaceAll("enter", "e")
                .replaceAll("imes", "i")
                .replaceAll("ai", "a")
                .replaceAll("ober", "o")
                .replaceAll("ufat", "u");

            return textDecoded;  
        } else {
            return text;
        }  
    },

};

// const myText = "Ele é um menino muito bonito"
// const myTextEncoded = "Elenter é ufatm menternimesnober mufatimestober bobernimestober";

// console.log(aluracrypter.encoder(myText));
// console.log(aluracrypter.decoder(myTextEncoded));
