const program = require('commander');

program
//设置版本信息，自动给当前命令添加一个 -V, --version的参数
//通过flags修改默认的 -V
.version('1.0.0', '-v, --version')
//设置使用说明
.usage('使用说明')
//配置命令参数，<> 必传 [] 非必传
.arguments('<v>')
//设置option选项 -简写 --完整书写
.option('-a, --all', '查看所有', function () {
  // 调用该option处理的事情
  console.log('option -a')
})
.option('-n, --number <v>', '传入的一个数字', function (v) {
  console.log('传入的是: ' + v)
})
;

program
.command('create <v>')
.description('创建新应用')
.usage('使用说明')
.action(function (v) {
  console.log('创建新应用: ' + v)
})
//解析当前命令行中的数据
program.parse(process.argv)
