const router = require('express').Router();
const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;


const connection = (closure) =>{
    return MongoClient.connect('mongodb://localhost:27017/userDB',(err,client)=>{
      if (err) return console.log(err);
      let db = client.db('userDB');
      closure(db);
    })
  }
  router.post('/addQuestion',(req,res)=>{
    console.log(req.body.questions);
    console.log(req.body.id);

   
    connection((db)=>{
      db.collection('users').findOne({"_id":ObjectID(req.body.id) },(err,result)=>{
        
        if(err||!result) {res.send({message:"Error"})}
        else{
         
            db.collection('users').update(
               { "_id":ObjectID(req.body.id)},
              
                {$push : { questions: { $each: [req.body.questions] } }
               }
            );
            res.send({message:"Done"});
        }
      })
    })
  })

  


// update question
router.post('/:id/:pos/update_Question',(req,res)=>{
  connection((db)=>{
    console.log(req.params.id);
    console.log(req.params.pos);
    console.log(req.body.question);
    db.collection('users').update(
      { "_id":ObjectID(req.params.id)},
      { $set: { ["questions."+req.params.pos+".question"] : req.body.question,
                ["questions."+req.params.pos+".reponse"] : req.body.reponse,
               }}
      ,(error,resultat)=>{
           if (resultat){
             res.send({message:"mise a jour avec succes "});
           } else {
             res.send({message:"Erreur lors du mise a jour "});
           }  
        
         });
  })
})
      


// Suppression de 'Tquestion'   
  router.get('/:id/:question/deleteQuestion',(req,res)=>{
    connection((db)=>{
      db.collection('users').findOne({"_id": ObjectID(req.params.id) },(err,result)=>{
        if(err||!result) {res.send({message:"Error"})}
        else{ 
            db.collection('users').update({'_id': ObjectID(req.params.id)}, 
            { $pull: { "questions" : { question: req.params.question } } },(error,resultat)=>{
           if (resultat){
            console.log("Supression avec succes");
            res.send({message:"Supression avec succes"});
          } else {
              console.log("Echec de Supression");
              res.send({message:"Echec de Supression"});
            }  
            
            }
            );
        }
      })
    })
  })
 


// Return Tous les questions de l' ID 
router.get('/:id/getQuestion',(req,res)=>{  
  console.log(req.params.id);
    connection((db)=>{
      db.collection('users').findOne({"_id":ObjectID(req.params.id) },(err,result)=>{
        if(err||!result) {res.send({message:"Error"})}
        else{
          const resultat = result.questions;
          res.send(resultat);
}
      })
    })
  })

  
 module.exports = router;
