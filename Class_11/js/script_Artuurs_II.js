var a=1,
    b=3,
    c=2,
    temp=null;

console.log("a= "+ a + " b= "+ b + " c= " + c);

if (b>a)
    {
//    a=a+b;
//    b=a-b;
//    a=a-b;
    [a,b] = [b,a];
    //console.log("a= "+ a + " b= "+ b + " c= " + c);
    }
if (c>a)
    {
        a=a+c;
        c=a-c;
        a=a-c;
    //console.log("a= "+ a + " b= "+ b + " c= " + c);
    }
if (c>b)
    {
//        b=b+c;
//        c=b-c;
//        b=b-c;
       b=b^c;
       c=b^c;
       b=b^c;
}

console.log("a= "+ a + " b= "+ b + " c= " + c);
