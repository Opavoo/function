function hasEqualSums(first, second){
    let result = 0;
    for(let i = 0; i < first.length; i++){
        result += first[i];
    };
    let oneResult = 0;
    for (let i = 0; i < second.length; i++){
        oneResult += second[i];
    }
    return result === oneResult;
}
console.log(hasEqualSums([11, 22], [1, 20, 10, 1, 1]));
console.log(hasEqualSums([4, 4], [3, 6]));


// Задание 2

function filterNames(names, number){
    let arr = names.filter (function(n){
        return n.length >= number;
     })
    return arr;
}
console.log(filterNames(['alt', 'shoo', 'js', 'html', 'git'], 4));
