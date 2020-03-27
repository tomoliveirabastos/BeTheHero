const connection = require('../../db/conn');
module.exports = {
    async validate(req, res){
        const  {id} = req.body;
        
        const ong = await connection('ongs').where('id', id).select('name').first();
        
        if(!ong){
            return res.status(400).json({error: 'No found'});
        }
        return res.json(ong);
    }
}