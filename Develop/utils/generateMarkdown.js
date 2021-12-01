// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  data = license;
  console.log(data.license);
  if(data.license !== ''){
    return `
  &emsp; ![License](https://img.shields.io/github/license/${data.github}/${data.title}?style=flat-square)`;
    };
  
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  data = license;
  console.log(data.license);
  if(data.license !== ''){
    return `
      To read about the license of this project click the link below.

  &emsp;[License](https://github.com/${data.github}/${data.title}/blob/main/LICENSE) `
    
    };

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {

  data = license;
  console.log(data.license);
  if(data.license !== ''){
    return `
  ---
  ## License `
    };
}

const generateTOC = data => {
 
  let stringTOC = `---
  ## Table of Contents`;

  if (data.installation !== ''){ 
    stringTOC += `
  [Installation](#installation)`;
  }

  if (data.usage !== ''){ 
    stringTOC += `
    
  [Usage](#usage)`;
  }

  if (data.credits !== ''){ 
    stringTOC += `
    
  [Credits](#credits)`;
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

  [Questions](#questions)
  
  `;
  }

  return stringTOC;
  
};

const generateInstallation = data => {
 

  if(data.installation !== ''){
    let stringInstallation = `
  ---
  ## Installation`;
   
    let tmpString = data.installation;
    let tmpArray = tmpString.split(";");
   
    let i = 0;
   
    tmpArray.forEach(element => {
      i++;
    
      stringInstallation += `

      ${i}. ${element} `;
  
    });
 
  return stringInstallation;

  };

};

const generateUsage = data => {

  if(data.usage !== ''){
    let stringUsage = `---
  ## Usage`;
  
    let tmpString = data.usage;
    let tmpArray = tmpString.split(";");

    let i = 0;

    tmpArray.forEach(element => {
      i++;
  
      stringUsage += `

      ${i}. ${element} `;
 
    });

  return stringUsage;

  };

};

const generateCredits = data => {
  if(data.credits !== ''){
    let stringCredits = `---
  ## Credits`;
  
    let tmpString = data.credits;
  
    let tmpArray = tmpString.split(";");
 
    let i = 0;

    tmpArray.forEach(element => {
      i++;
     
    
      stringCredits += `

      ${i}. ${element} `;
  
    });
   
  return stringCredits;

  };
 
};

const generateFeatures = data => {
  if(data.features !== ''){
    let stringFeatures = `---
  ## Features`;
  
    let tmpString = data.features;
  
    let tmpArray = tmpString.split(";");
 
    let i = 0;

    tmpArray.forEach(element => {
      i++;
     
      stringFeatures += `

      ${i}. ${element} `;
   
    });
   
  return stringFeatures;

  };
};

const generateContributing = data => {
  if(data.contributing !== ''){
    let stringContributing = `
  ---
  ## Contributing`;
  
    let tmpString = data.contributing;
    
    let tmpArray = tmpString.split(";");
    
    let i = 0;
  
    tmpArray.forEach(element => {
      i++;
  
      stringContributing += `

      ${i}. ${element} `;
 
    });
  
  return stringContributing;

  };
  
};

const generateTests = data => {
  if(data.tests !== ''){
    let stringTests = `---
  ## Tests`;
   
    let tmpString = data.tests;
    let tmpArray = tmpString.split(";");
    
    let i = 0;
  
    tmpArray.forEach(element => {
      i++;
      stringTests += `
      ${i}. ${element} `;  
    });
 
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
  

return strLanguages;
};

const generateScreenShot = data => {

  if(data.screenShot !== ''){
    let stringScreenShot = `---
## Screenshot of ${data.title} in action
  ![](./images/${data.screenShot})
  
  `;
  
    

   

    return stringScreenShot
  };
  

}


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
---
${generateBadges(data)}
## Description
${data.description}
${generateFeatures(data)}
${generateTOC(data)}

${generateScreenShot(data)}



${generateInstallation(data)}
${generateUsage(data)}
${generateCredits(data)}
${renderLicenseSection(data)}
${renderLicenseBadge(data)}
${renderLicenseLink(data)}
${generateContributing(data)}
${generateTests(data)}

---
## Questions

If you have any questions about this project feel free to [email](${data.email}) me .  

To see the rest of my portfolio, visit [Github](https://github.com/${data.github}).
![](./images/GitHub-Mark-32px.png)

Below is a graphic displaying my most used languages on github.

![Top Langs](https://github-readme-stats.vercel.app/api/top-langs/?username=${data.github})

`;
}

module.exports = generateMarkdown;
