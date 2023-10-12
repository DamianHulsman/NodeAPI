const conn = require('./connect')
const url = require('url');

exports.delete = (req, res, next) => {
    try {
        console.log("\n URL:  " + req.url);

        const current_url = new URL("http://localhost:3000" + req.url);
        const search_params = current_url.searchParams;

        const id = search_params.get('id');

        conn.query("DELETE FROM `data` WHERE `data`.`id` = " + id + "", function (err, data) {
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