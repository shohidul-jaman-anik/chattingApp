const createError = require('http-errors');

// 404 not found handler
function notFoundHandler(req, res, next) {
    next(createError(404, 'Your requested content was not found'))
}


// default error handler
function errorHander(err, req, res, next) {
    // res.locals.title="Error pageeeeeee"
    res.render('error', {
        title: "Error Page"
    })
}

module.exports = {
    notFoundHandler,
    errorHander
}

