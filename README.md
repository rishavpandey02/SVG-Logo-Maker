# SVG Logo Maker

## Description

SVG Logo Maker is a simple JavaScript tool that prompts users to customise their own SVG logos. The logos consist of a shape ('circle', 'triangle', or 'square') and up to three characters of text. Both the text and the shape can be any color specified by the user.

## Prerequisites

Before you begin, ensure you have met the following requirements:

* You have installed [Node.js](https://nodejs.org/)
* You have installed the following Node.js modules: `inquirer`, `fs`, `svgson`

## Using SVG Logo Maker

To use SVG Logo Maker, follow these steps:

1. Clone this repository
2. Navigate into the project directory
3. Run `node index.js` (or whatever your JavaScript file is named)

You'll then be prompted to answer the following questions:

* Enter up to three characters for your logo
* Enter a color keyword or a hexadecimal number for the text
* Choose a shape for your logo (circle, triangle, or square)
* Enter a color keyword or a hexadecimal number for the shape

Once you've answered all the prompts, an SVG file named `logo.svg` will be created in your current directory. The SVG file consists of the shape and text you specified in the colors you selected.

## Contributing to SVG Logo Maker

To contribute to SVG Logo Maker, follow these steps:

1. Fork this repository.
2. Create a branch: `git checkout -b <branch_name>`
3. Make your changes and commit them: `git commit -m '<commit_message>'`
4. Push to the original branch: `git push origin <project_name>/<location>`
5. Create the pull request.

## Contact

If you want to contact the maintainer, you can reach at rishavpandey@outlook.com.au.
