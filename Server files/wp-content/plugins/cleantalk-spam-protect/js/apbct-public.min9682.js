function apbct_collect_visible_fields(t){var e,i=[],n="",c=0,o="",a=0,l=[];for(e in t.elements)isNaN(+e)||(i[e]=t.elements[e]);return(i=i.filter(function(t){return-1===l.indexOf(t.getAttribute("name"))&&(-1===["radio","checkbox"].indexOf(t.getAttribute("type"))||(l.push(t.getAttribute("name")),!1))})).forEach(function(t,e,i){"submit"!==t.getAttribute("type")&&null!==t.getAttribute("name")&&"ct_checkjs"!==t.getAttribute("name")&&("none"!==getComputedStyle(t).display&&"hidden"!==getComputedStyle(t).visibility&&"0"!==getComputedStyle(t).opacity&&"hidden"!==t.getAttribute("type")||t.classList.contains("wp-editor-area")?(n+=" "+t.getAttribute("name"),c++):(o+=" "+t.getAttribute("name"),a++))}),o=o.trim(),{visible_fields:n=n.trim(),visible_fields_count:c,invisible_fields:o,invisible_fields_count:a}}function apbct_visible_fields_set_cookie(t,e){var i="object"==typeof t&&null!==t?t:{};if("native"===ctPublic.data__cookies_type)for(var n in i){if(10<n)return;ctSetCookie("apbct_visible_fields_"+(void 0!==e?e:n),JSON.stringify(i[n]))}else ctSetCookie("apbct_visible_fields",JSON.stringify(i))}function apbct_js_keys__set_input_value(t,e,i,n){if(0<document.querySelectorAll("[name^=ct_checkjs]").length)for(var c=document.querySelectorAll("[name^=ct_checkjs]"),o=0;o<c.length;o++)c[o].value=t.js_key}function apbctGetScreenInfo(){return JSON.stringify({fullWidth:document.documentElement.scrollWidth,fullHeight:Math.max(document.body.scrollHeight,document.documentElement.scrollHeight,document.body.offsetHeight,document.documentElement.offsetHeight,document.body.clientHeight,document.documentElement.clientHeight),visibleWidth:document.documentElement.clientWidth,visibleHeight:document.documentElement.clientHeight})}!function(){var o=new Date,e=(new Date).getTime(),i=!0,n=[],c=0,a={},t=!1,l=!1;function s(t,e,i){"function"==typeof window.addEventListener?t.addEventListener(e,i):t.attachEvent(e,i)}function _(t,e,i){"function"==typeof window.removeEventListener?t.removeEventListener(e,i):t.detachEvent(e,i)}var u=function(t){var e=Math.floor((new Date).getTime()/1e3);ctSetCookie("ct_fkp_timestamp",e),_(window,"mousedown",u),_(window,"keydown",u)},d=setInterval(function(){i=!0},150),r=setInterval(function(){ctSetCookie("ct_pointer_data",JSON.stringify(n))},1200),m=function(t){l||(ctSetCookie("ct_mouse_moved","true"),l=!0),!0===i&&(n.push([Math.round(t.clientY),Math.round(t.clientX),Math.round((new Date).getTime()-e)]),i=!1,50<=++c&&(_(window,"mousemove",m),clearInterval(d),clearInterval(r)))};function p(t){var e=t.target.value;!e||e in a||("rest"===ctPublicFunctions.data__ajax_type?apbct_public_sendREST("check_email_before_post",{method:"POST",data:{email:e},callback:function(t){t.result&&(a[e]={result:t.result,timestamp:Date.now()/1e3|0},ctSetCookie("ct_checked_emails",JSON.stringify(a)))}}):"custom_ajax"===ctPublicFunctions.data__ajax_type?apbct_public_sendAJAX({action:"apbct_email_check_before_post",email:e},{apbct_ajax:1,callback:function(t){t.result&&(a[e]={result:t.result,timestamp:Date.now()/1e3|0},ctSetCookie("ct_checked_emails",JSON.stringify(a)))}}):"admin_ajax"===ctPublicFunctions.data__ajax_type&&apbct_public_sendAJAX({action:"apbct_email_check_before_post",email:e},{callback:function(t){t.result&&(a[e]={result:t.result,timestamp:Date.now()/1e3|0},ctSetCookie("ct_checked_emails",JSON.stringify(a)))}}))}function b(t){ctSetCookie("apbct_pixel_url",t),+ctPublic.pixel__enabled&&(document.getElementById("apbct_pixel")||jQuery("body").append('<img alt="Cleantalk Pixel" id="apbct_pixel" style="display: none; left: 99999px;" src="'+t+'">'))}s(window,"mousemove",m),s(window,"mousedown",u),s(window,"keydown",u),s(window,"scroll",function(){t||(ctSetCookie("ct_has_scrolled","true"),t=!0)}),s(window,"DOMContentLoaded",function(){var t,e=[["ct_ps_timestamp",Math.floor((new Date).getTime()/1e3)],["ct_fkp_timestamp","0"],["ct_pointer_data","0"],["ct_timezone",o.getTimezoneOffset()/60*-1],["ct_screen_info",apbctGetScreenInfo()],["ct_has_scrolled","false"],["ct_mouse_moved","false"]];if("native"!==ctPublic.data__cookies_type)e.push(["apbct_visible_fields","0"]);else{var i=document.cookie.split(";");if(0!==i.length)for(var n=0;n<i.length;n++){var c=i[n].trim().split("=")[0];0===c.indexOf("apbct_visible_fields_")&&ctDeleteCookie(c)}}+ctPublic.pixel__setting&&(+ctPublic.pixel__enabled?"rest"===ctPublicFunctions.data__ajax_type?apbct_public_sendREST("apbct_get_pixel_url",{method:"POST",callback:function(t){t&&b(t)}}):(t="custom_ajax"===ctPublicFunctions.data__ajax_type?1:0,apbct_public_sendAJAX({action:"apbct_get_pixel_url"},{apbct_ajax:t,notJson:!0,callback:function(t){t&&b(t)}})):e.push(["apbct_pixel_url",ctPublic.pixel__url])),+ctPublic.data__email_check_before_post&&(e.push(["ct_checked_emails","0"]),jQuery("input[type = 'email'], #email").blur(p)),ctSetCookie(e),setTimeout(function(){for(var t=0;t<document.forms.length;t++){var e,i,n=document.forms[t];"get"===n.method.toString().toLowerCase()||n.classList.contains("slp_search_form")||n.parentElement.classList.contains("mec-booking")||-1!==n.action.toString().indexOf("activehosted.com")||n.id&&"caspioform"===n.id||n.classList&&n.classList.contains("tinkoffPayRow")||n.classList&&n.classList.contains("give-form")||n.id&&"ult-forgot-password-form"===n.id||n.id&&-1!==n.id.toString().indexOf("calculatedfields")||n.id&&-1!==n.id.toString().indexOf("cp_tslotsbooking_pform")||n.name&&-1!==n.name.toString().indexOf("cp_tslotsbooking_pform")||"https://epayment.epymtservice.com/epay.jhtml"===n.action.toString()||((e=document.createElement("input")).setAttribute("type","hidden"),e.setAttribute("id","apbct_visible_fields_"+t),e.setAttribute("name","apbct_visible_fields"),(i={})[0]=apbct_collect_visible_fields(n),e.value=JSON.stringify(i),n.append(e),n.onsubmit_prev=n.onsubmit,n.ctFormIndex=t,n.onsubmit=function(t){var e;"native"!==ctPublic.data__cookies_type&&void 0!==t.target.ctFormIndex&&((e={})[0]=apbct_collect_visible_fields(this),apbct_visible_fields_set_cookie(e,t.target.ctFormIndex)),t.target.onsubmit_prev instanceof Function&&setTimeout(function(){t.target.onsubmit_prev.call(t.target,t)},500)})}},1e3)})}(),"undefined"!=typeof jQuery&&jQuery(document).ajaxComplete(function(t,e,i){!e.responseText||-1===e.responseText.indexOf('"apbct')||void 0!==(e=JSON.parse(e.responseText)).apbct&&(e=e.apbct).blocked&&(document.dispatchEvent(new CustomEvent("apbctAjaxBockAlert",{bubbles:!0,detail:{message:e.comment}})),cleantalkModal.loaded=e.comment,cleantalkModal.open(),1==+e.stop_script&&window.stop())});
//# sourceMappingURL=apbct-public.min.js.map