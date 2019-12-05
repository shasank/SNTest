function onAfter(current, previous) {
    var ga = new GlideAggregate('sys_security_acl');
    ga.addQuery('sys_id', current.sys_id);
    ga.addAggregate('COUNT');
    ga.query();
    if (ga.next() && ga.getAggregate('COUNT') > 0)
       new global.AssessmentUtils().checkRecord(current, '2096a48edb604010f28af78eaf96195c');
}

var v = new GlideAjax();
v.addParam();