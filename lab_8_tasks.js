//Задание 1

function pickPropArray(objectsArray, propertyKey) {
    const valuesList = [];
    for (const obj of objectsArray) {
        if (propertyKey in obj) {
            valuesList.push(obj[propertyKey]);
        }
    }
    return valuesList;
}

const students = [
    { name: 'Павел', age: 20 },
    { name: 'Иван', age: 20 },
    { name: 'Эдем', age: 20 },
    { name: 'Денис', age: 20 },
    { name: 'Виктория', age: 20 },
    { age: 40 },
];

const result = pickPropArray(students, 'name');
console.log(result); // ['Павел', 'Иван', 'Эдем', 'Денис', 'Виктория']

//Задание 2

function createCounter() {
    let internalCount = 0;

    return function incrementAndLog() {
        internalCount += 1;
        console.log(internalCount);
    };
}

const counter1 = createCounter();
counter1(); // 1
counter1(); // 2

const counter2 = createCounter();
counter2(); // 1
counter2(); // 2

//Задание 3

function spinWords(inputString) {
    return inputString.split(' ')
        .map(word => {
            if (word.length >= 5) {
                return [...word].reverse().join('');
            }
            return word;
        })
        .join(' ');
}

const result1 = spinWords("Привет от Legacy");
console.log(result1); // тевирП от ycageL

const result2 = spinWords("This is a test");
console.log(result2); // This is a test

//Задание 4

function findSumIndices(numbers, targetSum) {
    const numIndices = {};

    for (let i = 0; i < numbers.length; i++) {
        const current = numbers[i];
        const complement = targetSum - current;

        if (complement in numIndices) {
            return [numIndices[complement], i];
        }

        numIndices[current] = i;
    }

    return [];
}

const nums = [2, 7, 11, 15];
const target = 9;
console.log(findSumIndices(nums, target)); // [0, 1]

//Задание 5
function findCommonPrefix(strings) {
    if (!strings.length) return "";

    const firstStr = strings[0];
    let longestPrefix = "";

    // Проверяем все возможные подстроки от 2 символов
    for (let i = 0; i < firstStr.length - 1; i++) {
        for (let j = i + 2; j <= firstStr.length; j++) {
            const candidate = firstStr.substring(i, j);

            // Проверяем, содержится ли кандидат во всех строках
            const isCommon = strings.every(str => str.includes(candidate));

            if (isCommon && candidate.length > longestPrefix.length) {
                longestPrefix = candidate;
            }
        }
    }

    return longestPrefix;
}

console.log(findCommonPrefix(["цветок", "поток", "хлопок"])); // "ок"
console.log(findCommonPrefix(["собака", "гоночная машина", "машина"])); // ""