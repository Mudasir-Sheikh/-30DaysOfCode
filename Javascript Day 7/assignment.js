//Question 01
function largerElements(arr,num){
    let array_elements = [];
    for (let i=0; i<arr.length; i++){
        if (arr[i] > num){
            array_elements.push(arr[i])
        }
    }
    return array_elements

}

let array = [22,33,44,55,66]
let num = 40;
console.log(largerElements(array,num))



//Question 02 --> Approach 01
function Unique_Char(str){
    let unique_str = "";
    for (let i=0; i<str.length; i++){
        let currentchar = str[i];
        if (unique_str.indexOf(currentchar) == -1){
            unique_str+=currentchar;
        }
    }
    return unique_str;
}

let rep_string  = "abcdabcdefgggh";
y = Unique_Char(rep_string);
console.log(y);


//Question 02 --> Approach 02
function uniqueChar(str) {
    let uniqueStr = "";
    for (let i = 0; i < str.length; i++) {
        let currentChar = str[i];
        let isUnique = true;
        for (let j = 0; j < uniqueStr.length; j++) {
            if (currentChar === uniqueStr[j]) {
                isUnique = false;
                break;
            }
        }
        if (isUnique) {
            uniqueStr += currentChar;
        }
    }
    return uniqueStr;
}

let result = uniqueChar("hello");
console.log(result); // Output: "helo"




//Question 03 --> Approach 01
function Longeststring(Countries){
    let longestStr = "";
    for (let i=0; i<Countries.length; i++){
        if(Countries[i].length > longestStr.length){
            longestStr = Countries[i]
        }
    }
    return longestStr;
}

let countries = ["America","india","United Kingdom","Turkey","Russia","Germany","France",];
console.log(Longeststring(countries));


//Question 03 --> Approach 02
function longestName(countries){
    let ansindex = 0;
    for (let i=1; i<countries.length; i++){
        currentIndex = countries[ansindex].length
        nextindex = countries[i].length
        if(nextindex>currentIndex){
        ansindex = i;
        }
    }
    return countries[ansindex];
}

let _Countries = ["America","india","United Kingdom","Turkey","Russia","Germany","France",];
console.log(longestName(_Countries));


//Question 04 Approach 01
function countVowels(sentence){
    let count = 0;
    for (char of sentence){
        if (char == "a" || char == "e" || char == "i" || char == "o" || char == "u"){
            count+=1;
        }
    }
    return count
}
let my_sentence1 = "MUhAmmAd Mudasir";
console.log(countVowels(my_sentence1.toLowerCase()));



//Question 04 Approach 02
function CountVowels(sentence){
    let count = 0;
    for (char of sentence){
        if ("aeiou".includes(char.toLowerCase())){  //includes check if the gives string is a substring of the original string
                                                    // returns true if found ,  false otherwise.
            count+=1;
        }
    }
    return count
}

let my_sentence2 = "MUHAMMAD mudasir";
console.log(CountVowels(my_sentence2));


//Question 05

function generateRandom(start , end){
    let random = Math.floor(Math.random() * (end - start +1)) + start;
    return random;
}
random_ = generateRandom(5,10);
console.log(random_);