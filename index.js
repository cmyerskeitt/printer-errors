function printerError(s) {
    let colors = ['a','b','c','d','e','f','g','h','i','j','k','l','m']
    let count = s.length
    let errors = 0
    for (let i = 0; i < s.length; i++){
     if(!colors.includes(s[i])){
        errors += 1 
      }
     }
     return `${errors}/${count}`
}