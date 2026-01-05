let p = new Promise((resolve, reject) => {
    let status = true;

    if (status) {
        resolve("resolved");
    } else {
        reject("rejected");
    }
});

p.then((a) => {
    console.log(a);
})
.catch((b) => {
    console.log(b);
});

// use a DIFFERENT variable for DOM
let heading = document.getElementById("first");
console.log(heading);
