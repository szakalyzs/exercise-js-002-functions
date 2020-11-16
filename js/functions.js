'use strict';

// 1. feladat

const handleClick = () => {
    let elements = document.querySelectorAll('.button');
    for (let i = 0; i < elements.length; i += 1) {
        elements[i].addEventListener('click', () => console.log(elements[i].textContent));
    }
}

// 2. feladat

const summation = (a = 0, b = 0) => a + b;
const substraction = (a = 0, b = 0) => a - b;

// 3. feladat

const anyBody = {
    firstName: 'Rick',
    lastName: 'Eastley',
    age: 65
};

const personDataLog = ({ firstName = 'John', lastName = 'Doe', age = 33 }) => console.log('My name is ' + firstName + ', ' + lastName + ". I'm " + age + ' years old.' );

