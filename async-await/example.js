async function todoGetir(){
    const todo = await fetch("https://jsonplaceholder.typicode.com/todos");
    const data = await todo.json();


    data.map(function(todo,index){
        let yapilacakEleman = document.getElementById("yapilacakList");
        yapilacakEleman.innerHTML = (index+1)+ ":" + todo.title;
        console.log((index+1)+" : " + todo.title);
    });
    
}





todoGetir();