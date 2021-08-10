const express=require("express");
const users=require("./MOCK_DATA.json")
const app=express();
app.use(express.json());

// app.get("/users",function(request,response){
//     return response.send("testing");
// });
let data = [
    {
        id: "1",
        name: "chincha1"
    },
     {
        id: "2",
        name: "chincha2"
    }
]


app.get("/users",function(request,response){
    return response.send({data:users});
})

app.post("/users", function (request, response) {
    let add = request.body;
    users.unshift(add);
    console.log('reqbody',request.body);
    
    return response.send(users);
 })
app.patch("/users/:id", function (request, response) {
    //return response.send("Testing Patch");
    let id = request.params.id;
    let { name } = request.body;
    console.log('name',name);
    
   // let req_obj;z
    let req_obj = data.filter((el) => {
        return el.id == id;
    });
    console.log('req_obj',req_obj);
    
    req_obj[0].name = name;
    response.status(200).json({data})

})

app.delete("/users/:id", function (request, response) {
    // write here
    // return response.send({ id: request.params.id })
    let id = request.params.id;
    let { name } = request.body;
    console.log('name',name);
    
   // let req_obj;z
    let req_obj = data.filter((el) => {
        return el.id != id;
    });
    // console.log('req_obj',req_obj);
    
    data = req_obj;
    console.log('req_obj',req_obj);
    response.status(200).json({ data })
})

app.listen(12345,()=>{
    console.log('hello');
    
})