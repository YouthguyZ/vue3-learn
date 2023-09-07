{
  // viod 不需要返回值的函数
  // 如果没有返回值 ts 会自己推断为 undefined

  const say= (val:string):void=>{
    console.log(val);
  }
  let sayhi = say('wtf')
  console.log(sayhi); // 打印的是返回值 没有 return 值为 undefined
  
  // 函数参数 可选参数
  // 如果没有参数 就可选 用 ？
  // 必传参数必须位于可选参数之前   可选参数后不可以再出现必选参数
  // （符合常识）
  const play = (name?:string,habby?:string)=>{
    console.log(name,habby);
    
  }
  play('邵哥','吃肉')
  play('邵哥')
}
