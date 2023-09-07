{
  // 联合类型 : 可以有多个不同类型数据
  // 类型别名：定义 type
  type arrType = (number|string)[] // 类型别名
  let arr: arrType = ['1','3',5]
  // 小括号包裹起来
  console.log(arr);

  type itemtype = number|null // 类型别名 下面需要注解的时候可以用
  let timer:itemtype= -1 
  timer = setTimeout(() => {
    
  }, 100);
  console.log(timer);// timer 为数字字面量 number 3
  
  
  
}