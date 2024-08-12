

let info = new Map(
    [
       [1,"harsh shrama"],
       [2,"ridhi patel"],
       [3,"sonu shukla"]
   ]
   )
   
   console.log(info)
   info.set(4,"mansi Amge")
   info.set(5,"vaibhav parate")
   console.log(info)
   
   console.log(info.get(1))
   console.log(info.get(2))
   console.log(info.get(3))
   console.log(info.get(4))
   console.log(info.get(5))
   
   console.log(info.has(6)) //false
   
   info.delete(3)
   console.log(info)
   
   
   