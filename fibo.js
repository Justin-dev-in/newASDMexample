var fibonacci_series = function (n) 
{
    var i,t1=0,t2=1;
    for (i = 1; i <= n; ++i) {
        console.log(t1);
        nt = t1 + t2;
        t1 = t2;
        t2 = nt;
    }
}
var p=require ('prompt');
p.start();
p.get(['n'],function(err,data){
    fibonacci_series(data.n);
})
