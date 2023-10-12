const conn = require('./connect')
const url = require('url');

exports.select = (req, res, next) => {
    try {
        let params = new url.URLSearchParams({
            user: 'root',
            query: 'select',
        });
        console.log(params.getAll('user'));
        console.log(params.getAll('query'));
        console.log(params.toString());

        conn.query("SELECT * FROM data", function (err, data, fields) {
            if (err) return next(console.log(err))
            res.status(200).json({
                status: "success",
                length: data?.length,
                data: data,
            });
        });
        //console.log('Select');
    } catch (err) {
        console.log(`\n\n` + err + `\n\n`);
        console.log('Connect failed! Maybe MySQL is not running');
    }
};