let myArray = ['one', 'beautiful','travel','march', 'wonderful','june','car','seven','laptop','computer','tiger','lemon','televison']
let randomWord = myArray[Math.floor(Math.random() * myArray.length)];
console.log(randomWord);
let outPutword = document.getElementById('outPutword')
let inputword = document.getElementById('inputword');
let rad = document.getElementById('rad')
outPutword.innerHTML = randomWord

let point = 0;
let score = document.getElementById('point');

let time = 5
let setuptime = document.getElementById('setup-time');

inputword.addEventListener("keyup", ({key}) => {
    if (key === "Enter") //kiểm tra sự kiện khi nhấn enter
    {
        if(inputword.value === randomWord) //nếu từ mình nhập vô ở ô input = từ mà máy random
        {
            point++;
            score.innerHTML = "Your Score: "+point;
            randomWord = myArray[Math.floor(Math.random() * myArray.length)]; // sẽ random 1 từ mới
            outPutword.innerHTML = randomWord;// add 1 từ mới trên màn hình
            inputword.value =""; // quay về ô để input
            time = 5;
        }
        else
        {
            randomWord = myArray[Math.floor(Math.random() * myArray.length)]; 
            outPutword.innerHTML = randomWord;
            inputword.value ="";
            time = 5;
        }
    }
})

let settime = setInterval(timer,1000)
function timer()
{
    time --;
    if(time < 1)
    {
        time = 5;
        point = 0;
        score.innerHTML = "Your Score: "+point;
        randomWord = myArray[Math.floor(Math.random() * myArray.length)]; 
        outPutword.innerHTML = randomWord;
        inputword.value ="";
    }
    setuptime.innerHTML = "Time: "+ time ;
}
