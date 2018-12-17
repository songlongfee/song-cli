#!/usr/bin/env node
/* 加入上述命令使其成为全局命令 */

const program = require('commander');
const fs =require('fs');
const chalk = require('chalk'); //样式设置

program
//设置版本信息，自动给当前命令添加一个 -V, --version的参数
//通过flags修改默认的 -V
.version('1.2.2', '-v, --version')

program
.command('create <project_name>')
.description('命令行创建项目')
.action(function (project_name) {
  console.log(chalk.green(`开始创建 ${project_name}`));
  
  let projectPath = process.cwd() + '/' + project_name;
  if(fs.existsSync(projectPath)) {
    console.log(chalk.red(`${project_name} 已经存在`));
    return;
  }
  fs.mkdirSync(projectPath);
  fs.writeFileSync(projectPath+ '/index.html');
  fs.mkdirSync(projectPath+ '/css');
  fs.mkdirSync(projectPath+ '/js');

  console.log(chalk.green(`${project_name} 创建完成`))
})

program.parse(process.argv);

/* 
创建cmd文件，修改执行目录到当前路径，将cmd目录设置为系统环境变量，或放到系统npm目录下
 */
/* 
cli发布 npm login   npm publish
 */