var app = require('../server.js');//WHY
var Administrator = app.loopback.getModel('Administrator');
var Role = app.loopback.getModel('Role');
var RoleMapping = app.models.RoleMapping;

Role.create({
    name: 'complete-access'
}, function (err, role) {
    if(err)console.log(err);
    Administrator.find({accessType: "complete"}, function (appAdminErr, res) {
        for (var a = 0; a < res.length; a++) {
            role.principals.create({
                principalType: RoleMapping.USER,
                principalId: res[a].id
            }, function (err, principal) {
                //console.log(principal);
            });
        }
    });
});

Role.create({
    name: 'restricted-access'
}, function (err, role) {
    if(err)console.log(err);
    Administrator.find({accessType: "restricted"}, function (appAdminErr, res) {
        for (var a = 0; a < res.length; a++) {
            role.principals.create({
                principalType: RoleMapping.USER,
                principalId: res[a].id
            }, function (err, principal) {
                //console.log(principal);
            });
        }
    });
});
