var thisArray = ['T', 'h', 'a', 'i', 's', 'b', ' ', 'i', 'c', 's', ' ', 'a', 't', 'h', 'e', 'e', ' ', 't', 's', 'o', 'r', 'n', 'g', 't', ' ', 't', 'n', 'h', 'a', 's', 't', ' ', 'o', 'n', 'e', 'o', 'v', 'e', 'a', 'r', ' ', 'f', 'e', 'n', 'a', 'd', 's', 'p', ',', ' ', 'p', 'y', 'e', 'i', 's', ' ', 'p', 'i', 't', 'o', ' ', 'g', ' ', 'o', 'e', 'i', 's', ' ', 't', 'o', 'n', 'e', ' ', 'a', ' ', 'n', 'd', ' ', ' ', 'o', 'i', 'n', ' ', 'a', 'm', 'y', ' ', ' ', 'f', 'a', 'r', 'i', ' ', 'e', 'n', 'o', 'd', 's', 'i', ' ', 'S', ' ', 'o', 'm', 'a', 'e', ' ', 'a', 'p', 'e', ' ', 'o', 'p', 'a', 'l', 'e', 'r', ' ', 's', ' ', 't', 'a', 'a', 'r', 't', ' ', 'e', 'd', 'u', ' ', 's', ' ', 'i', 'n', 'g', 'g', 'i', ' ', 'n', 'g', 'o', ' ', 'i', 't', 't', ',', ' ', ' ', 'n', 'i', 'o', 't', 'h', ' ', 'k', 'a', 'n', 'o', ' ', 'w', 'i', ' ', 'n', 'g', 'o', ' ', 'w', 'r', 'h', 'a', 'i', 't', ' ', 's', 'i', 't', 'h', ' ', 'w', 'r', 'a', 's', 'h', ' ', 'A', ' ', 'n', 'd', 'a', ' ', 't', 'o', 'h', 'e', ' ', 'y', ' ', 'a', 'w', 'i', 'p', 'l', 'l', 'o', ' ', 'c', 'r', 'o', 'n', ' ', 't', 'i', 'p', 'n', 'u', 'i', 'e', ' ', 't', 's', 'i', ' ', 'n', 'g', ' ', 'i', 'n', ' ', 'g', ' ', 's', 'i', 't', 'h', ' ', 'f', 'r', 'o', 'r', ' ', 'e', 'v', 't', 'e', 'r', 't', ' ', 'j', 'u', 'u', 's', 't', 't', ' ', 'a', 'b', 'e', 'l', 'c', 'a', ' ', 'u', 's', 'l', 'e'];



function removeEachThird(array) {
    for(let i = 2; i < array.length; i=i+2){
        array.splice(i,1)
    }
};

removeEachThird(thisArray);

document.write('<h2>Part 3 - Filtered Array:</h2>')
document.write(thisArray.join(''))



