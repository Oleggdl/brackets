module.exports = function check (str,bracketsConfig) {
    let j=0
    let open=0
    let close=0
    while (j<str.length) {
    console.log('str')
    console.log(str)
    let openIndex=-1
    let closeIndex=-1
    for (let i=0;i<bracketsConfig.length;i++) {
    if (bracketsConfig[i][0]===str[j]) {
    open++
    openIndex=j
    }
    else continue
    for (let p=j+1;p<str.length;p++) {
    if (bracketsConfig[i][0]===str[p] && bracketsConfig[i][0]!==bracketsConfig[i][1]) open++
    if (bracketsConfig[i][1]===str[p]) {
    close++
    closeIndex=p
    if (open>0 && (open===close || close>open)) break
    }
    }
    console.log('open')
    console.log(openIndex)
    console.log('close')
    console.log(closeIndex)
    if (open!==close) return false
    if (openIndex!==closeIndex-1) {
    let str2=''
    for (let k=openIndex+1; k<closeIndex; k++) str2+=str[k]
    if (str[str.length-1]!=='a') str2+='a'
    let skobki=check(str2,bracketsConfig)
    if (skobki===false) return false
    }
    if (str[str.length-1]==='a')
    if (closeIndex===str.length-1 && openIndex===0) {
    j=str.length
    break
    }
    else str=str.replace('a','')
    }
    if (openIndex===-1) return false
    if (str[str.length-1]!=='a') j=closeIndex+1
    }
    console.log(str)
    if (str[str.length-1]!=='a') return true
    }






// module.exports = function check(str, bracketsConfig) {
//     for (let i = 0; i < bracketsConfig.length; i++) {
//         for (let j = 0; j < 2; j++) {
//             let b = false;
//             let len =str.length;
//             let str2=str;
//             for (let k = 0; k < len; k++) {
//                 if (bracketsConfig[i][j] === str2[k]) {
//                     b = true
//                     str = str.replace(str2[k], '')

//                 }

//             }
//             if (b === false) return false
//         }
//     }
//     if (str === '') {
//         return true
//     }
//     else return false
// }
