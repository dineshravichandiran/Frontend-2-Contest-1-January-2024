/** @format */

let arr = [
    { id: 1, name: "john", age: "18", profession: "developer" },
    { id: 2, name: "jack", age: "20", profession: "developer" },
    { id: 3, name: "karen", age: "19", profession: "admin" },
];
let arr2 = [
    { id: 4, name: "arif", age: "24", profession: "Java developer" },
    { id: 5, name: "aniket", age: "23", profession: "React developer" },
    { id: 6, name: "adarsh", age: "24", profession: "Manager" },
];
function PrintDeveloperbyMap() {
    //Write your code here , just console.log
    arr.map(e => {
        if (e.profession === "developer") {
            console.log(e);
        }
    })
}

function PrintDeveloperbyForEach() {
    //Write your code here , just console.log
    arr.forEach((e, i, a) => {
        if (e.profession === "developer") {
            console.log(e);
        }
    })
}

function addData() {
    //Write your code here, just console.log
    arr.push({ id: 4, name: "susan", age: "20", profession: "intern" })
    console.log(arr);
}

function removeAdmin() {
    //Write your code here, just console.log
    let num = arr.filter(e => e.profession != "admin");
    arr = num;
    console.log(arr);
}

function concatenateArray() {
    //Write your code here, just console.log
    arr = arr.concat(arr2);
    // arr=[...arr,...arr2]
    console.log(arr);
}