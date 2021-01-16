module.exports = {
    getONGs: function(connection, callback){
        let sql = 'select * from ong';
        connection.query(sql, callback);
    },
    setONGs: function(ong, connection, callback){
        let sql = 'insert into ong set ?';
        connection.query(sql, ong, callback);
    }
}