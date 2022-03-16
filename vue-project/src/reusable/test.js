const arrayOfObject = [
    {
        name: "thao",
        age: "20"
    },
    {
        name: "linh",
        age: "20"
    },
    {
        name: "ngoc",
        age: "30"
    },
    {
        name: "linh",
        age: "40"
    },
    {
        name: "lan",
        age: "50"
    }
]
let keywordFind = "L"
let filterObjectData = arrayOfObject.filter(function(obj){
    for(key in obj){
        if(obj[key].includes(keywordFind.toLowerCase())){
            //add this object to the filtered array
            return obj;
            }
    }
})

console.log(filterObjectData)