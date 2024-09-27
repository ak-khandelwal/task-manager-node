const {CustomAPIError} = require("./custom-errors");
const errorHandlerMiddleware = (err,req,res,next) => {
    if(err instanceof CustomAPIError)
        return res.status(err.statusCode).json({msg:err.message});
    // error coming from mongoDB
    else if(err.name === 'ValidationError'){
        // console.log("mongo-db error ",err.errors.name.properties.message);
        return res.status(400).json({msg:err.errors.name.properties.message});
    }
    return res.status(500).json({msg:"error unidentified"});
}
module.exports = errorHandlerMiddleware;