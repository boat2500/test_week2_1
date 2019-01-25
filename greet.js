function greet(name){

    

    if(name == null){
        return("Hello, my friend.")
    }
    
    else if(Array.isArray(name)){
        var count = name.length;
        if(count > 2){
            
            return(`Hello, ${name[0]}, ${name[1]}, and ${name[2]}.`)
        }else
            return("Hello, "+ name.join(" and ") +".")
    }

    else if(name == name.toUpperCase()){
        return("HELLO "+ name+ "!")
    }
    else
    return("Hello, "+ name+ "."); //สามารถเขียนแบบย่อด้วย code ว่า  return('Hello, "${name}.')
}



module.exports = greet;