function func(){
var valueA = document.getElementById("valueA"),
    valueB = document.getElementById("valueB"),
    total = `value of ${valueA.value} power ${valueB.value} is ${valueA.value**valueB.value}`;
document.getElementById("valuePlease").innerHTML = total;
}
