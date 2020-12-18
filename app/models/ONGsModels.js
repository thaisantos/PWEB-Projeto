module.exports = {
    getOngs: function(connection, callback){
        let sql = 'select * from ongs';
        connection.query(sql, callback);
    }
}