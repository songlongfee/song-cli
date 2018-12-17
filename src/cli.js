#!usr/bin/env node
/* 成为全局命令 */

const program = require('commander');
const fs =require('fs');
const chalk = require('chalk'); //样式设置

program
.command('create <project_name>')
.description('创建项目')
.action(function (project_name) {
  console.log(chalk.yellow(`即将创建项目 ${project_name}`));
  
  let projectPath = __dirname + '/' + project_name;
  if(fs.existsSync(projectPath)) {
    console.log(chalk.red(`${project_name} 已经存在`));
    return;
  }
  fs.mkdirSync(projectPath);
  fs.writeFileSync(projectPath + '/index.html');
  fs.mkdirSync(projectPath + '/css');
  fs.mkdirSync(projectPath + '/js');

})

program.parse(process.argv);

/* 
创建cmd文件，修改执行目录到当前路径，将cmd目录设置为系统环境变量，或放到系统npm目录下
 */
/* 
cli发布
 */