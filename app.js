///APLICATIVO///

function calcularXP() {
    let xp = parseInt(Math.random() * 10000);
    let heroi = document.getElementById('heroi').value;

    if (xp <= 1000) {
        console.log("O heroi " + heroi + " está atualmente nível Ferro com " + xp + "pontos.");
        document.getElementById('resultado').innerHTML = "O heroi " + heroi + " está atualmente nível Ferro com " + xp + " pontos.";
    }
    else if (xp >= 1001 && xp <= 2000){
        console.log("O heroi " + heroi + " está atualmente nível Bronze com " + xp + "pontos.");
        document.getElementById('resultado').innerHTML = "O heroi " + heroi + " está atualmente nível Bronze com " + xp + " pontos.";
    }
    else if (xp >= 2001 && xp <= 5000){
        console.log("O heroi " + heroi + " está atualmente nível Prata com " + xp + "pontos.");
        document.getElementById('resultado').innerHTML = "O heroi " + heroi + " está atualmente nível Prata com " + xp + " pontos.";
    }
    else if (xp >= 5001 && xp <= 7000){
        console.log("O heroi " + heroi + " está atualmente nível Ouro.");
        document.getElementById('resultado').innerHTML = "O heroi " + heroi + " está atualmente nível Ouro com " + xp + " pontos.";
    }
    else if (xp >= 7001 && xp <= 8000){
        console.log("O heroi " + heroi + " está atualmente nível Platina.");
        document.getElementById('resultado').innerHTML = "O heroi " + heroi + " está atualmente nível Platina com " + xp + " pontos.";
    }
    else if (xp >= 8001 && xp <= 9000){
        console.log("O heroi " + heroi + " está atualmente nível Ascendente.");
        document.getElementById('resultado').innerHTML = "O heroi " + heroi + " está atualmente nível Ascendente com " + xp + " pontos.";
    }
    else if (xp >= 9001 && xp <= 10000){
        console.log("O heroi " + heroi + " está atualmente nível Imortal.");
        document.getElementById('resultado').innerHTML = "O heroi " + heroi + " está atualmente nível Imortal com " + xp + " pontos.";
    }
    else if (xp >= 10001){
        console.log("O heroi " + heroi + " está atualmente nível Radiante.");
        document.getElementById('resultado').innerHTML = "O heroi " + heroi + " está atualmente nível Radiante com " + xp + " pontos.";
    }
    else {
        console.log("O heroi " + heroi + " está sem nível.");
        document.getElementById('resultado').innerHTML = "O heroi " + heroi + " está sem nível.";
    }
}