{
  // 联合类型  可以有多个不同类型数据
  let arr:(number|string)[] = ['1','3',5]
  // 小括号包裹起来
  console.log(arr);

  let timer:number|null = -1 
  timer = setTimeout(() => {
    
  }, 100);
  console.log(timer);// timer 为数字字面量 number 3
  
  
  
}