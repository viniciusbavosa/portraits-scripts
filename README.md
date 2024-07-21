# Portraits - Automation script


  ![Static Badge](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
  ![Static Badge](https://img.shields.io/badge/dotenv-D0D302?style=for-the-badge&logo=.env&logoColor=D0D302&labelColor=black)


  This is an automation script for **[Portraits](https://github.com/viniciusbavosa/Portraits)** project. Developed with [Node](https://nodejs.org/pt) and [Simple Git](https://github.com/steveukx/git-js#readme).

  This script watches for changes in a specified directory. When a change is detected, it creates a new object and inserts it into the `FILE_TOBE_READ` file. Using [Simple Git](https://github.com/steveukx/git-js#readme), it automatically commits and pushes the changes to the remote repository.


#### Content

- [Installation](#installation)
- [How to use](#how-to-use)
- [License](#license)
- [Credits](#credits)


#### How to use

1. Clone repo:

    - `git clone https://github.com/viniciusbavosa/portraits-node-script`

2. Install dependencies with pnpm

    - `pnpm install`

3. Set environment variables

    - Use .env-example in the repository root as an example
    - Create a .env file with the environment variables from .env-example  

4. Start application with pnpm -> `pnpm run watch`

#### License

This repository is licensed under the **MIT License**. Be sure to read and agree to the license terms before using its content.

#### Credits

Thanks to [João Genari](https://github.com/genari-j) for his help during the development of this project and for providing the template for this README.