export default function map(array,callback){
    let result=[]
    array.forEach(item=>{
        result.push(callback(item))
    })
    return result
}
