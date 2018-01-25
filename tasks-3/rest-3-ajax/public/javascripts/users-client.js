function pug_attr(t,e,n,f){return e!==!1&&null!=e&&(e||"class"!==t&&"style"!==t)?e===!0?" "+(f?t:t+'="'+t+'"'):("function"==typeof e.toJSON&&(e=e.toJSON()),"string"==typeof e||(e=JSON.stringify(e),n||e.indexOf('"')===-1)?(n&&(e=pug_escape(e))," "+t+'="'+e+'"'):" "+t+"='"+e.replace(/'/g,"&#39;")+"'"):""}
function pug_escape(e){var a=""+e,t=pug_match_html.exec(a);if(!t)return e;var r,c,n,s="";for(r=t.index,c=0;r<a.length;r++){switch(a.charCodeAt(r)){case 34:n="&quot;";break;case 38:n="&amp;";break;case 60:n="&lt;";break;case 62:n="&gt;";break;default:continue}c!==r&&(s+=a.substring(c,r)),c=r+1,s+=n}return c!==r?s+a.substring(c,r):s}
var pug_match_html=/["&<>]/;
function pug_rethrow(n,e,r,t){if(!(n instanceof Error))throw n;if(!("undefined"==typeof window&&e||t))throw n.message+=" on line "+r,n;try{t=t||require("fs").readFileSync(e,"utf8")}catch(e){pug_rethrow(n,null,r)}var i=3,a=t.split("\n"),o=Math.max(r-i,0),h=Math.min(a.length,r+i),i=a.slice(o,h).map(function(n,e){var t=e+o+1;return(t==r?"  > ":"    ")+t+"| "+n}).join("\n");throw n.path=e,n.message=(e||"Pug")+":"+r+"\n"+i+"\n\n"+n.message,n}function usersClientTemplate(locals) {var pug_html = "", pug_mixins = {}, pug_interp;var pug_debug_filename, pug_debug_line;try {var pug_debug_sources = {"views\u002Fusers-client.pug":"table(class=\"striped bordered centered\")\n  caption List of Users\n  thead\n    tr\n      th Name\n      th Surname\n      th Email\n      th Age\n      th Delete\n      th Edit\n  tbody\n    if Object.keys(users).length == 0\n      tr\n        td(colspan=\"6\") No users to show :(\n    else\n      each item in users\n        tr(user-id=item.id)\n          td= item.name\n          td= item.surname\n          td= item.email\n          td= item.age\n          td \n            button(class=\"btn-floating btn-medium red\" type=\"button\" )\n              i(class=\"large material-icons\"  user-id=item.id onclick=\"deleteUser()\") delete\n          td \n            button(data-target=\"modal1\" class=\"btn-floating modal-trigger btn-medium\" type=\"button\" )\n              i(class=\"large material-icons\" user-id=item.id  onclick=\"editUser()\") mode_edit\n"};
;var locals_for_with = (locals || {});(function (Object, users) {;pug_debug_line = 1;pug_debug_filename = "views\u002Fusers-client.pug";
pug_html = pug_html + "\u003Ctable class=\"striped bordered centered\"\u003E";
;pug_debug_line = 2;pug_debug_filename = "views\u002Fusers-client.pug";
pug_html = pug_html + "\u003Ccaption\u003E";
;pug_debug_line = 2;pug_debug_filename = "views\u002Fusers-client.pug";
pug_html = pug_html + "List of Users\u003C\u002Fcaption\u003E";
;pug_debug_line = 3;pug_debug_filename = "views\u002Fusers-client.pug";
pug_html = pug_html + "\u003Cthead\u003E";
;pug_debug_line = 4;pug_debug_filename = "views\u002Fusers-client.pug";
pug_html = pug_html + "\u003Ctr\u003E";
;pug_debug_line = 5;pug_debug_filename = "views\u002Fusers-client.pug";
pug_html = pug_html + "\u003Cth\u003E";
;pug_debug_line = 5;pug_debug_filename = "views\u002Fusers-client.pug";
pug_html = pug_html + "Name\u003C\u002Fth\u003E";
;pug_debug_line = 6;pug_debug_filename = "views\u002Fusers-client.pug";
pug_html = pug_html + "\u003Cth\u003E";
;pug_debug_line = 6;pug_debug_filename = "views\u002Fusers-client.pug";
pug_html = pug_html + "Surname\u003C\u002Fth\u003E";
;pug_debug_line = 7;pug_debug_filename = "views\u002Fusers-client.pug";
pug_html = pug_html + "\u003Cth\u003E";
;pug_debug_line = 7;pug_debug_filename = "views\u002Fusers-client.pug";
pug_html = pug_html + "Email\u003C\u002Fth\u003E";
;pug_debug_line = 8;pug_debug_filename = "views\u002Fusers-client.pug";
pug_html = pug_html + "\u003Cth\u003E";
;pug_debug_line = 8;pug_debug_filename = "views\u002Fusers-client.pug";
pug_html = pug_html + "Age\u003C\u002Fth\u003E";
;pug_debug_line = 9;pug_debug_filename = "views\u002Fusers-client.pug";
pug_html = pug_html + "\u003Cth\u003E";
;pug_debug_line = 9;pug_debug_filename = "views\u002Fusers-client.pug";
pug_html = pug_html + "Delete\u003C\u002Fth\u003E";
;pug_debug_line = 10;pug_debug_filename = "views\u002Fusers-client.pug";
pug_html = pug_html + "\u003Cth\u003E";
;pug_debug_line = 10;pug_debug_filename = "views\u002Fusers-client.pug";
pug_html = pug_html + "Edit\u003C\u002Fth\u003E\u003C\u002Ftr\u003E\u003C\u002Fthead\u003E";
;pug_debug_line = 11;pug_debug_filename = "views\u002Fusers-client.pug";
pug_html = pug_html + "\u003Ctbody\u003E";
;pug_debug_line = 12;pug_debug_filename = "views\u002Fusers-client.pug";
if (Object.keys(users).length == 0) {
;pug_debug_line = 13;pug_debug_filename = "views\u002Fusers-client.pug";
pug_html = pug_html + "\u003Ctr\u003E";
;pug_debug_line = 14;pug_debug_filename = "views\u002Fusers-client.pug";
pug_html = pug_html + "\u003Ctd colspan=\"6\"\u003E";
;pug_debug_line = 14;pug_debug_filename = "views\u002Fusers-client.pug";
pug_html = pug_html + "No users to show :(\u003C\u002Ftd\u003E\u003C\u002Ftr\u003E";
}
else {
;pug_debug_line = 16;pug_debug_filename = "views\u002Fusers-client.pug";
// iterate users
;(function(){
  var $$obj = users;
  if ('number' == typeof $$obj.length) {
      for (var pug_index0 = 0, $$l = $$obj.length; pug_index0 < $$l; pug_index0++) {
        var item = $$obj[pug_index0];
;pug_debug_line = 17;pug_debug_filename = "views\u002Fusers-client.pug";
pug_html = pug_html + "\u003Ctr" + (pug_attr("user-id", item.id, true, false)) + "\u003E";
;pug_debug_line = 18;pug_debug_filename = "views\u002Fusers-client.pug";
pug_html = pug_html + "\u003Ctd\u003E";
;pug_debug_line = 18;pug_debug_filename = "views\u002Fusers-client.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = item.name) ? "" : pug_interp)) + "\u003C\u002Ftd\u003E";
;pug_debug_line = 19;pug_debug_filename = "views\u002Fusers-client.pug";
pug_html = pug_html + "\u003Ctd\u003E";
;pug_debug_line = 19;pug_debug_filename = "views\u002Fusers-client.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = item.surname) ? "" : pug_interp)) + "\u003C\u002Ftd\u003E";
;pug_debug_line = 20;pug_debug_filename = "views\u002Fusers-client.pug";
pug_html = pug_html + "\u003Ctd\u003E";
;pug_debug_line = 20;pug_debug_filename = "views\u002Fusers-client.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = item.email) ? "" : pug_interp)) + "\u003C\u002Ftd\u003E";
;pug_debug_line = 21;pug_debug_filename = "views\u002Fusers-client.pug";
pug_html = pug_html + "\u003Ctd\u003E";
;pug_debug_line = 21;pug_debug_filename = "views\u002Fusers-client.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = item.age) ? "" : pug_interp)) + "\u003C\u002Ftd\u003E";
;pug_debug_line = 22;pug_debug_filename = "views\u002Fusers-client.pug";
pug_html = pug_html + "\u003Ctd\u003E";
;pug_debug_line = 22;pug_debug_filename = "views\u002Fusers-client.pug";
pug_html = pug_html + " ";
;pug_debug_line = 23;pug_debug_filename = "views\u002Fusers-client.pug";
pug_html = pug_html + "\u003Cbutton class=\"btn-floating btn-medium red\" type=\"button\"\u003E";
;pug_debug_line = 24;pug_debug_filename = "views\u002Fusers-client.pug";
pug_html = pug_html + "\u003Ci" + (" class=\"large material-icons\""+pug_attr("user-id", item.id, true, false)+" onclick=\"deleteUser()\"") + "\u003E";
;pug_debug_line = 24;pug_debug_filename = "views\u002Fusers-client.pug";
pug_html = pug_html + "delete\u003C\u002Fi\u003E\u003C\u002Fbutton\u003E\u003C\u002Ftd\u003E";
;pug_debug_line = 25;pug_debug_filename = "views\u002Fusers-client.pug";
pug_html = pug_html + "\u003Ctd\u003E";
;pug_debug_line = 25;pug_debug_filename = "views\u002Fusers-client.pug";
pug_html = pug_html + " ";
;pug_debug_line = 26;pug_debug_filename = "views\u002Fusers-client.pug";
pug_html = pug_html + "\u003Cbutton class=\"btn-floating modal-trigger btn-medium\" data-target=\"modal1\" type=\"button\"\u003E";
;pug_debug_line = 27;pug_debug_filename = "views\u002Fusers-client.pug";
pug_html = pug_html + "\u003Ci" + (" class=\"large material-icons\""+pug_attr("user-id", item.id, true, false)+" onclick=\"editUser()\"") + "\u003E";
;pug_debug_line = 27;pug_debug_filename = "views\u002Fusers-client.pug";
pug_html = pug_html + "mode_edit\u003C\u002Fi\u003E\u003C\u002Fbutton\u003E\u003C\u002Ftd\u003E\u003C\u002Ftr\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index0 in $$obj) {
      $$l++;
      var item = $$obj[pug_index0];
;pug_debug_line = 17;pug_debug_filename = "views\u002Fusers-client.pug";
pug_html = pug_html + "\u003Ctr" + (pug_attr("user-id", item.id, true, false)) + "\u003E";
;pug_debug_line = 18;pug_debug_filename = "views\u002Fusers-client.pug";
pug_html = pug_html + "\u003Ctd\u003E";
;pug_debug_line = 18;pug_debug_filename = "views\u002Fusers-client.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = item.name) ? "" : pug_interp)) + "\u003C\u002Ftd\u003E";
;pug_debug_line = 19;pug_debug_filename = "views\u002Fusers-client.pug";
pug_html = pug_html + "\u003Ctd\u003E";
;pug_debug_line = 19;pug_debug_filename = "views\u002Fusers-client.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = item.surname) ? "" : pug_interp)) + "\u003C\u002Ftd\u003E";
;pug_debug_line = 20;pug_debug_filename = "views\u002Fusers-client.pug";
pug_html = pug_html + "\u003Ctd\u003E";
;pug_debug_line = 20;pug_debug_filename = "views\u002Fusers-client.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = item.email) ? "" : pug_interp)) + "\u003C\u002Ftd\u003E";
;pug_debug_line = 21;pug_debug_filename = "views\u002Fusers-client.pug";
pug_html = pug_html + "\u003Ctd\u003E";
;pug_debug_line = 21;pug_debug_filename = "views\u002Fusers-client.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = item.age) ? "" : pug_interp)) + "\u003C\u002Ftd\u003E";
;pug_debug_line = 22;pug_debug_filename = "views\u002Fusers-client.pug";
pug_html = pug_html + "\u003Ctd\u003E";
;pug_debug_line = 22;pug_debug_filename = "views\u002Fusers-client.pug";
pug_html = pug_html + " ";
;pug_debug_line = 23;pug_debug_filename = "views\u002Fusers-client.pug";
pug_html = pug_html + "\u003Cbutton class=\"btn-floating btn-medium red\" type=\"button\"\u003E";
;pug_debug_line = 24;pug_debug_filename = "views\u002Fusers-client.pug";
pug_html = pug_html + "\u003Ci" + (" class=\"large material-icons\""+pug_attr("user-id", item.id, true, false)+" onclick=\"deleteUser()\"") + "\u003E";
;pug_debug_line = 24;pug_debug_filename = "views\u002Fusers-client.pug";
pug_html = pug_html + "delete\u003C\u002Fi\u003E\u003C\u002Fbutton\u003E\u003C\u002Ftd\u003E";
;pug_debug_line = 25;pug_debug_filename = "views\u002Fusers-client.pug";
pug_html = pug_html + "\u003Ctd\u003E";
;pug_debug_line = 25;pug_debug_filename = "views\u002Fusers-client.pug";
pug_html = pug_html + " ";
;pug_debug_line = 26;pug_debug_filename = "views\u002Fusers-client.pug";
pug_html = pug_html + "\u003Cbutton class=\"btn-floating modal-trigger btn-medium\" data-target=\"modal1\" type=\"button\"\u003E";
;pug_debug_line = 27;pug_debug_filename = "views\u002Fusers-client.pug";
pug_html = pug_html + "\u003Ci" + (" class=\"large material-icons\""+pug_attr("user-id", item.id, true, false)+" onclick=\"editUser()\"") + "\u003E";
;pug_debug_line = 27;pug_debug_filename = "views\u002Fusers-client.pug";
pug_html = pug_html + "mode_edit\u003C\u002Fi\u003E\u003C\u002Fbutton\u003E\u003C\u002Ftd\u003E\u003C\u002Ftr\u003E";
    }
  }
}).call(this);

}
pug_html = pug_html + "\u003C\u002Ftbody\u003E\u003C\u002Ftable\u003E";}.call(this,"Object" in locals_for_with?locals_for_with.Object:typeof Object!=="undefined"?Object:undefined,"users" in locals_for_with?locals_for_with.users:typeof users!=="undefined"?users:undefined));} catch (err) {pug_rethrow(err, pug_debug_filename, pug_debug_line, pug_debug_sources[pug_debug_filename]);};return pug_html;}