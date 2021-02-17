function getNumber(num){
    var result = document.getElementById("input");
    var lastIndex = result.value.charAt(result.value.length -1);
    result.value += num;
    console.log(lastIndex.value); 
}

function clearResult(){
    var result = document.getElementById("input");
    result.value =""   
}
function getResult(){
    var result = document.getElementById("input");
    result.value = eval(result.value)

}
    
