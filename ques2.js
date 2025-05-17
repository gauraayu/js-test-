function test2(){
let a=confirm("Do you want to see the numbers from 1 to 10?");
if(a==true){
let arr=[];
    for(let i=1;i<=10;i++){
        arr[i-1]=i;
    }

    alert(arr);
    
}
else{
    alert("you cancelled the action")
}
}



