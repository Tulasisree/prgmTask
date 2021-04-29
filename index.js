function passByValue(a,b){
   var temp;
   temp=a;
   a=b;
   b=temp;

   alert(`After swapping using pass by value the value of a is ${a} and b is ${b}`);
}


function passByReference(obj){
   var temp;
   temp=obj.a;
   obj.a=obj.b;
   obj.b=temp;

   alert(`After swapping using pass by reference the value a is ${obj.a} and b is ${obj.b}`)
}
