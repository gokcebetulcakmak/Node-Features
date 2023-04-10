async function postGetir(){
    const cevap = await fetch("https://jsonplaceholder.typicode.com/todos");
    const data = await cevap.json();

    console.log(data);

    data.forEach(post => {
        console.log("post",post)        
    })
}

postGetir();