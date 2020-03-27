const connection = require('../../db/conn');
const crypto = require('crypto');
module.exports = {
    async create(req, res){
        const obj= req.body;
        const id = crypto.randomBytes(4).toString('HEX');
        obj.id = id;
        console.log(obj);
        await connection('ongs').insert(obj);
        return res.json({id});
    },
    async list(req, res){
        const ongs = await connection('ongs').select('*');
        return res.json(ongs);
    }
};