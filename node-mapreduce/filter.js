const ogrenciler=[
    {
        isim: "mert", not:96
    },
    {
        isim: "ayse", not:100
    },
    {
        isim: "ali", not:65
    },
    {
        isim: "zeynep", not:84
    },
    {
        isim:"hakan", not:72
    },
    {
        isim:"deniz", not:87
    }
]

const buyukHarfList= ogrenciler.map(function(ogrenci){
    return{
        isim: ogrenci.isim.charAt(0).toUpperCase()+ ogrenci.isim.slice(1),
        not: ogrenci.not
    }
});
console.log(buyukHarfList);


// const yuksekNot = ogrenciler.filter(function({isim,not}){
//     return not >= 90;
// });
// console.log(yuksekNot);

// const yetmisUstu = ogrenciler.filter(function({not}){
//     return not >70;
// });

// const yetmisUstuNotlar = yetmisUstu.map(function({isim,not}){
//     return not;
// });
// const notToplam = yetmisUstuNotlar.reduce(function(toplam,not){
//     return toplam + not;
// },0);

// const ortalama = notToplam / yetmisUstuNotlar.length;


// console.log(ortalama);


// const sayilar =[1,2,3,4,5];

// const ciftler = sayilar.filter(function(sayi){
//     return sayi%2 === 0;
// });
// console.log(ciftler);

