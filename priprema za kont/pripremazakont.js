//1. napisati js skriptu koja prebrojava koliko ima br u nizu, a koliko el koji nisu broj
var niz =[4,5,6,'g',5.6,{},-6]
var brojacstr=0
var brojacbr=0;

for(el of niz){
    if(typeof(el)=='number')
       brojacbr++;
       console.log("Ima " + brojacbr + " brojeva u nizu")
}

for(el of niz){
    if(typeof(el)=='string')
    brojacstr++;
    console.log("Ima " + brojacstr + " stringova u nizu")
}
   

//2. Prebrojavanje el u nizu koji su veci od svoj prethodnika

var niiz=[4,5,6,7,0,5,6,7,2,4,32,1,4,7,0]

for(i=0;i<niz.length;i++)
    if(niz[i-1]<niz[i])
       console.log(niz[i])   
