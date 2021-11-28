// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');



// TODO: Create an array of questions for user input
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
        name: 'description',
        message: 'Provide a description for your project:',
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
        choices : ['JavaScript', 'HTML', 'CSS', 'ES6', 'JQuery', 'Bootstrap', 'Node']
    },

    {
        type: 'input',
        name: 'link',
        message: 'Enter the GitHub link to your project. (Required)',
        validate: linkInput => {
            if(linkInput) {
                return true;
            } else {
                console.log('Please enter your GitHub link!');
                return false;
            }
        }  
    },

    {
        type: 'input',
        name: 'installation',
        message: 'Enter installation steps. (Required)',
        validate: installationInput => {
            if(installationInput) {
                return true;
            } else {
                console.log('Please enter your installation steps!');
                return false;
            }
        }  
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Enter how to use this project. (Required)',
        validate: usageInput => {
            if(usageInput) {
                return true;
            } else {
                console.log('Please enter how to use this project!');
                return false;
            }
        }  
    },
    {
        type: 'input',
        name: 'link',
        message: 'Enter the GitHub link to your project. (Required)',
        validate: linkInput => {
            if(linkInput) {
                return true;
            } else {
                console.log('Please enter your GitHub link!');
                return false;
            }
        }  
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
        name: 'contributing',
        message: 'How can people contribute to the project?(Required)',
        validate: contributingInput => {
            if(contributingInput) {
                return true;
            } else {
                console.log('Please enter how you want people to contribute!');
                return false;
            }
        }  
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Enter tests that can be conducted. (Required)',
        validate: testsInput => {
            if(testsInput) {
                return true;
            } else {
                console.log('Please enter the tests that can be done!');
                return false;
            }
        }  
    },
    {
        type: 'input',
        name: 'questions',
        message: 'Enter how you want questions asked. (Required)',
        validate: questionInput => {
            if(questionInput) {
                return true;
            } else {
                console.log('Please enter how you want questions asked!');
                return false;
            }
        }  
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

    return new Promise((resolve, rejects) => {
        // code is pending while waiting for response
        fs.writeFile(fileName, data, err => {
            // if there is an error reject the promise
            // will trigger the .catch of the promise
            if(err) {
                // return out of function to make sure promise does 
                // not accidently resolve
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



// mockdata
const mockData = {
    
        title: 'Readme Architect',
        github: 'https://github.com/tgtiburon',
        description: 'This is an app that can automatically generate a README.MD file for any project.',
        languages: [ 'JavaScript', 'HTML', 'CSS', 'ES6', 'JQuery', 'Bootstrap', 'Node' ],
        link: 'https://tgtiburon.github.io/Readme_Architect/',
        installation: '1.Do this one thing.  2.Do that other thing.  3. Do this too.',
        usage: 'Type node index.js in the commandline and answer the questions',
        license: [ 'Academic Free License V3.0' ],
        contributing: 'Contribute by posting on the bug report forum.',
        tests: '1. Do this one test.  2. Do this other test.  3 Then do this test.',
        questions: 'tg.tiburon@gmail.com, or post on the bug forum on the github page'    

}



    // TODO: Create a function to initialize app
function init() {

    inquirer
    //.prompt([questions])
    .prompt(questions)
   
    .then(readMeAnswers => {
        //return generatePage(readMeData);
        console.log(readMeAnswers)
        console.log("it worked?")
        //return generateMarkdown(readMeAnswers);
        // DEBUG 
        // DEBUG
        return generateMarkdown(mockData);

    })
    .then(pageMD => {
        //console.log("File Created");

        return writeToFile("Readme.md", pageMD);
        
    })
    .then(writeFileResponse => {
        console.log(writeFileResponse);
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

