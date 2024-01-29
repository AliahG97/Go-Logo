// Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateSVG = require('./utils/generateSVG');

// Create an array of questions for user input
//const questions = [text, textColor, shape, shapeColor]
const basePrompts = [
    {
        type:'input',
        name:'text',
        message:'Enter up to three characters for the text:',
        validate: (input) => input.length <= 3,
    },
    {
        type:'input',
        name:'fontSize',
        message:'Enter the text font size:',
    },
    {
        type:'input',
        name:'textColor',
        message:'Enter the text color:',
    },
    {
        type:'input',
        name:'textX',
        message:'Enter the x-axis coordinate of the text:',
    },
    {
        type:'input',
        name:'textY',
        message:'Enter the y-axis coordinate of the text:',
    },
    {
        type:'list',
        name:'textAnchor',
        message:'Chose a text anchor:',
        choices: ['top', 'middle', 'bottom'],
    },
    {
        type:'input',
        name:'shapeColor',
        message:'Enter the shape color:',
    },
    {
        type:'input',
        name:'shapeX',
        message:'Enter the x-axis coordinate of the shape:',
    },
    {
        type:'input',
        name:'shapeY',
        message:'Enter the y-axis coordinate of the shape:',
    },
    {
        type:'list',
        name:'shape',
        message:'Chose a shape:',
        choices: ['circle', 'triangle', 'square'],
    },
    
];
// Function to prompt for shape dimensions based on selected shape
function getShapeDimensionPrompts(shape) {
    const shapeDimensionPrompts = [];
    if (shape === 'circle') {
        shapeDimensionPrompts.push({
            type: 'input',
            name: 'radius',
            message: 'Enter radius of circle:',
        });
    } else if (shape === 'triangle') {
        shapeDimensionPrompts.push(
            {
                type: 'input',
                name: 'height',
                message: 'Enter height of triangle:',
            },
            {
                type: 'input',
                name: 'width',
                message: 'Enter width of triangle:',
            }
        );
    } else if (shape === 'square') {
        shapeDimensionPrompts.push(
            {
                type: 'input',
                name: 'length',
                message: 'Enter the length for square:',
            },
            {
                type: 'input',
                name: 'width',
                message: 'Enter the width for square:',
            }
        );
    }
    return shapeDimensionPrompts;
}

async function init() {
    try {
        // Get the base user input
        const baseUserInput = await inquirer.prompt(basePrompts);

        //Dynamically add shape dimension questions based on the selected shape
        const shapeDimensionPrompts = getShapeDimensionPrompts(baseUserInput.shape);
            
        // get user input for all prompts
        const userInput = await inquirer.prompt([...basePrompts.slice(0, -1), ...shapeDimensionPrompts]);
        
        // implement the base and shape dimension prompts together
        const shapeColorPrompt = await inquirer.prompt([basePrompts[basePrompts.length - 1]]);
        //combine all inputs
        const finalUserInput = {...userInput, ...shapeColorPrompt };

        //Check if necessary shape dimensions are provided
        if (!finalUserInput.radius && !finalUserInput.height && !finalUserInput.length) {
            throw new Error('Missing shape dimensions');
        }
        
        //generate and write SVG content
        const svgContent = generateSVG(userInput);
        fs.writeFileSync('logo.svg', svgContent);
        console.log('Generate logo.svg');
    } catch (error) {
        console.error('Error generating svg file:', error);
    }
}
init();