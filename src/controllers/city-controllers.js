


const {CityService} = require('../serives/index')

const cityService = new CityService();
const create = async(req ,res) =>{
    try {
        const city = await cityService.createCity(req.body);
        return res.status(201).json({
            data: city,
            success : true,
            message : "Succcessfully created a city",
            err:{}
        })
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data : {},
            success : false,
            message : "Not Able To create city",
            err : error
        })
        
    }

}

const destroy =async (req ,res) =>{
     try {
         const response = await cityService.destroy(req.params.id);
        return res.status(200).json({
            data: response,
            success : true,
            message : "Succcessfully created a city",
            err:{}
        })
        
    } catch (error) {
       console.log(error);
        return res.status(500).json({
            data : {},
            success : false,
            message : "Not Able To delete the city",
            err : error
        })
        
}}

const update =async (req ,res) =>{
    try {
         const city = await cityService.updateCity(req.params.id ,req.body);
        return res.status(201).json({
            data: city,
            success : true,
            message : "Succcessfully created a city",
            err:{}
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data : {},
            success : false,
            message : "Not Able To update  the city",
            err : error
        })
}}

const get = async(req ,res) =>{
    try {
         const city = await cityService.getCity(req.params.id);
        return res.status(200).json({
            data: city,
            success : true,
            message : "Succcessfully created a city",
            err:{}
        })
    } catch (error) {
       console.log(error);
        return res.status(500).json({
            data : {},
            success : false,
            message : "Not Able To get the city",
            err : error
        })
    
}}

module.exports = { 
    create,
    destroy,
    update,
    get
}