// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {

  switch(license) {
    case "MIT":
      return 'https://img.shields.io/badge/License-MIT-yellow.svg';
    case "ISC":
      return 'https://img.shields.io/badge/License-ISC-blue.svg';
    case "Apache":
      return 'https://img.shields.io/badge/License-Apache%202.0-blue.svg'
    default:
      return "";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  
  switch(license) {
    case "MIT":
      return 'https://opensource.org/licenses/MIT';
    case "ISC":
      return 'https://opensource.org/licenses/ISC';
    case "Apache":
      return 'https://www.apache.org/licenses/LICENSE-2.0';
    default:
      return "";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return license === "None"
  ? ""
  : `## License
  
  This project is licensed by: [${license}](${renderLicenseLink(license)})`;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}

  ## Description
  ${data.description}

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ${renderLicenseSection(data.license)}

  ## Contact Info
  [My Github](https://github.com/${data.username})
  ${data.email}
`;
}

module.exports = generateMarkdown;
