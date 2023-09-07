{
  // 接口类型 interface 对象类型约束
  // interface 只适用于对像类型
  interface Iperson {
    name:string
    age:number
    say:(val:string)=>void
  }

  let people:Iperson = {
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
  

}
