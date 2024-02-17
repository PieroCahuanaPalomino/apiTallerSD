const serviceSchema = require('../models/service');

module.exports={
    get: async(req, res)=>{
        try {
            const services = await serviceSchema.find();
            res.status(200).json(services);
        } catch (error) {
            res.json({message:error});
        }
    },
    post:async(req, res)=>{
        try {
            const service = serviceSchema(req.body);
            const newService = await service.save();
            res.status(200).json(newService);
        } catch (error) {
            res.json({message:error});
        }
    },
    get_id:async(req, res)=>{
        try {
            const { id } = req.params;
            const aService = await serviceSchema.findById(id);
            res.status(200).json(aService);
        } catch (error) {
            res.json({message:error});
        }
    },
    update:async(req, res)=>{
        try {
            const { id } = req.params;
            const { id_dogwalker, id_dog, estado } = req.body;
            const serviceUpdated = await serviceSchema.updateOne({_id: id}, { $set: { id_dogwalker, id_dog, estado } });
            res.status(200).json(serviceUpdated);
        } catch (error) {
            res.json({message:error});
        }
    },
    delete:async(req, res)=>{
        try {
            const { id } = req.params;
            const serviceDeleted = await serviceSchema.remove({_id: id});
            res.status(200).json(serviceDeleted)
        } catch (error) {
            res.json({message:error});
        }
    },
}