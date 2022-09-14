//Problem 1 : Check whether a number is Prime or not.

let N = 23;
let count = 0;
for (let i = 1; i <= N; i++) {
  if(N%i==0){
    count++;
  }
} if(count==2){    
  console.log("Yes");
} else{
  console.log("No");
}       