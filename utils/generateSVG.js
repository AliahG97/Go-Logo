// In generateSVG.js
function generateSVG(userInput) {
    //deconstruct userInput
    const { text, textColor, shape, shapeColor } = userInput;

    //Customizing SVG template based on the SVG prompted questions
    const svgTemplate = `
        <svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">
            <text x="10" y="40" fill="${textColor}">${text}</text>
        </svg>
    `;
    return svgTemplate;
} 

module.exports = generateSVG