let task = +prompt("Tapsiriq nomresi (1-8)")
let result = document.querySelector("#result")

switch (task) {
    case 1:
        task1();
        break;
    case 2:
        task2();
        break;
    case 3:
        task3();
        break;
    case 4:
        task4();
        break;
    case 5:
        task5();
        break;
    case 6:
        task6();
        break;
    case 7:
        task7();
        break;
    case 8:
        task8();
        break;
    default:
        break;
}

function task1() {
    let i = 1, cem = 0, hasil = 1;

    while (i <= 10) {
        cem += i;
        hasil *= i;
        i++;
    }

    result.innerText = `Task 1
    Cem : ${cem}
    Hasil : ${hasil}`
}

function task2() {
    let i = 1, cem = 0, hasil = 1,nums=[];

    while (i <= 100) {
        if (i % 2 == 0) {
            nums.push(i)
            cem += i;
            hasil *= i;
        }
        i++;
    }
    result.innerText = `Task 2
    Reqemler : ${nums}
    Cem : ${cem}
    Hasil : ${hasil}`
}

function task3() {
    let i = 100, cem = 0, say = 0;

    while (i <= 999) {
        cem += i;
        say++;
        i++;
    }
    result.innerText =`Task 3
    Ededi Orta : ${cem / say}`
}

function task4() {
    let i = 100,nums=[];

    while (i <= 999) {
        if (i % 8 == 0 && i % 7 == 0) {
            nums.push(i);
        }
        i++;
    }
    result.innerText = `Task 4
    Reqemler : ${nums}`
}

function task5() {
    let i = 100, cem = 0;

    while (i <= 999) {
        if (i % 8 == 0 && i % 7 == 0) {
            cem += i;
        }
        i++;
    }
    result.innerText = `Task 5
    Cem : ${cem}`
}

function task6() {
    let i = 100,nums = [];

    while (i <= 999) {
        if (i % 8 == 0 && i % 7 == 0) {
            nums.push(i);
            break;
        }
        i++;
    }
    result.innerText = `Task 6
    Reqemler : ${nums}`
}

function task7() {
    let i = 2;
    let sade = [];
    let murekkeb = [];

    while (i <= 100) {
        for (let j = 2; j <= i/2; j++) {
            if (i%j==0) {
                murekkeb.push(i);
                break;
            }
        }
        if (!murekkeb.includes(i)) {
            sade.push(i);
        }
        i++;
    }
    result.innerText = `Task 7
    Sade : ${sade}
    Murekkeb : ${murekkeb}`
}

function task8() {
    let num1 = +prompt("Eded 1");
    let num2 = +prompt("Eded 2");
    let num3 = +prompt("Eded 3");

    let nums = [num1,num2,num3];
    let min=nums[0],max=nums[0];

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > max) {
            max = nums[i];
        }
        if (nums[i] < min) {
            min = nums[i];
        }
    }
    result.innerText = `Task 8
    Min : ${min}
    Max : ${max}`
}