const petSchema = require('../models/pet');
const { deleteImage, uploadImage } = require ('../libs/cloudinary');
const fs = require('fs-extra');

module.exports = {
    get:async(req, res)=>{
        try {
            const allPet = await petSchema.find();
            res.status(200).json(allPet);
        } catch (error) {
            res.json({message:error});
        }
    },

    post:async(req, res)=>{
        try {
            const { type, location, sex, side, age } = req.body;
            let image=null;
            if(req.files?.image){
                const result = await uploadImage(req.files.image.tempFilePath)
                await fs.remove(req.files.image.tempFilePath)
                image={
                    url: result.secure_url,
                    public_id: result.public_id
                };
            }
            const pet = petSchema({type, location, sex, side, age, image});
            const newPet = await pet.save();
            console.log(newPet);
            res.status(200).json(newPet);
        } catch (error) {
            res.json({message:error})
        }
    },
    get_id:async(req, res)=>{
        try {
            const { id } = req.params;
            const aPet = await petSchema.findById(id);
            res.status(200).json(aPet);
        } catch (error) {
            res.json({message:error});
        }
    },
    update:async(req, res)=>{
        try {
            const { id } = req.params;
    
            if(req.files?.image){
                const result = await uploadImage(req.files.image.tempFilePath);
                await fs.remove(req.files.image.tempFilePath);
                req.body.image={
                    url: result.secure_url,
                    public_id: result.public_id,
                };
            }
            const { type, location, sex, side, age, image } = req.body;
            const petUpdate = await petSchema.updateOne({_id: id}, { $set: {type, location, sex, side, age, image} });
            res.status(200).json(petUpdate);
        } catch (error) {
            res.json({message:error});
        }
    },
    delete:async(req, res)=>{
        try {
            const { id } = req.params;
            const petRemoved = await petSchema.findByIdAndDelete(id);
            
            if(petRemoved && petRemoved.image.public_id){
                await deleteImage(petRemoved.image.public_id);
            }
            if(!petRemoved){
               return res.sendStatus(404); 
            } 
            res.sendStatus(204);
    
        } catch (error) {
            res.status(200).res.json({message:error});
        }
    },
}