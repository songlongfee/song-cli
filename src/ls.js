const program = require('commander');
const fs =require('fs');
const chalk = require('chalk'); //样式设置

program
.arguments('<dirname>')
.action(function (dirname) {
  console.log(chalk.bgGreen(dirname));
  let files = fs.readdirSync(dirname);
  console.log(files);
})

process.argv.push(__dirname);

program.parse(process.argv);
