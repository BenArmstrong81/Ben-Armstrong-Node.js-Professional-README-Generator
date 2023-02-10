//-------------Linking to the Inquirer Page (package)
const inquirer = require('inquirer');
//-------------Linking to fs:
const fs = require('fs');


//-------------Template for the README.md page along with creating the Array:
const generateReadme = ({title, description, installation, usage, licence, contributing, tests, github, email}) =>
`README.md
# ${title}!
![Github licence](https://img.shields.io/badge/license-${licence}-blue.svg)

## Description:
${description}

## Table of Contents:<br />

- [Installation](#installation)<br />

- [Usage](#usage)<br />

- [Licence](#license)<br />

- [Contributing](#contributing)<br />

- [Testing](#testing)<br />

- [Questions](#questions)<br />

## Installation:
To install the necessary dependancies please run the following command:

${installation}


## Usage:
${usage}

## License:
This project is licensed under; ${licence}

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
        message: 'Select which Licence you wish to use:',
        name: 'licence',
        choices: ['MIT', 'None', 'Apache_License_2.0', 'GNU_General_Public_License_v3.0', 'MIT_License', 'Boost_Software_License_1.0', 'Creative_Commons_Zero_v1.0_Universal', 'Eclipse_Public_License_2.0', 'GNU_Affero_General_Public_License_v3.0', 'GNU_General_Public_License_v2.0', 'GNU_Lesser_General_Public_License_v2.1', 'Mozilla_Public_License_2.0', 'The_Unlicense'],
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