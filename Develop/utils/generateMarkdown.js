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


![Test](https://img.shields.io/github/license/${data.github}/${data.title}?style=flat-square)

![Top Langs](https://github-readme-stats.vercel.app/api/top-langs/?username=${data.github})

![${data.title}](https://img.shields.io/github/languages/top/${data.github}/${data.title})

![badmath](https://img.shields.io/github/languages/top/${data.github}/web-apis-challenge-code-quiz)
${data.languages}

![Test](https://img.shields.io/badge/HTML-239120?style=for-the-badge&logo=html5&logoColor=white)
![Test](https://img.shields.io/badge/CSS-239120?&style=for-the-badge&logo=css3&logoColor=white)
![Test](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Test](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)


![Test](https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white)

![Test](https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white)
![Test](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![MicrosoftSQLServer](https://img.shields.io/badge/Microsoft%20SQL%20Sever-CC2927?style=for-the-badge&logo=microsoft%20sql%20server&logoColor=white)



![MySQL](https://img.shields.io/badge/mysql-%2300f.svg?style=for-the-badge&logo=mysql&logoColor=white)
![Sequelize](https://img.shields.io/badge/Sequelize-52B0E7?style=for-the-badge&logo=Sequelize&logoColor=white)
![Prisma](https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Test]()
![Test]()


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
