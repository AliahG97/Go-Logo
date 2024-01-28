// Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateSVG = require('./utils/node_modules/generateSVG');

// Create an array of questions for user input
//const questions = [text, textColor, shape, shapeColor]

const prompts = [
    {
        type:'input',
        name:'text',
        message:'Enter up to three characters for the text:',
        validate: (input) => input.length <= 3,

    },
    {
        type:'input',
        name:'textColor',
        message:'Enter the text color:',
    },
    {
        type:'list',
        name:'shape',
        message:'Chose a shape:',
        choices: ['circle', 'triangle', 'square'],
    },
    {
        type:'input',
        name:'shapeColor',
        message:'Enter the shape color:',
    },
];
async function init() {
    try {
        const userInput = await inquirer.prompt(prompts);
        const svgContent = generateSVG(userInput);
        fs.writeFileSync('logo.svg', svgContent);
        console.log('Generate logo.svg');
    } catch (error) {
        console.error('Error generating svg file:', error);
    }
}
init();