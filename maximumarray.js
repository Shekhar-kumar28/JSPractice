// function findMaxNumber(arr){
//     console.log(Math.max(arr));
// }


// callback Function:-

// function modifyArray(arr,callback){
//     // let newArr = [];
//     arr.push(100);
//     callback();
// }
// var arr = [1,2,33,4,5];
// modifyArray(arr,function(){
//     console.log("array has been modified",arr);
// });


// reverse each word in the sentence

var string = "Welcome to this Javascript Guide!";

var reverseEntireSentence = reverseBySeperator(string,"");

var reverseEachWord = reverseBySeperator(reverseEntireSentence," ");

function reverseBySeperator(string,separator){
    return string.split(separator).reverse().join(separator);
}