const singleQ = 'Peter';
const doubleQ = "double";
const backticks = `oh`;

const sentense = "she's so \"cool\"";
const sentense2 = `she's so "cool"!`;

const song = `This is 

my 

very first


Song`;

const hello = `Hello, my name is ${singleQ}. Nice to meet you. I am ${50 +5} years old.`;

const html = `
    <div>
        <h2>${singleQ}</h2>
        <p>${hello}</p>
    </div>
`;

document.body.innerHTML = html;