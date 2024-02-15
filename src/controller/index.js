import fs from 'fs'

let str = "Welcome to Express!";

let date = new Date()

function fileWriting(){
    try {
        fs.writeFileSync('sample.txt',str)
        fs.writeFileSync('current date-time.txt',Date())
    } catch (error) {
        console.log(error)
    }     
}

export default{
    fileWriting
} 