// Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const {Shape, Circle, Triangle, Square} = require('./shape.js');
const generateSVG = require('./utils/generateSVG');

//Defining class for shapes

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
        
        // Creating an instance of each shapes subsclass based on the shape that the user selects 
        let shape;
        switch (userInput.shape) {
            case 'circle':
                shape = new Circle(userInput.text, userInput.textColor, userInput.shapeColor);                
                break;
            case 'triangle':
            shape = new Triangle(userInput.text, userInput.textColor, userInput.shapeColor)
                break;
            case 'square':
                shape = new Square(userInput.text, userInput.textColor, userInput.shapeColor)
                    break;
            default:
                throw new Error('Invalid shape choice');
        }        
        
        const svgContent = shape.generateSVGContent();
        //Write the SVG content to a file
        fs.writeFileSync('logo.svg', svgContent);
        console.log('Generate logo.svg');
    } catch (error) {
        console.error('Error generating svg file:', error);
    }
}
init();