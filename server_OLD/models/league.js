module.exports=(sequelize,type)=>{
    return sequelize.define('league',{
        id: {
            type:type.INTEGER,
            primaryKey:true,
            autoIncrement:true,
        },
        leagueName: {
            type: type.STRING,
            notEmpty: true,
        }
    })
}