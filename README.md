# Image Processing API

This project is about displaying an image from group of images. the client can choose the image to preview it with its original dimension - stock image - or he/she can specify a width and a length of the image and the image will be displayed with these values.

In this project we will use typescript, express, sharp, and jasmine for tests, and many other packages.

## Table of Contents

- [Image Processing API](#image-processing-api)
  - [Table of Contents](#table-of-contents)
  - [Getting Start](#getting-start)
  - [Scripts](#scripts)
  - [Work flow](#work-flow)
    - [Initialize the project](#initialize-the-project)
    - [Configure TypeScript](#configure-typescript)
    - [configuring ESlint and Prettier](#configuring-eslint-and-prettier)
    - [Installing Jasmine](#installing-jasmine)
    - [Installing supertest](#installing-supertest)
    - [Installing Sharp](#installing-sharp)
    - [Credits](#credits)

## Getting Start

- Install appropriate dependencies.
- Write appropriate unit tests.
- Write the code.
- review the code against problems.
- **brief about using the API**

  > If you want to try by yourself, GO AHEAD. Just press any button above, then manipulate the image name in URL which is after = sign, but Please stick with provided images, otherwise you will receive an error **you can find images name in the main page in each photo description.**

  > if you wish to display any image provided in main page or in the first method. you have to pass a width and a height parameters in the URL.

  > the URL will be in this structure: <http://localhost:5500/requestedImage/?imageName=winnats&width=1000&height=1000>

  > If the requested image stored in project files, it will displayed as it is, but if you request it with unavailable width and height parameters, we will do some work and display the image for you and save a copy of requested image in project folder called thumbnails located in assets folder.

## Scripts

1. Compiling typescript and run tests: `"build": "rimraf dist && copyfiles src/*.html ./dist/ && npx tsc && jasmine",`

- I used rimraf to autoDelete dist folder every time I run the script.
- I used copyfiles dependency to move the html files to dist folder.

2. Eslint to check problems with code: `"eslint": "eslint . --fix"`.
3. Prettier to format my code:`"prettier": "prettier . --write"`.
4. `"lints": "eslint . --fix && prettier . --write"`. to run eslint with prettier in same time
5. The main script `"start": "node dist/index"` to run the code after compiling.

```
"scripts": {
    "start": "node dist/index",
    "dev": "rimraf dist && copyfiles src/*.html ./dist/ && npx tsc && jasmine && nodemon dist/index",
    "build": "rimraf dist && copyfiles src/*.html ./dist/ && npx tsc && jasmine",
    "nodemon": "nodemon --watch *.ts --exec ts-node ./src/index.ts",
    "eslint": "eslint . --fix",
    "prettier": "prettier . --write",
    "lints": "eslint . --fix && prettier . --write"
```

## Work flow

### Initialize the project

- Check nodejs version. by running `node -v` through the terminal.
- Create new empty folder and create the `package.json` file by running the following command `npm init -y`.
- Add the dependencies required for this project, including Express, TypeScript, Jasmine, Eslint, and Prettier, by running the its commands which can be found through each dependency documentation, for example this how to install type script ...

  ```
    npm i -D typescript @nodes/typescript @ ts-node
  ```

### Configure TypeScript

running `tsc --init` from terminal will create a new `.tsconfig` file created for you which contain all the needed configuration for you so we will changed it a little bit to match what we need.

my config is

```
{
  "compilerOptions": {
    "target": "ES5",
    "lib": ["ES5", "DOM"],
    "module": "commonjs",
    "rootDir": "./src",
    "allowJs": true,
    "outDir": "dist",
    "esModuleInterop": true,
    "forceConsistentCasingInFileNames": true,
    "strict": true,
    "noImplicitAny": true,
    "skipLibCheck": true
  },
  "include": ["./src"],
  "exclude": ["node_modules", "dist", "spec"]
}
```

### configuring ESlint and Prettier

- We install these dependencies as development as we need them during development only.
- Create appropriate configuration for each dependency
- for hint this is my eslint config file

  ```
  {
  "env": {
    "browser": true,
    "es2021": true,
    "node": true
  },
  "extends": [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier"
  ],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaVersion": "latest",
    "sourceType": "module"
  },
  "plugins": ["@typescript-eslint"],
  "rules": {
    "no-var": "error",
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": "off",
    "semi": "error",
    "indent": ["error", 2, { "SwitchCase": 1 }],
    "no-multi-spaces": "error",
    "space-in-parens": "error",
    "no-multiple-empty-lines": "error",
    "prefer-const": "error"
  }
  }
  ```

### Installing Jasmine

- It is the framework which we will use it for testing our code.

> Jasmine is a behavior-driven development framework for testing JavaScript code. It does not depend on any other JavaScript frameworks. It does not require a DOM. And it has a clean, obvious syntax so that you can easily write tests.

- It will installed as devDependency and configure it as mentioned in its [documentation](https://jasmine.github.io/pages/docs_home.html)

- Install a helper dependency for jasmine called **jasmine-spec-reporter** which responsible for _Real time console spec reporter for jasmine testing framework_.

### Installing supertest

**Benefits of Endpoint Testing**

- Confirms that the server is working.
- Confirms that endpoints are configured properly.
- More efficient than manual testing.

> Endpoint testing is not native to Jasmine and requires a third-party framework, like Supertest to test the status of responses from servers

- So we need to install supertest by running `npm i supertest` and Add type definition to allow the code to compile without TypeScript errors `npm i --save-dev @types/supertest.`

### Installing Sharp

- It is the framework which we will use for resizing images.

  > - The typical use case for this high speed Node.js module is to convert large images in common formats to smaller, web-friendly JPEG, PNG, WebP, GIF and AVIF images of varying dimensions.
  > - Resizing an image is typically 4x-5x faster than using the quickest ImageMagick and GraphicsMagick settings due to its use of libvips.
  > - Color spaces, embedded ICC profiles and alpha transparency channels are all handled correctly. Lanczos resampling ensures quality is not sacrificed for speed.
  > - As well as image resizing, operations such as rotation, extraction, compositing and gamma correction are available.

- Install the framework with `npm i sharp` and install its types `npm i -D @types/sharp`.

- Here is a hint from my code

  ```
  (async function () {
      try {
        const image = await sharp(`${imagePath}/${imageExtension}`).resize(parseInt(imageWidth), parseInt(imageHeight)).toFile(`${thumbnailsPath}/${imageName}_${parseInt(imageWidth)}x${parseInt(imageHeight)}.jpg`);
        console.log(image);
      } catch (error) {
        console.log(error);
      }
    })();
  ```

### Credits

- Thanks to Udacity and its team. they are very helpful 😍
- Special thank for Eng. Mahmoud Ali Kassem.
- Images was downloaded from [pixabay](https://pixabay.com/)
