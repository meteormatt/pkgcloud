/**
 * Created by meteor on 2014/12/31.
 */
//var request = require('request');
//var r = request({uri: 'http://stackoverflow.com'  }, function (error, response, body) {
//    console.log('url requested ') ;
//    if (!error){
//        console.log(body);
//    }
//    else
//    {
//        console.log(error);
//    }
//});
//r.abort();

var pkgcloud = require('../lib/pkgcloud.js');
var client = pkgcloud.storage.createClient({
    provider: 'openstack', // required
    username: 'admin', // required
    password: 'alaserver', // required
    authUrl: 'http://swift.goukuai.cn:5000',
    version: 2,
    tenantName: 'gokuai',
    region: 'RegionOne'
});
var fs = require('fs');

var a = client.download({
    container: 'gkstorage2',
    remote: '01/01112a772bfbec0c297d7461ad869ab998ccf04c.dat'
}, function (err, file1) {
    if (err) {
        console.error('err', err);
    } else {
        console.log('file', file1.name);
    }
});
a.pipe(fs.createWriteStream('test.dat'));
//a.unpipe();
//client.abort();
//a.emit('finish');
//a.emit('end');
//a.emit('destroy');
//a.emit('error', function() {
//    //console.l
//});