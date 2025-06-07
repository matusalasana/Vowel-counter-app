

//vowels in english
const vowels=["A","E","I","O","U","a","e","i","o","u"];


// variables
const texts=document.getElementById('txtarea');
const countbtn=document.getElementById('countbtn');
const result=document.getElementById('result');

// const counter=0


//function

// function resultof(){
//     result.innerText=texts.value;
// }

function resultof(){
    let counter=0;
    for (letter of texts.value){
        for (vowel of vowels){
            if(letter==vowel){
                counter+=1
            }
            else{
                counter=counter
            }
        }
    }
    result.innerHTML=`Result:${counter}`;
}


//calling the eventlistner and the function

countbtn.addEventListener('click',resultof);
