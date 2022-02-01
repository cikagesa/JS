//prvi
var a = [ 3,4,5,6,7,8];
for( i of a )
    console.log(i)
//drugi
for(i of a){
    if(a%2==0){
        console.log(i)
    }
}
//treci
var zbir
for(i of a){
    zbir+=a[i]  
}
console.log(zbir)
//cetvrti
var kolbrojeva=0
for(i of a){
    if(a[0]>a[i+1])
        kolbrojeva++
    
}
console.log(kolbrojeva)


