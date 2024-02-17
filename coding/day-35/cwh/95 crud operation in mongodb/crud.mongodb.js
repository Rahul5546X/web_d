use("PracticeCrudDb")
console.log(db)

db.createCollection("practiceCOURSES")

//INSERTING --CREATING(a document)

db.practiceCOURSES.insertOne({name:"My name is abc","work":"my work is coding"})

db.practiceCOURSES.insertMany([{"name":"value1"  ,"value": 1 ,"number":1},
    {"name":"value2"  ,"value": 2 ,"number":2},
    {"name":"value3"  ,"value": 3 ,"number":3},
    {"name":"value4"  ,"value": 4 ,"number":4}])
//replace
db.practiceCOURSES.replaceOne({"name":"value4"},{"name":"replacedValue4"})  // it'll replace the whole document


//update many work like find many(jahan jahan value match hogi vahan vahan change ho jayegi)
db.practiceCOURSES.updateOne({value:2},{$set:{value:45}})  // work on single value


//Read
db.practiceCOURSES.find() // all the documents

//find
db.practiceCOURSES.find({value:2})
let a = db.practiceCOURSES.find({value:2})
console.log(a.toArray()) // array of objects

//findOne(phla jo bhi ayega)
db.practiceCOURSES.findOne({"name":"My name is abc"}) // do Same data ke honge to jo phle hoga vo hoga find

//delete(whole document is deleted)

db.practiceCOURSES.insertOne({"inserted_for":"just deletion"})
db.practiceCOURSES.deleteOne({"inserted_for":"just deletion"})
