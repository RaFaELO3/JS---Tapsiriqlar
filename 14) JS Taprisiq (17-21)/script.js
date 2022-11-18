let task = +prompt("Tapsiriq nomresi (17-21)")
let result = document.querySelector("#result")

switch (task) {
    case 17:
        task17();
        break;
    case 18:
        task18();
        break;
    case 19:
        task19();
        break;
    case 20:
        task20();
        break;
    case 21:
        task21();
        break;
    default:
        break;
}

function task17() {
    let text = "rafael mehdiyev salam azerbaycan";

    result.innerText = `Task 17
    Soz sayi : ${text.split(' ').length}`
}

function task18() {
    let text = "  rafael   mehdiyev      salam   azerbaycan   ";
    let trimmedText = text.trim().split(' ');
    for (let i = 0; i < trimmedText.length; i++) {
        if(trimmedText[i]==""){
            trimmedText.splice(i,1);
            i = 0;
        }
    }
    text = trimmedText.join(' ')
    console.log(text);
    result.innerText = `Task 18
    Soz sayi : ${text}`
}

function task19() {
    let text = prompt("Yazini daxil edin : ")
    let texts = text.trim().split(' ')
    text = '';
    for (let i = 0; i < texts.length; i++) {
        text+=texts[i][0].toUpperCase() + texts[i].slice(1)
        if (i!=texts.length-1) {
            text+=" ";
        }
    }
    result.innerText = `Task 19
    Soz sayi : ${text}`
}

function task20() {
    let arr1 =[3,2,1]
    let arr2 = [1,2,3,4]
    let isSame = true;

    arr1 = arr1.sort(function(left, right){return left - right});
    arr2 = arr2.sort(function(left, right){return left - right});

    if (arr1.length == arr2.length) {
        for (let i = 0; i < arr1.length; i++) {
            if (arr1.length[i] != arr2.length[i]) {
                isSame = false;
                break;
            }
        }
    }
    else{
        isSame = false;
    }
    result.innerText = `Task 20
    Eynidir ? : ${isSame}`
}

function task21() {
    let arr = [3,2,1,7,5,4]
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > arr[i+1]) {
            let temp = arr[i];
            arr[i] = arr[i+1]
            arr[i+1] = temp;
            i=-1;
        }
    }

    result.innerText = `Task 21
    Sorted Array : ${arr}`
}