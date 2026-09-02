function sum(a,b){
    return a+b;
}
function sumwithmsg(sum,msg){
    const result=sum(20,30);
    const ans="HI" +msg+" YOUR SCORE IS " +result;
    console.log(ans);
}
sumwithmsg()