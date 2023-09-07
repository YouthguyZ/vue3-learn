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
  
}