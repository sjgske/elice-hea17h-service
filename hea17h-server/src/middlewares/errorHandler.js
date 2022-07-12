// eslint-disable-next-line no-unused-vars
function errorHandler(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    console.log('\x1b[33m%s\x1b[0m', err.stack);
    // render the error page
    res.status(err.status || 500);
<<<<<<< HEAD
    res.json({ error : err.message });
=======
    // eslint-disable-next-line no-console
    // console.log(err);
    res.json(err);
>>>>>>> feature-be-user
}

export default errorHandler;
