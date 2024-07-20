
for (var i = 0; i < 3; i++) {

    ((i)=> setTimeout(() => {
       console.log(i)
     }, 1000))(i)
     
   }
   