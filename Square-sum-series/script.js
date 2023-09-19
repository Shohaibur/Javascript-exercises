var n=prompt("Input number for generating series:");
var sum=0;
var statement="";
if(isNaN(n)){
  alert("Input must be a number!")

}else{
  for(i=1; i<=n; i++){
    sum += i*i;
    statement += i*i;
    
    if(i==n){
  continue;
    }else{
      statement += ("+");
  
    }
    
  }
  alert(`${statement} = ${sum}`);
}

