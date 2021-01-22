const cats = [
    {
        name: "Blob",
        age: 10
    },
    {
        name: "Harold",
    },
    {
        name: "Blurt",
        age: 21
    }
];


// Question 1

const cat = {
    complain: function () {
        console.log("Meow!");
    }
};

cat.complain();




// Question 2

const heading = document.querySelector("h3");
heading.innerHTML = "Updated heading";




// Question 3

heading.style.fontSize = "2em";




// Question 4

console.dir(heading);
heading.classList.add(".subheading");




// Question 5

const paragraphs = document.querySelectorAll("p");
console.log(paragraphs);

for (i = 0; i < paragraphs.length; i++) {
    paragraphs[i].style.color = "red";
}




// Question 6

const resultsContainer = document.querySelector(".results");
resultsContainer.innerHTML = `<p style = "background-color:yellow">New paragraph</p>`;




// Question 7

function logList(list) {
    for (let i = 0; i < cats.length; i++) {
        console.log(list[i].name);
    }
}

logList(cats);
//console.log(cats);





// Question 8







