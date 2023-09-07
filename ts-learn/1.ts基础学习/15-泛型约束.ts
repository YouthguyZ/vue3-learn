{
  // <T> => 声明泛型
  // :T  => 使用泛型
  // 函数调用时再方法名后加 <类型> 对传入值进行类型约束 

  // 对泛型进行约束
  // function getId<T>(val:T){
  //   console.log(val.length); // 为对声明 和使用时进行约束 则 T 上不存在 length 属性
    
  //   return val
  // }

  function getId<T>(val:T[]){
    // console.log(val.length); // 未对泛型使用时进行约束 则 T 上不存在 length 属性
    console.log(val.length);
    return val
  }
  const a = getId([123,12])  // function getId<number>(val: number): number
  console.log(a);
  
  // 收缩泛型： 泛型的约束
  // 通过 `extends` 关键字使用该接口，为泛型(类型变量)添加约束

  interface IAdd{
    length:number
  }
  function add<T extends IAdd> (value:T){
    console.log(value.length);
    return value
  }
  console.log(add<string>("1132"));




  
  
  
}