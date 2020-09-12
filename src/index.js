const fs =require('fs');
const path = require('path');
const util = require('util');


// const textFileName1 = 'message.txt'

// const textFilePath = path.join(process.cwd(),'data/', textFileName)
// const textFilePath = path.join('./','data/', textFileName)


const textFileName = 'message2.txt'

const textFilePath = path.join(__dirname,'../','data/', textFileName)

const readFile = util.promisify(fs.readFile)



module.exports = async () => {

    try{
        const data = await readFile(textFilePath) 
        console.log("path:" , textFilePath)
        console.log(data.toString())

    }catch (error) {
        console.error(error)
    }

       
    


}



// module.exports = () => {

//     readFile(textFilePath) 
//         .then (data => {
//         console.log("path:" , textFilePath)
//         console.log(data.toString())
//         process.exit()

    
// })

// }



// fs.readFile(textFilePath1, (err,data) => {
//     console.log(data.toString())
//     process.exit()
// })


