let task = +prompt("Tapsiriq nomresi (9-16)")
let result = document.querySelector("#result")

switch (task) {
    case 9:
        task9();
        break;
    case 10:
        task10();
        break;
    case 11:
        task11();
        break;
    case 12:
        task12();
        break;
    case 13:
        task13();
        break;
    case 14:
        task14();
        break;
    case 15:
        task15();
        break;
    case 16:
        task16();
        break;
    default:
        break;
}

function task9() {
    let arr = [], cem = 0, hasil = 1, i = 0;
    while (i < 5) {
        arr[i] = +prompt(`${i + 1}-ci eded : `)
        cem += arr[i];
        hasil *= arr[i];
        i++;
    }

    result.innerText = `Task 9
    Cem : ${cem}
    Hasil : ${hasil}`
}

function task10() {
    let arr = [1, 2, 3, 1, 2, 2, 3, 4, 234, 324, 23, 423, 42, 4, 32, 4, 57, 567, 45, 23, 234, 21, 312, 31, 3, 123, 126, 24, 12];

    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] == arr[j]) {
                arr.splice(j, 1)
                i = 0;
            }
        }
    }

    result.innerText = `Task 10
    ${arr}`
}

function task11() {
    let arr = [1, '2', 3, '4', 5, '6'];

    for (let i = 0; i < arr.length; i++) {

        if (typeof (arr[i]) != Number) {
            arr.splice(i + 1, 1);
        }
    }

    result.innerText = `Task 11
    ${arr}`
}

function task12() {
    let text = "rafael", arr = [];

    text.split('').forEach(element => {
        arr.unshift(element)
    });
    
    text = "";
    arr.forEach(i => {
        text += i;
    })

    result.innerText = `Task 12
    Tersine : ${text}`
}

function task13() {
    let text = "rafael mehdiyev asd as das sa dasd 321 312 123", arr = [];
    text.split('').forEach(element => {
        arr.unshift(element)
    });
    text = "";
    arr.forEach(i => {
        text += i;
    })

    result.innerText = `Task 13
    Tersine : ${text}`
}

function task14() {
    const Ededler = {
        0: 'Sifir',
        1: 'Bir',
        2: 'Iki',
        3: 'Uc',
        4: 'Dord',
        5: 'Bes',
        6: 'Alti',
        7: 'Yeddi',
        8: 'Sekkiz',
        9: 'Doqquz',
        10: 'On'
    }
    let eded = +prompt("Ededi yazin (0-10) :")
    result.innerText = `Task 14
    Cavab : ${Ededler[eded]}`

}

function task15() {
    let eded = +prompt("Ededi yazin :")
    let nums = []
    for (let i = 100; i < 1000; i++) {
        if (i%eded==0) {
            nums.push(i)
        }
    }
    result.innerText = `Task 15
    Ededler : ${nums}`
}

function task16() {
    let eded = +prompt("Ededi yazin :")
    result.innerText = `Task 16
    `;
    if (eded == Math.round(eded)) {
        result.innerText+=`Tam ededdir`
    }
    else{
        result.innerText+=`Tam eded deyil`
    }
}