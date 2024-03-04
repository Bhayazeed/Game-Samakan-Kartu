let jumlahKartu = 6;
let kartuPertama = kartuKedua = 0;
let score = 0;
function buatAngka(){
    let angkaBerurut = [];

    for(var i = 1; i <= jumlahKartu; i++){  
        angkaBerurut.push(i, i);
    }

    return angkaBerurut
}

function acakAngka(angkaBerurut){
    let angkaAcak = angkaBerurut.sort(function(){
        return 0.5 - Math.random();
    });

    return angkaAcak;
}

function persiapkanKartu(angkaAcak) {
    let str = '';

    angkaAcak.forEach(function (i) {
        str += '<div class="card" nilai="' + i + '">' +
            '<div class="belakang">' + i + '</div>' +
            '<div class="depan">Zboxs</div>' +
            '</div>';
    });

    $('#game').append(str);
}

function kendali(){
    $('.card').on('click', function(){
        $(this).addClass('buka');

        if(kartuPertama === 0){
            kartuPertama = $(this).attr('nilai');
        }else{
            kartuKedua = $(this).attr('nilai');

            if(kartuPertama === kartuKedua){
                $('.buka').addClass('benar');
                $('.benar').removeClass('buka');
                kartuPertama = kartuKedua = 0;
                score+=100;
                updateScore();
            }else{
                kartuPertama = kartuKedua = 0;
                $(this).one('transitionend',function(){
                    $('.card').removeClass('buka');
                });
            };
        };
    });
}

function updateScore() {
    $('#scoreValue').text(score); // Update the score display
}


$(document).ready(function(){   
    let angkaBerurut = buatAngka();

    let angkaAcak = acakAngka(angkaBerurut);

    persiapkanKartu(angkaAcak);

    kendali();
    
    console.log('ini adalah angka berurut :'+angkaBerurut);
    console.log('ini adalah angka acak :'+angkaAcak);
});