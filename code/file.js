const fs =require ('fs');

//reading files

// fs.readFile('./docs/blogs.txt', (err, data) => {
//    if(err){console.log(err);
//   }
  
//   console.log(data.toString());
// })

// console.log('last lines')

//writing files
// fs.writeFile('./docs/blogs1.txt', 'hello World', ()=>{
//   console.log('File was Written');
// } );


//directiories

// if(!fs.existsSync('./assets')){
// fs.mkdir('./assets', (err)=>{
//   if (err){
//     console.log(err);
//   }
//   console.log('folder created');
// });
// } else {
//   fs.rmdir('./assets', (err)=>{
//     if (err){
//       console.log(err)
//     }
//     console.log('folder deleted')
//   })
// }

//deleting files

// if (fs.existsSync('./docs/deleteme.txt')){
//   fs.unlink('./docs/deleteme.txt', (err)=>{
//     if (err){
//       console.log(err);
//     }
//     console.log('file deleted');
//   })
// }


