
const ogrenciler=[
    {
        isim: "mert", not:70
    },
    {
        isim: "ayse", not:80
    },
    {
        isim: "ali", not:90
    },
    {
        isim: "zeynep", not:100
    },
    {
        isim:"hakan", not:88
    },
    {
        isim:"deniz", not:96
    }
]
const kullanicilar =[
    {
        kullanici_adi: "back-end"
    },
    {
        kullanici_adi: "tester"
    }
]
var not= process.env.NOT;
var ogr= process.env.OGR;
var user= process.env.USER;

var user_check = false;
kullanicilar.map(function(kullanici){
    if(kullanici.kullanici_adi == user){
        user_check= true;
    }
});
if(user_check==true){
    try{
    console.log("OGRENCI LISTESI")
    console.log("--------")
    ogrenciler.map(function(ogrenci,index){
        console.log((index+1)+"ısim:"+ogrenci.isim+"/Not"+ogrenci.not);
    });
    console.log("------------------")
    console.log(not + "Puanın üstündekiler")
    console.log("---------------")
   var filtreliList =  ogrenciler.filter(function(ogrenci){
        return ogrenci.not >= not;
    });
   filtreliList.map(function(ogrenci,index){
        console.log((index+1)+"ısim:"+ogrenci.isim+"/Not"+ogrenci.not);
    });
    console.log("----------------------");
    console.log("Tüm Öğrencilerin Ortalaması");
    console.log("--------------");
    var ortalama =ogrenciler.reduce(function(orta_top, ogrenci){
        return orta_top+(ogrenci.not/ogrenciler.length);
    },0);
    console.log("Tüm öğrencilerin ortalaması:"+ ortalama.toFixed(2));

    console.log("----------------------");
    console.log("Secilen"+ ogr +"isimli ogrencinin bilgileri:");
    console.log("----------------------");
    var secilmis = ogrenciler.filter(function(ogrenci){
        return ogrenci.isim == ogr;
    });
    console.log("İsim:" + secilmis[0].isim);
    console.log("Not:"+ secilmis[0].not);

}catch{
    console.error("Bilinmeyen bir hata oluştu");
}

}else{
    console.error("Bu kullanıcı adıyla işlem yapamazsınız")
}




//$env:USER=back-end; $env:NOT=83; node .\example.js