const conn = require('./connect')
const url = require('url');

exports.update = (req, res, next) => {
    try {
        console.log("\n URL:  " + req.url);

        const current_url = new URL("http://localhost:3000" + req.url);
        const search_params = current_url.searchParams;

        const data1 = search_params.get('data1');
        const data2 = search_params.get('data2');
        const data3 = search_params.get('data3');
        const id = search_params.get('id');

        conn.query("UPDATE `data` SET `data1` = '" + data1 + "', `data2` = '" + data2 + "', `data3` = '" + data3 + "' WHERE `data`.`id` = " + id + "", function (err, data) {
            if (err) return next(console.log(err))
            res.status(200).json({
                status: "success",
                data: data
            });
        });
    } catch (err) {
        console.log(`\n\n` + err + `\n\n`);
        console.log(err.message);
        console.log('Create failed! Maybe MySQL is not running');
    }
};