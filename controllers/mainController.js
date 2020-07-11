const fs=require('fs');
const mainMenu={'Home':'/','About':'/about','Contact':'/contact'};
const syxhelper=require('../util/syxhelper');

exports.home=(req,res,next)=>{
     res.render('home', {
          pageTitle: 'Syx Home',
          content: 'The page you are looking at is being generated dynamically by Node JS.',
          title: 'Welcome to Node JS Starter Kit',
          path: '/',
          menu:mainMenu,
          breadcrumb: {'Home':'/'},
          productCSS: true,
        });
     //res.setHeader('Content-type','text/html');
     //res.send('<h1>Hello World!</h1>');
}

exports.about=(req,res,next)=>{
     res.render('about', {
          pageTitle: 'Syx Home',
          content: 'The page you are looking at is being generated dynamically by Node JS.',
          title: 'About Node JS Starter Kit',
          path: '/about',
          menu:mainMenu,
          breadcrumb: {'About':'/about'},
          productCSS: true
        });
}

exports.contact=(req,res,next)=>{
     res.render('contact', {
          pageTitle: 'Syx Home',
          content: '<p>The page you are looking at is being generated dynamically by Node JS.</p>',
          title: 'Contact Me',
          path: '/contact',
          email: 'admin@layanan.web.id',
          address: 'Block D 31th st, Cibubur City, <br/>East Jakarta, DKI Jakarta<br/> Indonesia',
          phone: '087771740877',
          fax: '-',
          website: 'https://www.syxcenter.com',
          dateNow:syxhelper.date_helper.getDateNow(),
          menu:mainMenu,
          breadcrumb: {'Contact':'/contact'},
          productCSS: true
        });
}

exports.print=(req,res,next)=>{
     fs.writeFile('request_content.txt',JSON.parse(req.headers),(err)=>{
          res.statusCode=302;
          //res.setHeader('Location','/');
          //return res.end();
          res.setHeader('Content-Type','text/html');
          res.send('<h1>Failed to print!</h1>');
     });
     res.statusCode=302;
     res.setHeader('Content-Type','text/html');
     res.send('<h1>Print to file has been done!</h1>');
}
