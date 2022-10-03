let favNum = 99;
let url = "http://numbersapi.com";

// 1. 
$.getJSON(`${url}/${favNum}?json`).then(data => {
    console.log(data);
});

// 2. 
let favNums = [91, 6, 9];
$.getJSON(`${url}/${favNums}?json`).then(data => {
    console.log(data);
});

// 3. 
Promise.all(
    Array.from({length: 4}, () => {
        return $.getJSON(`${url}/${favNum}?json`);
    })
).then(facts => {
    facts.forEach(data => $("body").append(`<p>${data.text}</p>`));
});