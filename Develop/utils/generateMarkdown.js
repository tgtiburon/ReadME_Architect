// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
## Description
${data.description}

${data.github}

${data.languages}

${data.link}

${data.usage}

${data.license}

${data.questions}

![Test stuff](https://img.shields.io/static/v1?label=myLabel&message=myMessage&color=sucess)




## Table of Contents

        


## Installation
${data.installation}


## Usage
${data.usage}


## Credits

        


## Liscense
${data.license}




## Badges

        




## Features

        

## Contributing
${data.contributing}


## Tests
${data.tests}




`;
}

module.exports = generateMarkdown;
