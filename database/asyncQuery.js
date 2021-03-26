const connection = require('./database');

exports.queryAsync = (query, values)=> {
    return new Promise((resolve,reject)=>{
        connection.query({
            sql: query,
            values: values
        }, function (error, results) {
            if(error) {
                reject(error);
            } else {
                resolve(results);
            }
        });
    })
    
}

exports.queryClose = async ()=>{
    connection.release();
}