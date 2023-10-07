
let buttons = document.querySelectorAll('button');
let inp = document.querySelector('input');


for(let btn of buttons){
    btn.addEventListener('click' , function(event){
        // console.log(event.target.innerText);
        let btnText = event.target.innerText;
        if(btnText === 'C'){
            inp.value = ""
        }
        else if(btnText === '='){
            try{
                inp.value = eval(inp.value);
            }
            catch(e){
                inp.value = "invalid";
                setTimeout(function(){
                    inp.value = "";
                } , 4000)
            }
            
        }
        else{
            inp.value += btnText
        }
    })
}
























