{
  // 需求：定义一个 getId 方法 要求传入任意值类型 返回值也是这个类型
  // 使用泛型解决问题

  // <T> => 声明泛型
  // :T  => 约束泛型
  // 函数调用时再方法名后加 <类型> 对传入值进行类型约束 

  // function getId(val:number|string):number|string{
  //   return val

  // }
  function getId<T>(val:T){
    return val
  }
  const a = getId<number>(123)  // function getId<number>(val: number): number
  console.log(a);


  // 简化写法 不用再调用时   约束传入参数类型 ts 会自动类型推断 
  let b = getId('q4tq')  // function getId<"q4tq">(val: "q4tq"): "q4tq"  字面量类型
  console.log(b);
  
  
  
}