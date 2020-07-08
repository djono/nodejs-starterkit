
exports.get404 = (req, res, next) => {
     res.status(404).render('404', {
          pageTitle: 'Page Not Found!',
          path: '/404',
          //isAuthenticated: req.session.isLoggedIn
     });
};
   
exports.get500 = (req, res, next) => {
     res.status(500).render('500', {
          pageTitle: 'Error!',
          path: '/500',
          //isAuthenticated: req.session.isLoggedIn
     });
};

exports.getDataNotFound=(req,res,next)=>{
     res.status(200).render('200',{
          pageTitle:'Data Not Found!',
          path:'/200'
     });
}