function getLastItem(a){
    for (i=0; i<a.length; i++){
        if(i === a.length -1){
            console.log(a[i])
        }else{
            continue;
        }
    } 
}
getLastItem(["apple",3,4,5,6, "canada"])