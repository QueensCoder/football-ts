# football-ts

set up config

    npm init -y
    tsc --init
    git init

    npm i typescript concurrently tsc nodemon
    (typescript is not globally installed)

    update scripts setting in package json by adding

        "start:build": "tsc -w",
        "start:run": "nodemon build/index.js",
        "start": "concurrently npm:start:*"

    inside of tsconfig.json

        update inputDir and outputDir
        input is ./src output is ./build

        make an index.ts and add console.log('anything')

        npm start - if fails exit nodemon and run again, first compile might cause file to build after nodemon tries to read index.js
