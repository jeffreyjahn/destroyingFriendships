module.exports=(sequelize,type)=>{
    return sequelize.define('player',{
        id:{
            type:type.INTEGER,
            primaryKey:true,
            autoIncrement:true,
        },
        name:{
            type: type.STRING,
            notEmpty: true,
        }
    })
}