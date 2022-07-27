// eslint-disable-next-line no-unused-vars
function errorHandler(err, req, res, next) {
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    res.status(err.status || 500);
    res.json({ status: 'error', message: err.message });
}

export default errorHandler;
