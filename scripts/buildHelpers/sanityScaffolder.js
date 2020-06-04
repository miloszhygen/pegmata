#!/usr/bin/env node



  /*

  0. check who is logged in
  x 1. create studio with given project name
  x 2. create develop dataset

  x 3. update package json inside studio to also have env.development.dataset = develop
  x 3. A) install react-icons

  x 4. add schemas - from default schema folder
    - site settings
    - articles
  n NO --> 5. populate articles and settings
  6. make sure web has the project id

  7. make sure that the sanity project is build on root of selected folder and not in TEST folder

  */





// shell commands in node
const shell = require('shelljs')
// Make log output beautyfull
const colors = require('colors')
// file utlilities
const { writeFileSync, readFileSync } = require("fs")
const path = require('path')

const parentDir = path.resolve(process.cwd());
const sanityStudioPath = `${parentDir}/TEST/sanity`;

// Global variables
const SANITY_PROJECT_NAME = 'MiloszTester';
const DATASET_VISIBILITY = 'public';


// Helper to echo strings in the terminal window
function spitt(msg) {
  shell.echo(msg);
}

function execCmd(cmd, silent) {
  /*
    A helper for executing shell commands
    VERBOSE: execCmd('git status')
    SILENT: execCmd('git status', true)
  */
  return shell.exec(cmd, { silent })

  // // Running in test-mode? Uncomment code belove and comment out "return shell.exec(cmd, { silent })" above
  // console.log(cmd);
  // return {
  //   code: 0
  // }
}

/*

  This is the script that runs the setup of the selected scaffold

  eiter
  npm some-name
  - or -
  npx some-nam
*/



/*

  TODO
  - run selected scaffolder

*/





/*

  SANITY

  # INIT
  // Install our command line tools
  npm install @sanity/cli -g

  // Create your Sanity project root directory
  mkdir projects && cd projects

  // Create a new Sanity project
  sanity init

  // Read the documentation https://www.sanity.io/docs

  # Update content


  # CREATING DATASET
  https://www.sanity.io/docs/dataset



*/





const runSanityInit = async () => {

  spitt('** Create sanity project **'.yellow)

  // Run sanity tests
  spitt('\nCreate project'.yellow);

  await execCmd(`sanity init -y --create-project "${SANITY_PROJECT_NAME}" --dataset production --output-path ${sanityStudioPath}`);


  spitt('\nSANITY BUILD - OK!\n'.green);
}



const updateSanityWithSchemaAndDeskStructure = async () => {
  // console.log(sanityStudioPath.blue);
  // console.log(`copy templates to ${sanityStudioPath}`.blue)
  const rootPath = 'scaffolders/gatsby_sanity_figma/sanity'
  spitt('\nCopy schemas'.green);
  await shell.cp('-R', `${rootPath}/schemas`, `${sanityStudioPath}`);

  spitt('Copy deskStructure.js'.green);
  await shell.cp('-R', `${rootPath}/deskStructure.js`, `${sanityStudioPath}`);

  spitt('\nDone updating studio'.blue);
}





const updatePackageJson = async () => {
  spitt('\nUpdate SANITY.json'.green);

  // TDOO: FIX PATH
  const sanityJsonFile = path.resolve(`${sanityStudioPath}/sanity.json`)
  const sanityJson = await readFileSync(sanityJsonFile)
  const json = JSON.parse(sanityJson.toString())

  // console.log(json);
  // console.log(json.env.development );
  json.env.development.api = {
    "dataset": "develop"
  }

  json.parts.push({
    "name": "part:@sanity/desk-tool/structure",
    "path": "./deskStructure.js"
  })

  const data = JSON.stringify(json, null, 2)

  await writeFileSync(sanityJsonFile, data)

  spitt('\nUpdate Sanity.json COMPLETE'.blue);
}





const addDatasetAndModulesAndDeployDataset = async () => {

  spitt('\nNevigate into stodio'.yellow);
  await shell.cd(sanityStudioPath)

  spitt('\nCreate develop dataset'.yellow);
  await execCmd(`sanity dataset create develop --visibility ${DATASET_VISIBILITY}`)

  spitt('\nInstall necessary dependencies'.yellow);
  await execCmd('npm install react-icons')
  await execCmd('npm install')

  spitt('\nDeploying sanity dataset'.yellow);
  await execCmd('sanity graphql deploy --dataset develop --playground')

}



/*
    TODO:
    NOTES after succcessfull scaffold


    remoember to publish siteSettings and add an article to test the gatby build

*/


const engage = async () => {

   await runSanityInit()
   await updateSanityWithSchemaAndDeskStructure()
   await updatePackageJson()
   await addDatasetAndModulesAndDeployDataset()

}



engage()