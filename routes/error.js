const mainMenu={'Home':'/','About':'/about','Contact':'/contact'};

exports.get404 = (req, res, next) => {
     res.status(404).render('./errors/404', {
          pageTitle: '404 - Page Not Found!',
          path: '/errors/404',
          menu:mainMenu,
          //isAuthenticated: req.session.isLoggedIn
     });
};
   
exports.get500 = (req, res, next) => {
     res.status(500).render('./errors/500', {
          pageTitle: 'Error!',
          path: '/errors/500',
          menu:mainMenu,
          //isAuthenticated: req.session.isLoggedIn
     });
};

exports.getDataNotFound=(req,res,next)=>{
     res.status(200).render('./errors/200',{
          pageTitle:'Data Not Found!',
          path:'/errors/200',
          menu:mainMenu
     });
}