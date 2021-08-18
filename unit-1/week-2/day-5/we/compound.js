/* compound interest is given by the formula 
compound interest=principal*(1+rate/100)**time-principal
*/
var principal=10000;// This is the principal amount
var rate=10; //this is the percentage of interest
var time=5; // time in years
var compountInterest=principal*(1+rate/100)**time-principal;
console.log(compountInterest);