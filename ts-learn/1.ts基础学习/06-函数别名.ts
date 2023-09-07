{
  // 设置函数的参数类型、返回值类型
  // 函数类型 function ts要求参数必须约束

  // function add(a: number, b: number): number{} // 函数体
  function add(a:number,b:number):number{
    return a+b
  }
  const num = add(1,6)
  // add(1,'7')
  console.log(num);
  const fn = (val:number):string=>{
    return val+'100'
  }
  fn(100)
  // 函数的别名 一般都是给箭头函数和函数表达式使用
  // 函数声明式不可用 function add(){} 
  type fnType = (a:number,b:number)=>number

  let Sub:fnType = (a,b)=>{ // 函数别名
    return a + b
  }
  Sub(8,10)
  console.log(Sub(8,10));
  
}