// If there is no license badge, returns an empty string
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

// If there is no license link, return an empty string
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

// If there is no license, returns an empty string
function renderLicenseSection(license) {
  return license === "None"
  ? ""
  : `## License
  
  This project is licensed by: [${license}](${renderLicenseLink(license)})`;
}

// Generates a markdown for the README
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
//Allows index.js to access this file
