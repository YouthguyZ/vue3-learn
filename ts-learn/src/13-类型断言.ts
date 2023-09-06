{
  // 类型断言 :强行推断获取到的结果类型
  // 有时候你会比 TS 更加明确一个值的类型，此时，可以使用类型断言来指定更具体的类型
  // const div = document.createElement('a')

  const d = document.getElementById('a') as HTMLAnchorElement // as 已知是什么类型之后直接
  console.log(d);
  
}