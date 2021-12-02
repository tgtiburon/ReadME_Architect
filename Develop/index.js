// Packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');



// Questions to be asked by inquirer
const questions = [
    {
        type:'input',
        name: 'title',
        message: 'What is the name of the project? (Required)',
        validate: nameInput => {
            if(nameInput) {
                return true;
            } else {
                console.log("Please enter your Project's name!");
                return false;
            }
        }
    },

    {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub Username (Required)',
        validate: nameInput => {
            if(nameInput) {
                return true;
            } else {
                console.log('Please enter your gitHub Username!');
                return false;
            }
        }  
    },
   
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email address (Required)',
        validate: nameInput => {
            if(nameInput) {
                return true;
            } else {
                console.log('Please enter your email address!');
                return false;
            }
        }  
    },

    {
        type: 'input',
        name: 'description',
        message: 'Provide a description for your project. (Required)',
        validate: descriptionInput => {
            if(descriptionInput) {
                return true;
            } else {
                console.log('Please enter a description!');
                return false;
            }
        }  
       
    },

    {
        type: 'checkbox',
        name: 'languages',
        message: 'What did you build this project with? (Check all that apply)',
        choices : ['JavaScript', 'HTML', 'CSS', 'Express.js', 'JQuery', 'Bootstrap', 
                    'Node.js', 'React', 'Microsoft SQL Server', 'MySQL', 'Sequelize', 
                    'Prisma']
    },

    {
        type: 'checkbox',
        name: 'license',
        message: 'What license do you want for this project?',
        choices : ['Academic Free License V3.0', 'Apache license 2.0', 'Artistic license 2.0', 'Boost Software License 1.0', 
                    'BSD 2-clause "Simplified" license', 'BSD 3-clause "New" or "Revised" license', 'BSD 3-clause Clear license',
                    'Creative Commons license family', 'Creative Commmons Zero v1.0 Universal', 'Creative Commons Attribution 4.0',
                    'Creative Commons Attribution Share Alike 4.0', 'Do What the F*ck You Want to Public License', 
                    'Educational Community License v2.0', 'Eclipse Public License 1.0', 'Eclipse Public License 2.0', 'European Union Public License v3.0',
                    'GNU Affero General Public License 3.0', 'GNU General Public License family', 'GNU General Public License v2.0', 'GNU General Public License 3.0',
                    'GNU Lesser General Public License Family', 'GNU Lesser General Public License v2.1', 'GNU Lesser General Public License v3.0',
                    'ISC', 'LaTex Project Public License v1.3c', 'Microsoft Public License', 'MIT', 'Mozilla Public License 2.0', 'Open Software License 3.0',
                    'PostgreSQL License', 'SIL Open Font License 1.1', 'University of Illinois/NCSA Open Source License', 'The Unlicense', 
                    'zLib License']
    },
    {
        type: 'input',
        name: 'features',
        message: 'Enter any features you want to highlight. Put a ";" at the end of each feature. (Enter for none)',
       
    },
    {
        type: 'input',
        name: 'screenShot',
        message: 'Enter the name of your screen shot file.  (Enter for none)',
       
    },

  

    {
        type: 'input',
        name: 'installation',
        message: 'Enter installation steps. Put a ";" at the end of each step. (Enter for none)',
       
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Enter how to use this project. Put a ";" at the end of each step. (Enter for none)',
       
    },
 
    {
        type: 'input',
        name: 'contributing',
        message: 'How can people contribute to the project? Put a ";" at the end of each way. (Enter for none)',
       
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Enter tests that can be conducted. Put a ";" at the end of each test. (Enter for none)',
       
    },
   
    {
        type: 'input',
        name: 'credits',
        message: 'Are there any sources you would like to credit? Put a ";" at the end of each. (Enter for none)',
       
    }
];



/*  Function: writeToFile()  
    => writes the data to the readme
    args: fileName and data to be saved
    return: none
*/
function writeToFile(fileName, data) {

    return new Promise((resolve, rejects) => {
        // code is pending while waiting for response
        // add the path

        fileName = "../develop/dist/" + fileName
        fs.writeFile(fileName, data, err => {
            // if there is an error reject the promise
            // will trigger the .catch of the promise
            if(err) {
                // return out of function to make sure promise does 
                // not accidently resolve
                console.log(err);
                rejects(err);
                return;
            }
            // everything worked.  Resolve the promise and go to the .then()
            resolve({
                ok:true,
                message:'File created!'
            });
        });
    });


};



/*  Function: init()  
    => Asks inquirer questions
    args: none
    return: none
*/
function init() {

    inquirer
  
    .prompt(questions)
   
   
    .then(readMeAnswers => {
        
        return generateMarkdown(readMeAnswers);
       
    })
    // save the markdown file
    .then(pageMD => {
        
        return writeToFile("Readme.md", pageMD);
        
    })
    .then(writeFileResponse => {
        //console.log(writeFileResponse);
    })
    // error catching for inquirer
    .catch((error) => {
        if(error.isTtyError) {
            console.log("isTtyError");
            console.log("Prompty could not be rendered in current environment")

        } else {
            //Something went wrong
            console.log("Another type of error")
            
        }
    });


}

// Function call to initialize app
init();

