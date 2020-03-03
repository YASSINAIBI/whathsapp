// function affichage1(){
//     var text = document.getElementById('text').value;
//     document.getElementById('text1').innerHTML += '<span style="float: left">' + text + '</span>' + '<br>';
// }

// function affichage2(){
//     var text2 = document.getElementById('text').value;
//     document.getElementById('text1').innerHTML += '<span style="float: right">' + text2 + '</span>' + '<br>';
// }

function affichage1(){
    var text = document.getElementById('text').value;
    document.getElementById('text1').innerHTML += '<span class = "floatL">' + text + '</span>' + '<br>';
}

function affichage2(){
    var text2 = document.getElementById('text').value;
    document.getElementById('text1').innerHTML += '<span class = "floatR">' + text2 + '</span>' + '<br>';
}
