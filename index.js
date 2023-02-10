//-------------Linking to the Inquirer Page (package)
const inquirer = require('inquirer');
//-------------Linking to fs:
const fs = require('fs');


//-------------Template for the README.md page along with creating the Array:
const generateReadme = ({title, description, installation, usage, licence, contributing, tests, github, email}) =>
`README.md
# ${title}!
![Github licence](https://img.shields.io/badge/license-MIT-blue.svg)

## Description
${description}

## Table of Contents:
* [Installation] (Installation)

* [Usage] (Usage)

* [Licence] (License)

* [Contributing] (Contributing)

* [Tests] (tests)

* [Questions] (Questions)

## Installation:
To install the necessary dependancies please run the following command:

${installation}


## Usage:
${usage}

## License:
${licence}

## Contributing:
${contributing}

## Testing:
If you have any concerns and want to run a test, please run the following command:

${tests}

## Questions:
If you have any questions about this repo please feel free to reach out directly to me via email at [${email}](mailto:${email}). You can also find more of my work at [${github}](https://github.com/${github}).`;


//-------------Inquirer Form for the User to Fill Out:
inquirer
  .prompt([
    {
      type: 'input',
      message: 'Enter the Title of your project:',
      name: 'title',
    },
    {
      type: 'input',
      message: 'Please write your desciption of the project:',
      name: 'description',
    },
    {
      type: 'input',
      message: 'What is your Location?',
      name: 'tableofcontents',
    },
    {
        type: 'input',
        message: 'To install necessary dependencies, run the following command: npm i',
        name: 'installation',
    },
    {
      type: 'input',
      message: 'Please write an usage details the user should know about:',
      name: 'usage',
    },
    {
        type: 'list',
        message: 'What is your preferred method of communication?',
        name: 'licence',
        choices: ['MIT', 'phone', 'SMS'],
    },
    {
        type: 'input',
        message: 'If you wish to contribute:',
        name: 'contributing',
    },
    {
        type: 'input',
        message: 'To run a test please run the following command: npm test',
        name: 'tests',
    },
    {
      type: 'input',
      message: 'Please enter your email address:',
      name: 'email',
    },
    {
      type: 'input',
      message: 'Please enter your GitHub user name:',
      name: 'github',
     },
  ])
//-------------Passes Data and Writes to the README.md file (note all within the Inquirer form function):
  .then((response) => {
    const htmldata = generateReadme(response);
        fs.writeFile('README.md', htmldata, (err) =>
      err ? console.log(err) : console.log('Success!')
    );
  });