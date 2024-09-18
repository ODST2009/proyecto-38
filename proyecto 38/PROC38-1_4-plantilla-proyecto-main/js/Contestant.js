class Contestant {
  constructor(){
    this.index = null;
    this.answer = 0;
    this.name = null;
  }

  getCount(){
    var contestantCountRef = database.ref('contestantCount');
// escoge el correcto para obtener el valor contesttantCount de firebase en el metodo getCount()

   contestantCountRef.on("value",(data)=>{
   contestantCount = data.val();
   })


    // contestantCountRef.on("value",()=>{
    //   contestantCount = data.val();
    // })

    // contestantCountRef.on("value",(data)=>{
    //   contestantCount = data();
    // })

  }

  updateCount(count){

   // escoge el correcto dentro de update() para actualizar la variable contesttantCount en firebase
   //coloca valor de la variable contesttantCount en firebase

     //database.ref('/').update({
     //count: contestantCount
     //});


    // database.ref('/').update({
    //   contestantCount: 0
    // });


    // database.ref('').update({
    //   contestantCount: counts
    // });


     database.ref('/').update({
     contestantCount: count
     });

  }

 
}