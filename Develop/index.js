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
        type: 'input',
        name: 'features',
        message: 'Enter any features you want to highlight. Put a ";" at the end of each feature. (Enter for none)',
        validate: installationInput => {
            if(installationInput) {
                return true;
            } else {
                //console.log('Please enter your installation steps!');
                return false;
            }
        }  
    },
    {
        type: 'input',
        name: 'screenShot',
        message: 'Enter the name of your screen shot file.  (Enter for none)',
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
        name: 'installation',
        message: 'Enter installation steps. Put a ";" at the end of each step. (Enter for none)',
        validate: installationInput => {
            if(installationInput) {
                return true;
            } else {
                //console.log('Please enter your installation steps!');
                return false;
            }
        }  
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Enter how to use this project. Put a ";" at the end of each step. (Enter for none)',
        validate: usageInput => {
            if(usageInput) {
                return true;
            } else {
                //console.log('Please enter how to use this project!');
                return false;
            }
        }  
    },
    // {
    //     type: 'input',
    //     name: 'link',
    //     message: 'Enter the GitHub link to your project. (Required)',
    //     validate: linkInput => {
    //         if(linkInput) {
    //             return true;
    //         } else {
    //             console.log('Please enter your GitHub link!');
    //             return false;
    //         }
    //     }  
    // },
   
    {
        type: 'input',
        name: 'contributing',
        message: 'How can people contribute to the project? Put a ";" at the end of each way. (Enter for none)',
        validate: contributingInput => {
            if(contributingInput) {
                return true;
            } else {
                //console.log('Please enter how you want people to contribute!');
                return false;
            }
        }  
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Enter tests that can be conducted. Put a ";" at the end of each test. (Enter for none)',
        validate: testsInput => {
            if(testsInput) {
                return true;
            } else {
                //console.log('Please enter the tests that can be done!');
                return false;
            }
        }  
    },
    // {
    //     type: 'input',
    //     name: 'questions',
    //     message: 'Enter how you want questions asked. (Required)',
    //     validate: questionInput => {
    //         if(questionInput) {
    //             return true;
    //         } else {
    //             console.log('Please enter how you want questions asked!');
    //             return false;
    //         }
    //     }  
    // },
    {
        type: 'input',
        name: 'credits',
        message: 'Are there any sources you would like to credit? Put a ";" at the end of each. (Enter for none)',
        validate: creditsInput => {
            if(creditsInput) {
                return true;
            } else {
                //console.log('Please enter the tests that can be done!');
                return false;
            }
        }  
    }
];

const debugQuest = [
    {
        type:'input',
        name: 'title',
        message: 'What is the name of the project on github? (Required)',
        validate: nameInput => {
            if(nameInput) {
                return true;
            } else {
                console.log("Please enter your Project's name!");
                return false;
            }
        }
    }

]

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
    
        
        title: 'Readme_Architect',
        github: 'tgtiburon',
        email: 'tg.tiburon@gmail.com',
        description: 'This project allows the user to create a professional Readme for any project they want.  ',
        features: 'Generates a complete README from the commandline;Links directly to your repository;Links directly to your License',
        screenShot: "ReadME_Architect.PNG",
        languages: [ 'JavaScript', 'Node.js', 'JQuery', 'Bootstrap', 'CSS', "HTML" ],
        license: [ 'MIT' ],
        installation: 'Clone from my git repository;install inquirer;Type node index.js in the command line',
        //installation: '',
        usage: 'Type node index.js from the develop directory;Answer the questions as detailed as possible',
        //usage: '',
        contributing: 'Contact me via my email;Post an issue on the repository.',
        //constributing: '',
        tests: 'Run test 1;Run test2;Run Test 3',
        //tests: '',
        credits: 'img.shields.io'
        //credits: ''

}

const mockData2 = {
    
        
    title: 'Weather_Watcher',
    github: 'tgtiburon',
    email: 'tg.tiburon@gmail.com',
    description: "A weather website that lets the user search for any city in the world's weather.  It also stores the last 8 searches to make rescanning your favorite cities easier. ",
    features: 'Working with arrays of objects;Creating a dynamic list of buttons;Buttons re-organize based on which button clicked;Working with complicated logic;Dynamically created web elements;Responsive design;Moment.js',
    screenShot: "Weather_Watcher.PNG",
    languages: [ 'JavaScript', 'JQuery', 'Bootstrap', 'CSS', "HTML" ],
    license: [ 'MIT' ],
    installation: 'Run at https://tgtiburon.github.io/Weather_Watcher/;or clone from my git repository and run locally',
    //installation: '',
    usage: 'Type any city in the Search for a City input box;It will keep your last 8 searches.',
    //usage: '',
    contributing: 'Contact me via my email;Post an issue on the repository.',
    //constributing: '',
    tests: 'Run test 1;Run test2;Run Test 3',
    //tests: '',
    credits: 'img.shields.io;Open Weather API'
    //credits: ''

}



    // TODO: Create a function to initialize app
function init() {

    inquirer
  
   // .prompt(questions)
    .prompt(debugQuest)
    
   
    .then(readMeAnswers => {
        
        console.log(readMeAnswers)
        console.log("it worked")
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

