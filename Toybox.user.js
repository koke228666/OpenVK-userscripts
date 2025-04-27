// ==UserScript==
// @name         OpenVK toybox
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  try to take over the world!
// @author       koke228
// @match        *://ovk.to/*
// @match        *://openvk.xyz/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    window.ovktoybox = {
        locale: {
            branding: "OpenVK Toybox",
            // роутинг
            routeName: "ажакс в...",
            routingHead: "Куда роутнемся?",
            routingNotif: "щя роутнемся на",
            // подарки
            giftsName: "отправить подарок",
            // апишечка
            apiName: "вызов API"
        },
        methods: {}
    }

var popupimg = "data:image/png;base64,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";

window.ovktoybox.methods.fastMsg = function(header, message) {
    MessageBox(header, message, [tr("ok")], [Function.noop])
}

const tbstyle = document.createElement('style');
tbstyle.type = 'text/css';
tbstyle.innerHTML = `
.ovktoybox-cont {
  float: right;
  height: 41px;
  transition: width 400ms ease-in;
}
.ovktoybox-btn {
  width: 44px;
  float: right;
  height: 41px;
  background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAXCAYAAADgKtSgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAMaSURBVEhLlVXPS1RRFL7lrzQbf4xII9kPC51SbDIJB0YGCqNFbqJFbXJZ/QGFILSpgaF2hYSLFgZGtdCFUtIvGTPGIMtGKYuKgnAsfUkzNlONUt93573xPueVzAcf99z73vvuOfece94asTqywFwwH8wGF8E4+BtcAv8Jfvg/8Hkh6AC3g5vBEnAtmAC50R/QEqrnqod5yrwcrH459bE7OydHRCJR4d7jPI6116AGGt7/Ak0RqZ6vA+3gNpBeVulj3fkrNzprnZxi17w8UVjpOvrkft8YpoyCUW0EC0BGQnGOJs9LweoLnbeCh5pdYvqLJh4EJ+SD1v2NosLB75N4/+GTGBl/J+0Wd60oL7OLnv5hcfHMCTeW3oLf+EwVpwcNCH+A4WeK+I8F0VhfcxjmczDMNSbGAI+oIBqJJGcZgpECPJrUURviqWQOPZ2UC5lCPyYWA3XkBhSnwXJjVThm56MY0sEqmQ7PyPCt8DPOQpFHSx3qZVE8VW5nL133M3krMTo2wfLraPHsPYVz7RgPvdKfLIPfoar8MKtB6uUyoaySuuCLqYDNtgGmGfOaJjz76jtgjoLTYAXYhPd9Vu8vJhJit3OrF+YkPeeVLrB6kQjPfefAbFH4sz5qs3Oy2tKgVxoTm01xFnyMO1qh2Mb35OWix5v00V5axGNNh56TGLhIcWYijFDaBh8FZdJU8PJ09fT7YDaBDLfp2u1BX4md+y2D3/XeCbDW2zBlncd55ka17AS9TGrbkQMwzeDZ84gcZUVipTDR1TMgLp872Q4zALLvLNBzNhnG8hWUN8sKFNxVU2UpTNiKWRfye+pQb4niBDdgw4l7XDvkQqbwNsjGZuqKhjjBhdiWSuYrc7B5AUykFCZUcfZjbWA4JCfaTFj0DY6I7t6H0lbB5PGMmUDarLS7Q7wGsmSpI6F2RfYFbs9y48ga5JrDf/Wmv/VgM8wk+u89Fu2njzF5sipAekxh3gOOsheo4qnmBab9iZ6F3nTnry80biDLjX2byTPOOO1PpIpbwdTUQEZDL01VAVpiNXFCjSiDv78QfwEJOgnm4l/+ZwAAAABJRU5ErkJggg==");
  background-repeat: no-repeat;
  background-position: 10px 8px;
  opacity: 50%;
  transition: opacity 150ms ease-in;
}
.ovktoybox-btn:hover {
  cursor: pointer;
  opacity: 100%;
}
.header_navigation {
  transition: max-width 400ms ease-in;
  padding-right: 0px;
  overflow: hidden;
  max-width: 1000px;
  white-space: nowrap;
}
.header_navigation.tbhidden {
  max-width: 0px;
}`
document.head.appendChild(tbstyle);

// тут дубликат овкапи чтоб не сломать встроенное
window.ovktoybox.OVKAPI = new class {
    async call(method, params) {
        if(!method) {
            return
        }
        const form_data = new FormData
        Object.entries(params).forEach(fd => {
            form_data.append(fd[0], fd[1])
        })

        const __url_params = new URLSearchParams
        __url_params.append("v", "5.200")
        if(window.openvk.current_id != 0) {
            __url_params.append("auth_mechanism", "roaming")
        }

        const url = `/method/${method}?${__url_params.toString()}`
        const res = await fetch(url, {
            method: "POST",
            body: form_data,
        })
        try {
            const json_response = await res.json()

            if(json_response.response) {
                return json_response.response
            } else {
                return json_response // только ради этой строчки
            }
        } catch(e) {
            console.error('ты блять дебил');
            return {}
        }
    }
}

document.querySelector('.header_navigation').insertAdjacentHTML('beforebegin',
`<div class="ovktoybox-btn"></div>
<div class="ovktoybox-cont header_navigation tbhidden">
    <div class="link">
      <a onclick="ovktoybox.methods.showApiDialog();">${ovktoybox.locale.apiName}</a>
    </div>
    <div class="link">
      <a onclick="ovktoybox.methods.showGiftsDialog();">${ovktoybox.locale.giftsName}</a>
    </div>
    <div class="link">
      <a onclick="ovktoybox.methods.showRouteDialog();">${ovktoybox.locale.routeName}</a>
    </div>
</div>`);

let tbTimer;

document.querySelector('.ovktoybox-btn').onclick = function() {
	const toybox_container = document.querySelector('.ovktoybox-cont');
	const header_container = document.querySelector('.header_navigation:not(.ovktoybox-cont)');
    const page_header = document.querySelector('.page_header');
	if (tbTimer) {
		clearTimeout(tbTimer);
		tbTimer = null;
	}
	if (toybox_container.classList.contains('tbhidden')) {
		header_container.classList.add('tbhidden');
        page_header.classList.remove('search_expanded');
		tbTimer = setTimeout(() => {
			toybox_container.classList.remove('tbhidden');
		}, 400);
	} else {
		toybox_container.classList.add('tbhidden');
        page_header.classList.remove('search_expanded');
		tbTimer = setTimeout(() => {
			header_container.classList.remove('tbhidden');
		}, 400);
	}
}

ovktoybox.methods.showRouteDialog = function() {
    var routrmsg = new CMessageBox({
        title: ovktoybox.locale.branding,
        body: `${ovktoybox.locale.routingHead}
<br><br>
<input class="routinp" type="text" placeholder="/settings">
`,
        buttons: ["Открыть", tr('close')],
        callbacks: [() => {const dest = document.querySelector(`.ovk-diag-cont[data-id="${routrmsg.id}"]`).querySelector(`.routinp`).value;
                           router.route(dest);
                           NewNotification(ovktoybox.locale.branding, `${ovktoybox.locale.routingNotif} ${dest}`, popupimg, () => {}, 5000, false);}, () => {routrmsg.close()}]
    });
}

ovktoybox.methods.sendGifts = async function(userIds, giftId, msg, privacy) {
    const result = await window.ovktoybox.OVKAPI.call("gifts.send", {"user_ids": userIds, "gift_id": giftId, "message": msg, "privacy": privacy});
    return result
}

ovktoybox.methods.callApi = async function(method, opts) {
    const result = await window.ovktoybox.OVKAPI.call(method, opts);
    return result
}

ovktoybox.methods.toggleLoader = function() {
  u('#ajloader').toggleClass('shown')
}

ovktoybox.methods.showGiftsDialog = function() {
    var giftsmsg = new CMessageBox({
        title: ovktoybox.locale.branding,
        body: `<label>user_ids:</label>
<br><input id="uids" type="text" placeholder="1,2">
<br><label>gift_id:</label>
<br><input id="gid" type="number" min="0" placeholder="1">1</input>
<br><label>message:</label>
<br><textarea id="msg" placeholder="Да, я люблю мыть посуду..." style="resize: vertical; height: 61px;"></textarea>
<br><label>privacy:</label>
<br><input id="priv" type="number" min="0" max="1" placeholder="0">0</input>
`,
        buttons: [tr('send'), tr('close')],
        callbacks: [async () => {
                           if(u("#ajloader").hasClass("shown")) {return;}
                           const giftsmsgnode = document.querySelector(`.ovk-diag-cont[data-id="${giftsmsg.id}"]`);
                           const userids = giftsmsgnode.querySelector(`#uids`).value;
                           const giftid = giftsmsgnode.querySelector(`#gid`).value;
                           const msg = giftsmsgnode.querySelector(`#msg`).value;
                           const privacy = giftsmsgnode.querySelector(`#priv`).value;
                           ovktoybox.methods.toggleLoader();
                           const resp = await ovktoybox.methods.sendGifts(userids, giftid, msg, privacy);
                           if (resp && resp.success == 1) {
                               NewNotification(ovktoybox.locale.branding, `Успешно!<br>user_ids:${userids}<br>gift_id:${giftid}`, `/gift${giftid}_1.png`, () => {}, 5000, false);
                           } else {
                               NewNotification(ovktoybox.locale.branding, `Играл с писюном... Проиграл...<br>Код ошибки: ${resp.error_code}<br>Сообщение: ${resp.error_msg}<br>Подробности в консоли`, popupimg, () => {}, 5000, false);
                               console.error(resp);
                           }
                           ovktoybox.methods.toggleLoader();
                           }, () => {giftsmsg.close()}]
    });
}

ovktoybox.methods.showApiDialog = function() {
    var apimsg = new CMessageBox({
        title: ovktoybox.locale.branding,
        body: `<label>method:</label>
<br><input id="meth" type="text" placeholder="audio.getById"></input>
<br><label>opts:</label>
<br><textarea id="opts" placeholder='{"audios": "1"}' style="resize: vertical; height: 61px;"></textarea>
`,
        buttons: [tr('send'), tr('close')],
        callbacks: [async () => {
                           if(u("#ajloader").hasClass("shown")) {return;}
                           const apimsgnode = document.querySelector(`.ovk-diag-cont[data-id="${apimsg.id}"]`);
                           const meth = apimsgnode.querySelector(`#meth`).value;
                           let opts;
                           try {
                               opts = JSON.parse(apimsgnode.querySelector(`#opts`).value);
                           } catch(e) {
                               opts = {};
                           }

                           ovktoybox.methods.toggleLoader();
                           const resp = (await ovktoybox.methods.callApi(meth, opts) ?? `ты шо дебил`);
                           let parsed;
                           try {
                               parsed = await JSON.stringify(resp, null, 2)
                                                                          .replace(/&/g, "&amp;")
                                                                          .replace(/</g, "&lt;")
                                                                          .replace(/>/g, "&gt;")
                                                                          .replace(/\n/g, "<br>")
                                                                          .replace(/ /g, "&nbsp;");
                           } catch(e) {
                               parsed = resp
                                             .replace(/&/g, "&amp;")
                                             .replace(/</g, "&lt;")
                                             .replace(/>/g, "&gt;")
                                             .replace(/\n/g, "<br>")
                                             .replace(/ /g, "&nbsp;");
                           }
                           window.ovktoybox.methods.fastMsg(tr('message'), parsed);
                           ovktoybox.methods.toggleLoader();
                           }, () => {apimsg.close()}]
    });
}
})();
