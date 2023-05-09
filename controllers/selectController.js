const db = require("../models");
const select_master = db.select_master;
const option_master = db.option_master;
const users = db.users;
var addData = async (req, res) => {
    const option_masters = req.body.option_master;
        await select_master.create(
           
          {
            sel_name: req.body.sel_name,
            const_name: req.body.const_name,
            // email: req.body.email,
            option_masters: [...option_masters],
           
          },
          {
            include: [{model: option_master}],
          }   
        )
          .then((data) => {
            res.send(data);  
          })
          .catch((error) => {
            res.status(500).send(error);
          });
      };
// var getData = async (req,res)=>{
//     try {
//         const id= req.query.id;
//         let datas = await select_master.findByPk({
//           where: { id : id},
//           include: [{ model: option_master }],
//         });
//         // if (type == "radio") {
//         //     var html = `<label for ="${data.sel_name}"> ${data.sel_name} </label><br>`;
            
//         //     for (var i = 0; i < data.option_master.length; i++) {
//         //     html += `<input type="radio" name=${data.sel_name} id=${data.option_master[i].opt_name} value=${data.option_master[i].opt_name}> ${data.option_master[i].opt_name}<br>`;
//         //     }
//         //     } else if (type == "checkbox") {
//         //     var html = `<label for ="${data.sel_name}"> ${data.sel_name} </label><br>`;
            
//         //     for (var i = 0; i < data.option_master.length; i++) {
//         //     html += `<input type="checkbox" name=${data.option_master[i].opt_name} id=${data.option_master[i].opt_name} value=${data.option_master[i].opt_name}> ${data.option_master[i].opt_name}`;
//         //     }
//         //     } else if (type == "combo") {
//         //     var html = `<label for ="${data.sel_name}"> ${data.sel_name} </label><br><select name="${data.sel_name}" id="${data.sel_name}"><br>`;
            
//         //     for (var i = 0; i < data.option_master.length; i++) {
//         //     html +=` <option value=${data.option_master[i].opt_name}>${data.option_master[i].opt_name}</option>`;
//         //     }
//         //     html +=    `</select>`;
//         //     }
//         let responce = {
//           success: true,
//           data: datas,
//         };
//         res.status(200).json(responce);
//       } catch (error) {
//         res.status(500).json({
//           success: false,
//           error: error,
//         });
//       }
//     };
var prac = async (req,res)=>{
   const sel_name = req.body.sel_name;
        let data = await select_master.findAll({
          attributes: [ "sel_name"],
          include: [
            {
              model: option_master,
              attributes: ["opt_name", "sel_id", "opt_value"],
            },
          ],
          // where: {
          //       sel_name: sel_name
          //   },
          },
        );
       let type = data.sel_name;
            if (type == "radio") {
            var html = `<label for ="${data.sel_name}"> ${data.sel_name} </label><br>`;
            
            for (var i = 0; i < data.option_master.length; i++) {
            html += `<input type="radio" name=${data.sel_name} id=${data.option_master[i].opt_name} value=${data.option_master[i].opt_name}> ${data.option_master[i].opt_name}<br>`;
            }
            } else if (type == "checkbox") {
            var html = `<label for ="${data.sel_name}"> ${data.sel_name} </label><br>`;
            
            for (var i = 0; i < data.option_master.length; i++) {
            html += `<input type="checkbox" name=${data.option_master[i].opt_name} id=${data.option_master[i].opt_name} value=${data.option_master[i].opt_name}> ${data.option_master[i].opt_name}`;
            }
            } else if (type == "combo") {
            var html = `<label for ="${data.sel_name}"> ${data.sel_name} </label><br><select name="${data.sel_name}" id="${data.sel_name}"><br>`;
            
            for (var i = 0; i < data.option_master.length; i++) {
            html +=` <option value=${data.option_master[i].opt_name}>${data.option_master[i].opt_name}</option>`;
            }
            html +=    `</select>`;
            console.log("html",html)
            }
          
            let response = {
                success: true,
                data: data
              };
             
        res.status(200).json(response);
        // res.send(html);
    };

// var updateData = async (req,res)=>{
    
//     const id = req.body.id;
//     const opt_name= req.body.opt_name;
//     const sel_id = req.body.sel_id;
//     const opt_value = req.body.opt_value;
//     const option_masters = req.body.option_master;
//    await select_master.update(
//       {
//         sel_name: req.body.sel_name,
//         // option_masters: [...option_masters],
//       },
//       {
//         where:{
//             id: id
//         }
//       },
//     await option_master.destroy({ where:{ sel_id:id}}),
//       await option_master.create({ opt_name: opt_name,sel_id: sel_id,opt_value:opt_value})
//     )
//     .then((data) => {
//         res.send(data);
        
//       })
//       .catch((error) => {
//         res.status(500).send(error);
//       });
// }
var updateData = async (req,res)=>{
    const {cont_name,sel_name,id}= req.body;
    const {opt_name,sel_id,opt_value} = req.body;
    let dataupdate = await select_master.update({cont_name:cont_name,sel_name:sel_name},{where: {id: id}})
    if(dataupdate)
    {
        await option_master.destroy({ where : {sel_id: id}})
    }
    if(sel_id == undefined)
    {
        await option_master.update({ opt_name: opt_name,sel_id: sel_id,opt_value:opt_value},{where:{sel_id:id}})

    }
    let response = {
        success: true,
        data: dataupdate
      };
     
res.status(200).json(response);
}
var deletedata = async (req,res)=>{
    try{
        const sel_id= req.body.sel_id
    let deletedata = await option_master.destroy({where: {sel_id:sel_id}})
      // {
        // include: [{model: select_master},{where : {id: sel_id}}]})
   let response = {
            success: true,
            data: deletedata
          };
          res.status(200).json(response);
         
    }catch(error){

    }
}
var insertData = async (req,res)=>{
  try{
    let indata = await users.create({
      name : req.body.name,
      email: req.body.email,
      password: req.body.password
    })
    let response = {
      success: true,
      data: data
    };
   
res.status(200).json(response);
  }
  catch(error){
    return res.status(500).json(error);
  }
}
module.exports = {addData,updateData,prac,deletedata,insertData};