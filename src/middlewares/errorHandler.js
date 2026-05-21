export function errorHandler(err, req, res, next) {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Error interno del servidor';
    res.status(statusCode).json({ 
        error: message,
        status: statusCode
     });
}
export function asyncError(fn) {
    return (req, res, next) => {
        Promise.resolve(fn(req, res, next)).catch(next);
    };
}
export function createError(statusCode, message) {
    const error = new Error(message);
    error.statusCode = statusCode;
    return error;
}
export function badRequest(message) {
    return createError(400, message);
}
export function notFound(message) {
    return createError(404, message);
}
export function unauthorized(message) {
    return createError(401, message);
}
export function forbidden(message) {
    return createError(403, message);
}
export function internalError(message) {
    return createError(500, message);
}