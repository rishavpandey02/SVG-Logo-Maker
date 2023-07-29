const inquirer = require('inquirer');
const fs = require('fs');
const svgson = require('svgson');

const questions = [
    {
        type: 'input',
        name: 'text',
        message: 'Enter up to three characters for your logo',
        validate: function(value) {
            var valid = value.length <= 3;
            return valid || 'Please enter up to three characters';
        }
    },
    {
        type: 'input',
        name: 'text_color',
        message: 'Enter a color keyword or a hexadecimal number for the text',
    },
    {
        type: 'list',
        name: 'shape',
        message: 'Choose a shape for your logo',
        choices: ['circle', 'triangle', 'square']
    },
    {
        type: 'input',
        name: 'shape_color',
        message: 'Enter a color keyword or a hexadecimal number for the shape',
    }
];

inquirer.prompt(questions).then(answers => {
    let svgData;

    switch (answers.shape) {
        case 'circle':
            svgData = `<circle cx="50%" cy="50%" r="250" fill="${answers.shape_color}" />`;
            break;
        case 'triangle':
            svgData = `<polygon points="50,15 15,85 85,85" fill="${answers.shape_color}" />`;
            break;
        case 'square':
            svgData = `<rect width="60" height="60" fill="${answers.shape_color}" />`;
            break;
        default:
            break;
    }

    svgData += `<text x="50%" y="50%" dy=".3em" font-family="Verdana" font-size="100" text-anchor="middle" fill="${answers.text_color}">${answers.text}</text>`;
    let svgContent = `<svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">${svgData}</svg>`;

    fs.writeFile('logo.svg', svgContent, (err) => {
        if (err) throw err;
        console.log('Generated logo.svg');
    });
});
