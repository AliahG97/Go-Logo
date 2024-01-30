// In generateSVG.js
function generateSVG(userInput) {
    //deconstruct userInput
    const { text, textColor, shape, shapeColor, shapeX, shapeY, radius, width, height, length } = userInput;

    //Customizing SVG template based on the SVG prompted questions
    const svgTemplate = `
        <svg xmlns="http://www.w3.org/2000/svg">
            <shape shape="${shape}" shapeX="${shapeX}" shapeY="${shapeY}" radius="${radius}" width="${width}" height="${height}" length="${length}" shapeColor="${shapeColor}" />
            <text textX="${textX}" textY="${textY}" fontSize="${fontSize}" textAnchor="${textAnchor}" textColor="${textColor}">${text}</text>
        </svg>
    `;
    return svgTemplate;
} 
module.exports = generateSVG