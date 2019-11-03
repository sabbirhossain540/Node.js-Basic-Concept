exports.get404 = (req, res, next) => {
    //res.status(404).send('<h1>Page Not Found</h1>');
    //res.sendFile(path.join(rootPath,'views','404.html'));
    res.status(404).render('404',{docTitle:'404'});
}