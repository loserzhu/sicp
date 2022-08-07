/**
 * A function f is defined by the rules 
 * f(n)=n if n < 3 and f(n)=f(n−1)+2f(n−2)+3f(n−3) if n≥3. 
 * Write a function that computes ff by means of an iterative process.
 */

function f(n) {
    if (n < 3)return n;
    return f(n-1) + 2 * f(n-2) + 3 * f(n-3)
}

function f(n) {
    function f_iter(x,y,z,  n){
        return n === 0
        ? x
        : f_iter(x+2*y+3*z, y, z, n-1)
    }

    return   n < 3
    ? n 
    :f_iter(2, 1, 0, n -2);
}