function nextMultipleOfFive(num) {
    return Math.ceil(num / 5) * 5;
}

function gradingStudents(grades) {
    let number = [];
    for (let i = 0; i < grades.length; i++) { // Corrected loop condition
        if (grades[i] > 38) { // Corrected condition to check each grade
            let difference = nextMultipleOfFive(grades[i]) - grades[i];
            if (difference < 3) {
                number.push(nextMultipleOfFive(grades[i]));
            } else {
                number.push(grades[i]);
            }
        } else {
            number.push(grades[i]); // Add grades less than or equal to 38 as is
        }
    }
    return number;
}

const result = gradingStudents([41, 73, 75]);
console.log(result);