var hayvanlar = ["köpek", "tavuk", "kedi","köpek","tavuk","tavuk", "tavşan"];
var hayvanSayisi= hayvanlar.reduce(function(hayvanSayaci,hayvan){
    if(!hayvanSayaci[hayvan]){
        hayvanSayaci[hayvan]=1;
    }else{
        hayvanSayaci[hayvan] ++;
    }
    return hayvanSayaci;
},{})
console.log(hayvanSayisi);



// const sayilar =[1,2,3,4,5];

// var toplam =sayilar.reduce(function(sonuc,sayi){
//     return sonuc + sayi;
// }, 0);
// console.log(toplam);






// var toplam =0;
// for (var i = 0; i<sayilar.length; i++){
//     toplam += sayilar[i];
// }
// console.log(toplam);
