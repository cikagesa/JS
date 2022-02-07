function f(){
    return "f" + 4;
}

(function x(){
    console.log("X");
})();

var a = f;
var rez=a();
console.log(rez());

var objekat = {
    a: (function(){return "a";})(),
    b: function(){return b;},
    c: function(){return c*c;}
}

