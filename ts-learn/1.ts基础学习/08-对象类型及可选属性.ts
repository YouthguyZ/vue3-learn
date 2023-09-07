{

  // 对象类型约束

  // 对象类型别名 
  type person = {
    name?:string,
    age:number,
    girlfriend?:string // 可选属性？
    say(val?:string):void
  }
  let obj:person = {
    name:'tom',
    age:66,
    say(val){
      console.log('你好：',val);
    }
  }
  // 别名类型
  let man:person = {
    name:'tom',
    age:66,
    say(val){
      console.log('你好：',val);
    }
  }
  obj.say('嘎嘎')
  // 可能未定义 
  // 1、判断是否有值 在执行方法
  if(obj.girlfriend){
    obj.girlfriend.slice()
  }
  // 2、判断是否有值 在执行方法
  // 短路语句 左边为 true 右边才执行
  obj.girlfriend && obj.girlfriend.slice()
  // 3、判断是否有值 在执行方法
  // 可选链操作 加问号
  obj.girlfriend?.slice() // 
  man.say('男人')
}
