const userSchema = require('../models/user');

module.exports = {
    get:async(req, res)=>{
        try {
            const dogwalker = await userSchema.find();
            res.status(200).json(dogwalker);
        } catch (error) {
            res.json({message:error});
        }
    },
    post:async(req, res)=>{
        try {
            const user = userSchema(req.body);
            const newUser = await user.save();
            res.status(200).json(newUser);
        } catch (error) {
            res.json({message:error})
        }
    },
    get_id:async(req, res)=>{
        try {
            const { id } = req.params;
            const aUser = await userSchema.findById(id);
            res.status(200).json(aUser);
        } catch (error) {
            res.json({message:error});
        }
    },
    update:async(req, res)=>{
        try {
            const { id } = req.params;
            const { name, dni, address, email, status, puntaje } = req.body;
            const userUpdate = await userSchema.updateOne({_id: id}, { $set: {name, dni, address, email,status ,puntaje} });
            res.status(200).json(userUpdate);
        } catch (error) {
            res.json({message:error});
        }
    },
    delete: async(req, res)=>{
        try {
            const { id } = req.params;
            const userRemoved = await userSchema.remove({_id: id});
            res.status(200).json(userRemoved);
        } catch (error) {
            res.json({message:error});
        }
    },
}