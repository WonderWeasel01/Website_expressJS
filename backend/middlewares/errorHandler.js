module.exports = () => { // Ændret for at returnere en middleware-funktion
    return (req, res, next) => { // Middleware-funktion
        console.log(`${req.method} request for ${req.url}`);
        next(); 
    };
};