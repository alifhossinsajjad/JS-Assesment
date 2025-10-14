let name = 'programming';

let vowels =  ["a", "e", "i", "o", "u"];
let count = 0;

let lowertext = name.toLowerCase();

for ( let char of name){
    if(vowels.includes(char)){
        count++
    }
}


console.log(count);