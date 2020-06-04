#!/usr/bin/env node


// shell commands in node
const shell = require('shelljs')
// Make log output beautyfull
const colors = require('colors')
// file utlilities
const { writeFileSync, readFileSync } = require("fs")
const path = require('path')

const parentDir = path.resolve(process.cwd());
const sanityStudioPath = `${parentDir}/TEST/`;


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

const runGatsbyInit = async () => {

  spitt('** Create Gatsby project **'.yellow)

  // Run sanity tests
  spitt('\nCreate project'.yellow);

  // await execCmd(`sanity init -y --create-project "${SANITY_PROJECT_NAME}" --dataset production --output-path ${sanityStudioPath}`);

  spitt(`removing node_modules if any`);
  await shell.rm('-rf', `scaffolders/gatsby_sanity_figma/web/node_modules`);
  await shell.rm('-rf', `scaffolders/gatsby_sanity_figma/web/public`);
  await shell.rm('-rf', `scaffolders/gatsby_sanity_figma/web/.cache`);


  spitt('\nCopy schemas'.green);
  await shell.cp('-R', 'scaffolders/gatsby_sanity_figma/web', `${sanityStudioPath}`);

  // spitt('Copy deskStructure.js'.green);
  // await shell.cp('-R', 'sanityContent/deskStructure.js', `${sanityStudioPath}`);

  spitt('\nDone updating studio'.blue);
  spitt('\nGATSBY BUILD - OK!\n'.green);


  spitt('\nNevigate into web'.yellow);
  await shell.cd(`${sanityStudioPath}/web`)


  spitt('\nInstall necessary dependencies'.yellow);
  await execCmd('npm install')

}



const engage = async () => {

  runGatsbyInit()
}

engage()




