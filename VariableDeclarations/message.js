function formatMessage (name, id, avatar){
    return{
        name,
        id,
        avatar,
        timestamp: Date.now() ,
        //podemos omitir functin
        //de: save: function() 
        save(){
            //save message
        }
    }
}