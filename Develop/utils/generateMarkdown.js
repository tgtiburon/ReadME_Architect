// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

const generateTOC = data => {
 
  let stringTOC = `## Table of Contents`;

  if (data.installation !== ''){ 
    stringTOC += `
  [Installation](#installation)`;
  }

  if (data.usage !== ''){ 
    stringTOC += `
    
  [Usage](#usage)`;
  }

  if (data.license !== ''){ 
    stringTOC += `
    
  [License](#license)`;
  }

  if (data.contributing !== ''){ 
    stringTOC += `
    
  [Contributing](#contributing)`;
  }

  if (data.tests !== ''){ 
    stringTOC += `
    
  [Tests](#tests)`;
  }
 
  if (data.questions !== ''){ 
    stringTOC += `
    
  [Questions](#questions)`;
  }
 
// Lets put a line after the TOC
  stringTOC += `
  
  ---`
  return stringTOC;
  
};

const generateInstallation = data => {
 

  if(data.installation !== ''){
    let stringInstallation = `## Installation`;
   // console.log(stringInstallation);
    let tmpString = data.installation;
    let tmpArray = tmpString.split(";");
    //console.log(tmpArray);
    let i = 0;
   // console.log(tmpArray);
    tmpArray.forEach(element => {
      i++;
      console.log("element: ", element);
      //let tmpString2 = element;
      stringInstallation += `

      ${i}. ${element} `;
     // console.log(stringInstallation);

      
      
    });
    //console.log(stringInstallation);
  return stringInstallation;

  };

};

const generateUsage = data => {

  if(data.usage !== ''){
    let stringUsage = `## Usage`;
    //console.log(stringUsage);
    let tmpString = data.usage;
    let tmpArray = tmpString.split(";");
    //console.log(tmpArray);
    let i = 0;
   // console.log(tmpArray);
    tmpArray.forEach(element => {
      i++;
      console.log("element: ", element);
      //let tmpString2 = element;
      stringUsage += `

      ${i}. ${element} `;
     // console.log(stringUsage);

      
      
    });
   // console.log(stringUsage);
  return stringUsage;

  };

};

const generateCredits = data => {
  if(data.credits !== ''){
    let stringCredits = `## Credits`;
    //console.log(stringInstallation);
    let tmpString = data.credits;
    console.log("credits:" +tmpString);
    let tmpArray = tmpString.split(";");
    console.log(tmpArray);
    //console.log(tmpArray);
    let i = 0;
    //console.log(tmpArray);
    tmpArray.forEach(element => {
      i++;
      console.log("element: ", element);
      //let tmpString2 = element;
      stringCredits += `

      ${i}. ${element} `;
      //console.log(stringInstallation);

      
      
    });
    //console.log(stringCredits);
  return stringCredits;

  };
 
};

const generateLicense = data => {
  if(data.license !== ''){
  return `
## License 
${data.license}
  &emsp; ![License](https://img.shields.io/github/license/${data.github}/${data.title}?style=flat-square)`;
  };

};

const generateFeatures = data => {
  if(data.features !== '') {
  return `
## Features
${data.features}`;
  };
};

const generateContributing = data => {
  if(data.contributing !== ''){
    let stringContributing = `## Contributing`;
   // console.log(stringContributing);
    let tmpString = data.contributing;
    //console.log("contributing: " + tmpString);
    let tmpArray = tmpString.split(";");
    //console.log(tmpArray);
    let i = 0;
   // console.log(tmpArray);
    tmpArray.forEach(element => {
      i++;
      console.log("element: ", element);
      //let tmpString2 = element;
      stringContributing += `

      ${i}. ${element} `;
      //console.log(stringInstallation);

      
      
    });
    //console.log(stringInstallation);
  return stringContributing;

  };
  
};

const generateTests = data => {
  if(data.tests !== ''){
    let stringTests = `## Tests`;
   // console.log(stringInstallation);
    let tmpString = data.tests;
    let tmpArray = tmpString.split(";");
    //console.log(tmpArray);
    let i = 0;
    //console.log(tmpArray);
    tmpArray.forEach(element => {
      i++;
      console.log("element: ", element);
      //let tmpString2 = element;
      stringTests += `

      ${i}. ${element} `;
     // console.log(stringInstallation);

      
      
    });
   // console.log(stringInstallation);
  return stringTests;

  };

};

const generateBadges = data => {
 
  let strLanguages =  ``;
  data.languages.forEach(element => {
   
    if(element == "HTML") {
      strLanguages += `
  ![HTML](https://img.shields.io/badge/HTML-239120?style=for-the-badge&logo=html5&logoColor=white) `;
    }
  
    if(element == "CSS") {
    strLanguages += `
  ![CSS](https://img.shields.io/badge/CSS-239120?&style=for-the-badge&logo=css3&logoColor=white) `;
    };
    if(element == "JavaScript") {
    strLanguages += `
  ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black) `;
    };
    if(element == "Node.js") {
    strLanguages += `
  ![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white) `;
    };
    if(element == "Bootstrap") {
    strLanguages += `
  ![BootStrap](https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white) `;
    };
    if(element == "JQuery") {
    strLanguages += `
  ![JQuery](https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white) `;
    };
    if(element == "React") {
    strLanguages += `
  ![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB) `;
    };
    if(element == "Express.js") {
    strLanguages += `
  ![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB) `;
    };
    if(element == "Microsoft SQL Server") {
    strLanguages += `
  ![MicrosoftSQLServer](https://img.shields.io/badge/Microsoft%20SQL%20Sever-CC2927?style=for-the-badge&logo=microsoft%20sql%20server&logoColor=white) `;
    };
    if(element == "MySQL") {
    strLanguages += `
  ![MySQL](https://img.shields.io/badge/mysql-%2300f.svg?style=for-the-badge&logo=mysql&logoColor=white) `;
    };
    if(element == "Sequelize") {
    strLanguages += `
  ![Sequelize](https://img.shields.io/badge/Sequelize-52B0E7?style=for-the-badge&logo=Sequelize&logoColor=white) `;
    };
    if(element == "Prisma") {
    strLanguages += `
  ![Prisma](https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white) `;
    };
     
    
  });
  
//console.log(strLanguages);
return strLanguages;
};


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
---
${generateBadges(data)}
## Description
${data.description}

---

 

${generateTOC(data)}
${generateInstallation(data)}
${generateUsage(data)}
${generateCredits(data)}
${generateLicense(data)}
${generateFeatures(data)}
${generateContributing(data)}
${generateTests(data)}


## Questions

If you have any questions about this project feel free to [email](${data.email}) me .  

To see the rest of my portfolio, visit [Github](https://github.com/${data.github}).
![](./images/GitHub-Mark-32px.png)

Below is a graphic displaying my most used languages on github.

![Top Langs](https://github-readme-stats.vercel.app/api/top-langs/?username=${data.github})

`;
}

module.exports = generateMarkdown;
