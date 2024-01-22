
// Leetcode 1st problem

// function createHelloWorld(){
//     return function(){
//         return "Hello World";
//     };
// };

// const f1 = createHelloWorld();
// console.log(f1());

// const f2 = createHelloWorld();
// console.log(f2({},null,42));


// 2nd problem 


function createCounter(n){
    let counterValue = n;
    return function(){
        return counterValue++;
    };
};

function PerformCalls(n,Calls){
    const counter = createCounter(n);
    const result = []

    for(const call of Calls ){
        if(call==="call"){
            result.push(counter());
        }
    }
    return result;
}

const result1 = PerformCalls(10,["call","call","call"]);
console.log(result1);

const result2 = PerformCalls(-2,["call","call","call","call","call","call"])
console.log(result2);