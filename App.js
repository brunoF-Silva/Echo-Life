function Hello() {
    document.write("Olá você ai de casa!");
}
setInterval(Live, 3000);
function Live(cont) {
        if(cont==1){
            return [
                (document.getElementById('section').innerHtml = document.getElementById("curtain-1").style.animation = "t-enclosure 1.5s"), (document.getElementById("curtain-2").style.animation = "b-enclosure 1.5s "),
            ];
        }else if(cont==2){
            return [
                (document.getElementById("curtain-3").style.animation = "t-enclosure 1.5s"), (document.getElementById("curtain-4").style.animation = "b-enclosure 1.5s "),
            ];
        }
        // }else if(cont==2){
        //     cont =4;
        //     return [
        //         (document.getElementById("curtain-5").style.animation = "t-enclosure 1.5s"), (document.getElementById("curtain-6").style.animation = "b-enclosure 1.5s "),
        //     ];
        // }else if(cont==4){
        //     cont =5;
        //     return [
        //         (document.getElementById("curtain-1").style.animation = "t-enclosure 1.5s"), (document.getElementById("curtain-2").style.animation = "b-enclosure 1.5s "),
        //     ];
        // }else if(cont==2){
        //     cont =3;
        //     return [
        //         (document.getElementById("curtain-1").style.animation = "t-enclosure 1.5s"), (document.getElementById("curtain-2").style.animation = "b-enclosure 1.5s "),
        //     ];
        // }else if(cont==2){
        //     cont =3;
        //     return [
        //         (document.getElementById("curtain-1").style.animation = "t-enclosure 1.5s"), (document.getElementById("curtain-2").style.animation = "b-enclosure 1.5s "),
        //     ];
        // }else if(cont==2){
        //     cont =3;
        //     return [
        //         (document.getElementById("curtain-1").style.animation = "t-enclosure 1.5s"), (document.getElementById("curtain-2").style.animation = "b-enclosure 1.5s "),
        //     ];
        // }else if(cont==2){
        //     cont =3;
        //     return [
        //         (document.getElementById("curtain-1").style.animation = "t-enclosure 1.5s"), (document.getElementById("curtain-2").style.animation = "b-enclosure 1.5s "),
        //     ];
        // }else if(cont==2){
        //     cont =3;
        //     return [
        //         (document.getElementById("curtain-1").style.animation = "t-enclosure 1.5s"), (document.getElementById("curtain-2").style.animation = "b-enclosure 1.5s "),
        //     ];
        // }
    
}
function Roda() {
    return document.getElementById("cube").style.animation ="spin2 1s linear infinite";
    
}


