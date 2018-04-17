function forLoop(array){
}

function whileLoop(n){
  
  while(n>0){
    console.log(n);
    n=n-1;
  }
  return "done";
  
}

function maybeTrue() {
  return Math.random() >= 0.5 ;
  // Returns a random number between 0 (inclusive) and 1 (exclusive)
}

function doWhileLoop(array){
  do{
    array.pop();
  }while(array.length>0 && maybeTrue())
  
  return array;
}