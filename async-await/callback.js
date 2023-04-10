const yapilacaklar =[
    {
        baslik : "Yapilacak 1", aciklama: "Kedilerin kumunu temizle"
    },
    {
        baslik : "Yapilacak 2", aciklama: "Derse git"
    },
    {
        baslik : "Yapilacak 3", aciklama: "Vakit kalırsa evi temizle"
    }
];

let yapilacakEleman = document.getElementById("yapilacakList");
function listYazdir(){
    var yapilacakSey="";
    setTimeout(()=>{
        yapilacaklar.forEach(yapilacak=>{
            yapilacakSey += 
            `<li>
            <b>${yapilacak.baslik}</b>
            <p>${yapilacak.aciklama}</p>
            </li>`;
        });
        yapilacakEleman.innerHTML =yapilacakSey;

    },2000)
};
function yeniYapilacak(is, callback){
    setTimeout(()=>{
        yapilacaklar.push(is);
        callback()
    },1000)
}

yeniYapilacak({
    baslik:"Yapilacak 4", aciklama:"Ders calis"
},listYazdir);

