// promises has three states pending ,fullfilled,rejected
function f1(){
    return new Promise((resolve,reject)=>{
      setTimeout(()=>{
     console.log("hi");
     resolve();
   },4000);
    });
  
}

function f2(){
     return new Promise((resolve,reject)=>{
        setTimeout(()=>{
    console.log("ABES");
    resolve();
  },1000);
    });
  
}

f1().then(f2).catch((err)=>{
    console.log("ERROE",err)
})
