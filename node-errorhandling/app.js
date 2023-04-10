// try{
//     const result = some_function();

// }catch{
//     console.error('Error:',error.message);
// }
// if(err) throw err;
//--------------------------------------

class myError extends Error{
    constructor(message ,statusCode){
        super(message);
        this.statusCode=statusCode;
    }
}

function someFunction(){
    //Fonksiyonun yaptığı işlerin kodu ...
    throw new myError ('Birşeyler ters gitti', 500);
}
try{
    someFunction();
}
catch(error){
    if(error instanceof myError){
        console.error('Özel Hata oldu:',error.message, error.statusCode);
    }else{
        console.error('Hata oldu:',error.message);
    }
}