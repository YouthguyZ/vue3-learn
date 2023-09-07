{
  // 泛型接口
  interface IStudent<T> { // 添加泛型
    name:T
    age:number
    gender:string
    hobby:T[]
  }
  // 
  const QAQ :IStudent<string> ={
    name:"132",
    age:2324,
    gender:'w',
    hobby:['吃酒','喝烟']
  }
  console.log(QAQ);

  const arr :number[] = [1,2]
  const arr2 :Array<string> = ["1","2"] // 数组类型使用 这个就是接口加泛型
  console.log(arr,arr2);
  
  
}