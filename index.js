const inquirer = require("inquirer");
const fs = require("fs");
const { createSVG } = require("./lib/createSVG");
const { createShape } = require("./lib/createShape");

inquirer
    .prompt([
        {
            type: "input",
            name: "logoName",
            message: "Please enter at least 1 and up to 3 letters for your brand logo",
        },
        {
            type: "input",
            name: "textColor",
            message: `What color should the text be?`,
        },
        {
            type: "input",
            name: "logoColor",
            message: `What color should the background be?`,
        },
        {
            type: "list",
            name: "logoShape",
            message: `Please choose logo shape`,
            choices: ["triangle", "circle", "square"],
        },
    ])
    .then((data) => {
        const svgPath = `./dist/${data.logoName}_logo.svg`;
        const completeLogo = createShape(data);

        //Generate the svg logo here.
const svgCode = createSVG(completeLogo);

        fs.writeFile(svgPath, svgCode, (err) =>
            err ? console.error(err) : console.log(`Generated your ${data.logoName} logo.svg!`)
        );
    })
    .catch((err) => console.error(err));