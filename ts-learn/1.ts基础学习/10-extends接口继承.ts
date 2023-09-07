{
  // 接口类型 interface 对象类型约束
  // interface 只适用于对像类型
  interface IPerson {
    name:string
    age:number
    say:(val:string)=>void
  }

  let people:IPerson = {
    name:'sdaf',
    age:56,
    say:(val)=>{
      console.log(val);
      
    }

  }
  people.say('sorry')

  // interface 与 type 很相似 区别点
  // 1.定义方式不同 type 需要 = 号 
  // interface list {
  //   name:string
  //   age:number
  // }
  // type lists = {
  //   name:string
  //   age:number
  // }
  // 2.type 更加灵活 可以定义跟多的数据类型 更加的灵活
  type arrType = (number|string)[]
  let arr:arrType=[1,2,3,'5']
  console.log(arr);
  
  // 接口继承 继承上一个接口的一些属性 再增加一些额外的属性 关键字：extends
  interface IStudent extends IPerson {
    gender:string
    sleep:(val:number)=>void
  }

  const QaQ :IStudent ={
    name:'tt',
    age:22,
    gender:'man',
    say:(val)=>{
      console.log(val);
      
    },
    sleep:(v)=>{
      console.log('准备睡：'+v+'个小时');
    }
  }
  QaQ.sleep(799)
  // type 可不可以实现 interface 的继承
  type person = {
    name:string
    age:number
  }
  type student = {
    gender:string
    study:(val:string)=>void
  } & person  // 使用 & 连接需要的类型 可以实现继承效果   | 可以或
  const yoy:student = {
    gender:'man',
    age:45,
    name:'we',
    study:(val)=>{
      console.log('学习:'+val);
      // return val
      
    }
  }
  console.log(yoy.age);
  yoy.study('数学')
  
}
