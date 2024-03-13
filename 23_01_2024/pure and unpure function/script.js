const education = ["10th", "12th", "B.Tech"]
function addeducation(educationname){
    education.push(educationname)
}
addeducation("Masai school")
console.log(education);

// so this is a impure function becaouse of 2 things happen Headers
// 1st-- > this function change outside of the scope
// 2nd -->given input and output will diffrent





const addnumber = (num) => {
    const a = Math.ceil(Math.random() * 10)
    return a + num;
}
console.log(addnumber(5));
// so this is a unpure function


const addnumber = (num) => {
    const a = 10;
    return a + num;
}
console.log(addnumber(5));
console.log(addnumber(15));

// so this is pure function