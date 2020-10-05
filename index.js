const fs = require("fs");
const util = require("util");
const axios = require("axios");
const { findSourceMap } = require("module");
// const { createConnection } = require("net");

// const appendFileAsync = util.promisify(fs.appendFile);
// const readFileAsync = util.promisify(fs.readFile);

async function asyncExample() {
    const config = { headers: { accept: "application/json" } };

    const joke = await axios.get("https://icanhazdadjoke.com/", config)
        .then(function (res){

        fs.writeFile("log.txt", res.data.joke, "utf8", function (err) {
                        if (err){
                            console.log(err)
                        }else
                       
                        console.log("this will happen first");
                        // return res.data.joke;
                    })
            console.log(res.data);
            console.log("this will happen first");
        });

            
        }

    console.log("this will happen second");
    // console.log(joke);

asyncExample();

console.log("HOME".toLowerCase());
console.log("home".toUpperCase());

// function fsAsyncExample() {
//     new Promise(function (resolve, reject) {
//         fs.writeFile("log.txt", "Hello, my name is Hannah", "utf8", function (err) {
//             if (err) reject(err);

//         })
//     });

//     console.log("this will happen second");
// }

// fsAsyncExample();

// async function fsAsyncExample2() {
//     const myFirstPromise = await new Promise((resolve, reject) => {
//         // do something asynchronous which eventually calls either:
//         fs.readFile("./log.txt", "utf8", function (err, data) {
//             if (err) reject(err);
//             resolve(data);
//         })
//     });


//     console.log(typeof parseInt(myFirstPromise));
//     console.log(parseInt(myFirstPromise));
// }

// fsAsyncExample2();
// fs.readFile("some file path here", "utf8", function(err, data) {

// });

// fs.writeFile("some file path here", "data", "utf8", function(err) {

// })

//     $.ajax({
//         method: "GET",
//         url: "omdb.com/api"
//     }).then(function(response) {
//         console.log(response);
//     })

//     console.log("some stuff down here");

// some asynchronous functions you'll encounter during bootcamp
//     inquirer
//     fs
//     axios
//     ajax
//     connection.query


// // turns strings into numbers if they are strings that are numbers
// console.log("5");
// console.log(parseInt("frog"));
// console.log("3.14");
// console.log(parseFloat(3));

//JSON.parse();

// var animals = ["dog", "cat", "bird", "mouse", "horse", "zebra"]
// fs.writeFile("./array.json", JSON.stringify(animals), "utf8", function(err) {
//     if (err) throw err;
//     console.log("success!");
// });

// fs.readFile("./array.json", "utf8", function (err, data) {
//     if (err) throw err;
//     console.log(typeof JSON.parse(data));
//     console.log(JSON.parse(data));
// })