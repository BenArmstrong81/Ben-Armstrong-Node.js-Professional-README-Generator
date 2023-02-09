//-------------Linking to the Inquirer Page (package)
const inquirer = require('inquirer');
//-------------Linking to fs:
const fs = require('fs');


//-------------Template for the README.md page along with creating the Array:
const generateHtml = ({ description, tableofcontents, installation, usage, licence, contributing, tests, questions}) =>
`# Your Next New Project!
![Github licence](https://img.shields.io/badge/license-MIT-blue.svg)

## Description
${description}

## Table of Contents:
* [Installation] (#installation)

* [Usage] (#usage)

* [Licence] (#licence)

* [Contributing] (#contributing)

* [Tests] (#tests)

* [Questions] (#questions)

## Installation:
${installation}

```
`npm i`
```

## Usage:
${usage}

## License:
${licence}

## Contributing:
${contributing}

## Tests:
${tests}
```
`npm test`
```

## questions:
questions`;


//-------------Inquirer Form for the User to Fill Out:
inquirer
  .prompt([
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
        message: 'To install necessary dependencies, run the following command:',
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
        message: 'To run tets, run the following command:',
        name: 'tests',
    },


  ])
//-------------Passes Data and Writes to the HTML file (note all within the Inquirer form function):
  .then((response) => {
    const htmldata = generateHtml(response);
        fs.writeFile('README.md', htmldata, (err) =>
      err ? console.log(err) : console.log('Success!')
    );
  });