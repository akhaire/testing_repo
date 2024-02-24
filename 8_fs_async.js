const { readFile, writeFile } = require('fs')

readFile('./content/first.txt', 'utf8', (error, result) => {
    if (error) {
        console.log(error);
        return
    }

    console.log(result)
    const first = result

    readFile('./content/second.txt', 'utf8', (err, result) => {
        if (err) {
            console.log(err);
            return
        }
        const second = result


        writeFile('./content/result_sync.txt',
            `Here is the result : ${first} and  ${second} `,
            (err,result)=>{
                if(err){
                    console.log(err);
                    return
                }

                console.log(result);
            }
        )

    })
})



//USING PROMISES

// const { readFile, writeFile } = require('fs').promises

// // const util = require('util')
// // const readFilePromise = util.promisify(readFile)
// // const writeFilePromis = util.promisify(writeFile)







// const start = async()=>{
//     try {
//         // const first = await readFilePromise('./content/first.txt','utf8')
//         // const second = await readFilePromise('./content/second.txt','utf8')

//         // await writeFilePromis('./content/result_syncc.txt',`This is just awesome :${first},${second}`)

//         const first = await readFile('./content/first.txt','utf8')
//         const second = await readFile('./content/second.txt','utf8')

//         await writeFile('./content/result_syncc.txt',`This is just awesome :${first},${second}`,{flag:'a'})
//         console.log(first,second)
//     } catch (error) {
//         console.log(error)        
//     }
// }


// start()



// // const gettext = (path)=>{
// //     return new Promise((resolve,reject)=>{
// //         readFile(path,'utf8',(err,data)=>{
// //           if(err){
// //               reject (err)
// //           }else{
// //             resolve (data)
// //           }
// //         })
// //     })
// // }




// // readFile('./content/first.txt', 'utf8', (error, result) => {
// //     if (error) {
// //         console.log(error);
// //         return
// //     }

// //     console.log(result)
// //     const first = result

// //     readFile('./content/second.txt', 'utf8', (err, result) => {
// //         if (err) {
// //             console.log(err);
// //             return
// //         }
// //         const second = result


// //         writeFile('./content/result_sync.txt',
// //             `Here is the result : ${first} and  ${second} `,
// //             (err,result)=>{
// //                 if(err){
// //                     console.log(err);
// //                     return
// //                 }

// //                 console.log(result);
// //             }
// //         )

// //     })
// // })





// // gettext('./content/first.txt')
// // .then(result=>{
//     //     console.log(result)
//     // })
// // .catch((err)=>{
// //     console.log(err)
// // })