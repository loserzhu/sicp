//Pascal's triangle.

function pascalTriangle(n){
    if(n === 1)return [1];
    else if(n === 2) return [1, 1];
    let arr = new Array();
    arr.push(1);
    let prev = pascalTriangle(n-1);
    for (let index = 0; index < prev.length - 1; index++) {
        const first = prev[index];
        const second = prev[index+1];
        arr.push(first+second);
    };
    arr.push(1);
    return arr;
}

function pascal_triangle(row, index) {
    return index > row
           ? false
           : index === 1 || index===row
             ? 1
             : pascal_triangle(row - 1, index - 1)
	       +
	       pascal_triangle(row - 1, index);
}

pascalTriangle(6);
