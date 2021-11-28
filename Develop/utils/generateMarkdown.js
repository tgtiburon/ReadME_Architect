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

![Test](https://img.shields.io/github/license/tgtiburon/readme_architect?style=flat-square)

![Test](https://img.shields.io/github/license/${data.github}/${data.title}?style=flat-square)



${data.languages}

${data.link}







![Test stuff](https://img.shields.io/static/v1?label=myLabel&message=myMessage&color=sucess)




## Table of Contents

[1. Installation](#installation)

[2. Usage](#usage)

[3. License](#license)

[4. Contributing](#contributing)

[5. Tests](#tests)

[6. Questions](#questions)

        





## Installation
${data.installation}


## Usage
${data.usage}


## Credits

        


## License
${data.license}





## Badges

        




## Features

        

## Contributing
${data.contributing}


## Tests
${data.tests}


## Questions

If you have any questions about this project feel free to email me at ${data.email}.  

To see the rest of my portfolio, visit https://github.com/${data.github}.


${data.questions}


`;
}

module.exports = generateMarkdown;
