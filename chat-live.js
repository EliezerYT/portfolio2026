(function () {
  'use strict';

  const API = 'https://script.google.com/macros/s/AKfycbzcbBZtcpI7B41ngSMU6bAEjdOS-9PSEXmWBVF3EhcPg2T-be9ntGnW3_c5ANsVFYbEJg/exec';
  const CHAT_KEY = 'elydev_live_chat_v1';
  const USER_KEY = 'elydev_live_user_v1';
  const POLL_MS = 3000;
  const MODERATOR_POLL_MS = 2000;

  let chat = null;
  let user = null;
  let messages = [];
  let moderatorOnline = false;
  let moderatorChatEnabled = false;
  let presenceInitialized = false;
  let pollTimer = null;
  let lastMessageSignature = '';
  let moderatorPollTimer = null;
  let lastModeratorChatSignature = '';

  function esc(value) {
    return String(value == null ? '' : value).replace(/[&<>"']/g, function (c) {
      return ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'})[c];
    });
  }

  function jsonGet(action, extra) {
    const params = new URLSearchParams({ action: action });
    Object.keys(extra || {}).forEach(function (key) {
      if (extra[key] != null) params.set(key, extra[key]);
    });
    params.set('_', String(Date.now()));

    const controller = new AbortController();
    const timeout = setTimeout(function () {
      controller.abort();
    }, 10000);

    return fetch(API + '?' + params.toString(), {
      method: 'GET',
      cache: 'no-store',
      redirect: 'follow',
      signal: controller.signal
    }).then(function (response) {
      return response.text().then(function (text) {
        if (!response.ok) {
          throw new Error('HTTP ' + response.status);
        }

        try {
          return JSON.parse(text);
        } catch (e) {
          throw new Error(
            'Respuesta inválida de Apps Script: ' +
            text.slice(0, 180)
          );
        }
      });
    }).finally(function () {
      clearTimeout(timeout);
    });
  }

  function jsonPost(data) {
    return fetch(API, {
      method: 'POST',
      mode: 'no-cors',
      headers: { 'Content-Type': 'text/plain;charset=utf-8' },
      body: JSON.stringify(data)
    });
  }

  function uuid() {
    if (window.crypto && crypto.randomUUID) return crypto.randomUUID();
    return 'chat-' + Date.now() + '-' + Math.random().toString(36).slice(2);
  }

  function isModerator() {
    try {
      const raw = localStorage.getItem('portfolio_auth_user_v2');
      const saved = raw ? JSON.parse(raw) : null;
      return !!(saved && saved.role === 'moderator');
    } catch (e) {
      return false;
    }
  }

  function loadState() {
    try {
      user = JSON.parse(localStorage.getItem(USER_KEY) || 'null');
      chat = JSON.parse(localStorage.getItem(CHAT_KEY) || 'null');
    } catch (e) {
      user = null;
      chat = null;
    }
    if (!user) {
      user = { userID: uuid(), userName: '', userEmail: '' };
      saveState();
    }
  }

  function saveState() {
    try {
      localStorage.setItem(USER_KEY, JSON.stringify(user));
      localStorage.setItem(CHAT_KEY, JSON.stringify(chat));
    } catch (e) {}
  }

  function injectStyles() {
    if (document.getElementById('ely-live-chat-style')) return;
    const style = document.createElement('style');
    style.id = 'ely-live-chat-style';
    style.textContent = `
      #ely-live-chat-fab{position:fixed;right:20px;bottom:20px;z-index:1000;display:none;align-items:center;gap:8px;padding:11px 15px;border:1px solid rgba(34,211,238,.35);border-radius:14px;background:rgba(10,15,23,.92);color:#67e8f9;font:700 12px/1 system-ui,sans-serif;box-shadow:0 12px 35px rgba(0,0,0,.35);backdrop-filter:blur(12px);cursor:pointer;transition:.2s}
      #ely-live-chat-fab:hover{transform:translateY(-2px);background:rgba(15,23,35,.98);border-color:rgba(34,211,238,.65)}
      #ely-live-chat-fab .ely-live-dot{width:8px;height:8px;border-radius:50%;background:#34d399;box-shadow:0 0 10px #34d399}
      #ely-live-chat-window{position:fixed;right:20px;bottom:78px;z-index:1001;width:min(390px,calc(100vw - 24px));height:min(610px,calc(100vh - 100px));display:none;flex-direction:column;overflow:hidden;border:1px solid rgba(34,211,238,.22);border-radius:18px;background:#10151f;color:#f8fafc;box-shadow:0 25px 70px rgba(0,0,0,.5);font-family:system-ui,sans-serif}
      #ely-live-chat-window.open{display:flex}
      .ely-live-head{display:flex;align-items:center;justify-content:space-between;padding:14px 15px;border-bottom:1px solid #232b39;background:#0c1119}
      .ely-live-head-title{font-size:13px;font-weight:800}.ely-live-head-sub{font-size:10px;color:#64748b;margin-top:3px}
      .ely-live-close{border:0;background:transparent;color:#94a3b8;cursor:pointer;font-size:17px}
      .ely-live-body{flex:1;overflow:auto;padding:14px;background:#0d121a}
      .ely-live-empty{height:100%;display:flex;align-items:center;justify-content:center;text-align:center;color:#64748b;font-size:11px;padding:25px}
      .ely-live-msg{display:flex;margin:7px 0}.ely-live-msg.mine{justify-content:flex-end}.ely-live-bubble{max-width:82%;padding:9px 11px;border-radius:13px;background:#19212d;border:1px solid #263142;font-size:11px;line-height:1.45;white-space:pre-wrap;overflow-wrap:anywhere}.ely-live-msg.mine .ely-live-bubble{background:rgba(34,211,238,.12);border-color:rgba(34,211,238,.25)}.ely-live-time{display:block;margin-top:4px;color:#64748b;font-size:8px}
      .ely-live-form{padding:12px;border-top:1px solid #232b39;background:#0c1119}
      .ely-live-input,.ely-live-textarea{width:100%;box-sizing:border-box;border:1px solid #293344;border-radius:10px;background:#090d14;color:#fff;padding:9px 10px;font-size:11px;outline:none}.ely-live-input:focus,.ely-live-textarea:focus{border-color:#22d3ee}.ely-live-textarea{resize:none;min-height:42px;max-height:110px}
      .ely-live-row{display:flex;gap:7px;margin-top:7px}.ely-live-row>*{flex:1}.ely-live-send{border:0;border-radius:10px;background:#22d3ee;color:#061016;font-weight:800;cursor:pointer}.ely-live-send:disabled{opacity:.45;cursor:not-allowed}
      .ely-live-start{display:flex;flex-direction:column;gap:8px;padding:4px}.ely-live-start p{font-size:11px;color:#94a3b8;line-height:1.5;margin:0 0 4px}.ely-live-primary{border:0;border-radius:10px;background:#22d3ee;color:#061016;font-weight:800;padding:10px;cursor:pointer}
      .ely-chat-online{display:inline-flex;align-items:center;gap:5px;color:#34d399}.ely-chat-online:before{content:'';width:6px;height:6px;border-radius:50%;background:#34d399;box-shadow:0 0 7px #34d399}
      #ely-moderator-chat-tools{margin:12px 0;border:1px solid rgba(34,211,238,.2);border-radius:14px;background:rgba(34,211,238,.03);overflow:hidden}
      .ely-mod-chat-head{display:flex;align-items:center;justify-content:space-between;padding:11px 12px;border-bottom:1px solid #232b39}.ely-mod-chat-head strong{font-size:11px}.ely-mod-chat-head span{font-size:9px;color:#64748b}
      .ely-mod-chat-list{max-height:170px;overflow:auto;padding:7px}.ely-mod-chat-item{display:flex;align-items:center;justify-content:space-between;gap:8px;padding:9px;border-radius:9px;cursor:pointer}.ely-mod-chat-item:hover,.ely-mod-chat-item.active{background:rgba(255,255,255,.05)}.ely-mod-chat-item b{display:block;font-size:10px}.ely-mod-chat-item small{display:block;color:#64748b;font-size:8px;margin-top:2px}.ely-mod-chat-item button{border:1px solid rgba(34,211,238,.25);background:rgba(34,211,238,.08);color:#67e8f9;border-radius:7px;padding:5px 7px;font-size:9px;font-weight:700;cursor:pointer}
      .ely-mod-chat-view{display:none;border-top:1px solid #232b39}.ely-mod-chat-view.open{display:block}.ely-mod-chat-title{padding:9px 11px;font-size:10px;color:#94a3b8}.ely-mod-chat-messages{height:230px;overflow:auto;padding:8px}.ely-mod-chat-compose{display:flex;gap:6px;padding:8px;border-top:1px solid #232b39}.ely-mod-chat-compose textarea{flex:1;resize:none;border:1px solid #293344;border-radius:8px;background:#090d14;color:#fff;padding:7px;font-size:10px}.ely-mod-chat-compose button{border:0;border-radius:8px;background:#22d3ee;color:#061016;font-weight:800;font-size:9px;padding:0 10px}
      .ely-mod-status-actions{display:flex;gap:6px;padding:8px;border-top:1px solid #232b39}.ely-mod-status-actions button{flex:1;border:1px solid #293344;background:#111823;color:#cbd5e1;border-radius:8px;padding:6px;font-size:9px;cursor:pointer}.ely-mod-status-actions button:hover{border-color:#22d3ee;color:#67e8f9}
      html.light #ely-live-chat-window{background:#fff;color:#0f172a;border-color:#cbd5e1}html.light .ely-live-head,html.light .ely-live-form{background:#f8fafc;border-color:#e2e8f0}html.light .ely-live-body{background:#f1f5f9}html.light .ely-live-bubble{background:#fff;border-color:#dbe2ea;color:#0f172a}html.light .ely-live-input,html.light .ely-live-textarea{background:#fff;color:#0f172a;border-color:#cbd5e1}
      @media(max-width:600px){#ely-live-chat-fab{right:12px;bottom:12px}#ely-live-chat-window{right:12px;bottom:66px;width:calc(100vw - 24px);height:calc(100vh - 84px)}}
    `;
    document.head.appendChild(style);
  }

  function buildUI() {
    if (document.getElementById('ely-live-chat-window')) return;
    const fab = document.createElement('button');
    fab.id = 'ely-live-chat-fab';
    fab.type = 'button';
    fab.innerHTML = '<span class="ely-live-dot"></span><span>Chat en vivo</span>';
    fab.onclick = openChat;

    const win = document.createElement('div');
    win.id = 'ely-live-chat-window';
    win.innerHTML = `
      <div class="ely-live-head">
        <div><div class="ely-live-head-title">💬 Soporte en vivo</div><div id="ely-live-head-status" class="ely-live-head-sub">Comprobando disponibilidad...</div></div>
        <button class="ely-live-close" type="button" aria-label="Cerrar">✕</button>
      </div>
      <div id="ely-live-body" class="ely-live-body"></div>
      <div id="ely-live-form" class="ely-live-form"></div>
    `;
    win.querySelector('.ely-live-close').onclick = closeChat;
    document.body.appendChild(fab);
    document.body.appendChild(win);
  }

  function openChat() {
    const win = document.getElementById('ely-live-chat-window');
    if (!win) return;
    win.classList.add('open');
    renderChat();
    if (!isModerator()) ensureChatPolling();
  }

  function closeChat() {
    const win = document.getElementById('ely-live-chat-window');
    if (win) win.classList.remove('open');
  }

  function setFabVisible(show) {
    const fab = document.getElementById('ely-live-chat-fab');
    if (fab) fab.style.display = show ? 'inline-flex' : 'none';
  }

  function getContactValues() {
    const q = function(id){ const el=document.getElementById(id); return el ? String(el.value || '').trim() : ''; };
    return { name:q('contact-name'), email:q('contact-email') };
  }

  function renderChat() {
    const body = document.getElementById('ely-live-body');
    const form = document.getElementById('ely-live-form');
    const status = document.getElementById('ely-live-head-status');
    if (!body || !form) return;
    status.innerHTML = moderatorOnline ? '<span class="ely-chat-online">Moderador conectado</span>' : 'El moderador no está disponible';

    if (isModerator() && (!chat || chat.status === 'closed')) {
      body.innerHTML = '<div class="ely-live-start"><p>Estás conectado como moderador. Los chats de los visitantes aparecen en el panel de <b>Mensajes → Chat en vivo</b>.</p><button id="ely-live-open-messages" class="ely-live-primary" type="button">Abrir Chat en vivo</button></div>';
      form.innerHTML = '';
      const openMessages = document.getElementById('ely-live-open-messages');
      openMessages.onclick = function(){
        closeChat();
        const modal = document.getElementById('messages-modal');
        if (modal) modal.classList.remove('hidden');
        const panel = document.getElementById('ely-moderator-chat-tools');
        if (panel) panel.scrollIntoView({behavior:'smooth',block:'start'});
      };
      return;
    }

    if (!chat || chat.status === 'closed') {
      body.innerHTML = '<div class="ely-live-start"><p>Habla directamente conmigo mientras estoy conectado. Tu conversación quedará guardada para continuar el soporte.</p>' +
        '<input id="ely-live-name" class="ely-live-input" placeholder="Tu nombre" value="' + esc(user.userName || getContactValues().name) + '">' +
        '<input id="ely-live-email" class="ely-live-input" type="email" placeholder="Tu correo" value="' + esc(user.userEmail || getContactValues().email) + '">' +
        '<button id="ely-live-start-btn" class="ely-live-primary" type="button">Iniciar chat</button></div>';
      form.innerHTML = '';
      const start = document.getElementById('ely-live-start-btn');
      start.disabled = !moderatorOnline;
      start.onclick = startChat;
      return;
    }

    body.innerHTML = messages.length ? messages.map(function(m){
      const mine = String(m.sender) === (isModerator() ? 'moderator' : 'user');
      const time = m.timestamp ? new Date(m.timestamp).toLocaleTimeString([], {hour:'2-digit',minute:'2-digit'}) : '';
      return '<div class="ely-live-msg ' + (mine ? 'mine' : '') + '"><div class="ely-live-bubble">' + esc(m.message) + '<span class="ely-live-time">' + esc(time) + '</span></div></div>';
    }).join('') : '<div class="ely-live-empty">No hay mensajes todavía.</div>';
    body.scrollTop = body.scrollHeight;
    form.innerHTML = '<div class="ely-live-row"><textarea id="ely-live-input" class="ely-live-textarea" placeholder="Escribe un mensaje..."></textarea><button id="ely-live-send" class="ely-live-send" type="button">Enviar</button></div>';
    document.getElementById('ely-live-send').onclick = function(){ sendMessage(false); };
    document.getElementById('ely-live-input').addEventListener('keydown', function(e){ if(e.key==='Enter' && !e.shiftKey){e.preventDefault();sendMessage(false);} });
  }

  function startChat() {
    const name = String(document.getElementById('ely-live-name').value || '').trim();
    const email = String(document.getElementById('ely-live-email').value || '').trim();
    if (!name || !email) return;
    user.userName = name;
    user.userEmail = email;
    chat = { chatID: uuid(), userID: user.userID, userName: name, userEmail: email, status: 'pending' };
    saveState();
    jsonPost({ action:'saveRealtimeSupport', type:'support_chat', chatID:chat.chatID, userID:user.userID, userName:name, userEmail:email, sender:'user', status:'pending' });
    renderChat();
    sendMessage(true);
    ensureChatPolling();
  }

  function sendMessage(isFirst) {
    const input = document.getElementById('ely-live-input');
    if (!input && !isFirst) return;
    const message = isFirst ? 'Hola, necesito soporte.' : String(input.value || '').trim();
    if (!message || !chat) return;
    if (input) input.value = '';
    const item = { action:'saveRealtimeSupport', type:'support_message', chatID:chat.chatID, messageID:uuid(), userID:user.userID, userName:user.userName, userEmail:user.userEmail, sender:isModerator()?'moderator':'user', message:message, status:chat.status };
    jsonPost(item).catch(function(){});
    messages.push({messageID:item.messageID,chatID:item.chatID,userID:item.userID,userName:item.userName,userEmail:item.userEmail,sender:item.sender,message:item.message,timestamp:new Date().toISOString()});
    renderChat();
  }

  function ensureChatPolling() {
    if (pollTimer) return;
    pollTimer = setInterval(refreshCurrentChat, POLL_MS);
    refreshCurrentChat();
  }

  function refreshCurrentChat() {
    if (!chat || chat.status === 'closed') return;
    jsonGet('getSupportMessages', { chatID:chat.chatID }).then(function(res){
      const list = res && Array.isArray(res.data) ? res.data : [];
      const sig = list.map(function(x){return x.messageID || x.timestamp || x.message;}).join('|');
      if (sig !== lastMessageSignature) {
        lastMessageSignature = sig;
        messages = list;
        renderChat();
      }
    }).catch(function(){});
  }

  function checkPresence() {
    return jsonGet('getModeratorPresence').then(function(res){
      const p = res && res.data ? res.data : {};
      const serverOnline = !!p.online;

      if (isModerator()) {
        if (!presenceInitialized) {
          moderatorChatEnabled = serverOnline;
          presenceInitialized = true;
          updatePresenceToggle();
        }

        moderatorOnline = moderatorChatEnabled;
        setFabVisible(true);
      } else {
        moderatorOnline = serverOnline;
        setFabVisible(moderatorOnline);
      }

      const win = document.getElementById('ely-live-chat-window');
      if (win && win.classList.contains('open')) renderChat();
      hookContactModal();

      return moderatorOnline;
    }).catch(function(){
      if (!isModerator()) {
        moderatorOnline = false;
        setFabVisible(false);
        hookContactModal();
      }
      return isModerator() ? moderatorChatEnabled : false;
    });
  }

  function setPresenceState(online) {
    if (!isModerator() && online) return;
    const params = new URLSearchParams({
      action: 'setModeratorPresence',
      online: online ? 'true' : 'false',
      cacheBust: String(Date.now())
    });
    return fetch(API + '?' + params.toString(), {
      method: 'GET',
      cache: 'no-store',
      keepalive: true
    }).then(function(r){ return r.json().catch(function(){ return null; }); });
  }

  function updatePresenceToggle() {
    const btn = document.getElementById('ely-mod-presence-toggle');
    if (!btn) return;
    btn.textContent = moderatorChatEnabled ? 'Desactivar chat en vivo' : 'Activar chat en vivo';
    btn.style.background = moderatorChatEnabled ? 'rgba(52,211,153,.13)' : 'rgba(34,211,238,.08)';
    btn.style.borderColor = moderatorChatEnabled ? 'rgba(52,211,153,.4)' : 'rgba(34,211,238,.25)';
    btn.style.color = moderatorChatEnabled ? '#6ee7b7' : '#67e8f9';
    btn.setAttribute('aria-pressed', moderatorChatEnabled ? 'true' : 'false');
  }

  function toggleModeratorPresence() {
    if (!isModerator()) return;

    const next = !moderatorChatEnabled;
    const btn = document.getElementById('ely-mod-presence-toggle');

    if (btn) btn.disabled = true;

    setPresenceState(next).then(function(){
      moderatorChatEnabled = next;
      presenceInitialized = true;
      moderatorOnline = next;

      updatePresenceToggle();
      setFabVisible(true);

      const win = document.getElementById('ely-live-chat-window');
      if (win && win.classList.contains('open')) renderChat();

      hookContactModal();
    }).catch(function(){
      if (btn) btn.textContent = 'Error al actualizar disponibilidad';
    }).finally(function(){
      if (btn) btn.disabled = false;
    });
  }

  function startModeratorPresence() {
    if (!isModerator()) return;

    jsonGet('getModeratorPresence').then(function(res){
      const p = res && res.data ? res.data : {};
      moderatorChatEnabled = !!p.online;
      moderatorOnline = moderatorChatEnabled;
      presenceInitialized = true;
      updatePresenceToggle();
      setFabVisible(true);
    }).catch(function(){});
  }

  function formatTime(v) {
    if (!v) return '';
    try { return new Date(v).toLocaleTimeString([], {hour:'2-digit',minute:'2-digit'}); } catch(e) { return ''; }
  }

  function ensureModeratorPanel() {
    if (!isModerator()) return;
    const host = document.getElementById('messages-modal');
    if (!host || document.getElementById('ely-moderator-chat-tools')) return;
    const content = host.querySelector('.p-3.sm\\:p-4') || host.querySelector('[class*="max-h-\\[78vh\\]"]');
    if (!content) return;
    const panel = document.createElement('div');
    panel.id = 'ely-moderator-chat-tools';
    panel.innerHTML = `
      <div class="ely-mod-chat-head"><strong>💬 Chat en vivo</strong><button type="button" id="ely-mod-presence-toggle">Activar chat en vivo</button><span id="ely-mod-chat-count">0 conversaciones</span></div>
      <div id="ely-mod-chat-list" class="ely-mod-chat-list"><div class="ely-live-empty" style="height:70px">Cargando chats...</div></div>
      <div id="ely-mod-chat-view" class="ely-mod-chat-view">
        <div id="ely-mod-chat-title" class="ely-mod-chat-title"></div>
        <div id="ely-mod-chat-messages" class="ely-mod-chat-messages"></div>
        <div class="ely-mod-chat-compose"><textarea id="ely-mod-chat-input" rows="2" placeholder="Responder..."></textarea><button id="ely-mod-chat-send" type="button">Enviar</button></div>
        <div class="ely-mod-status-actions"><button type="button" id="ely-mod-chat-activate">Activar</button><button type="button" id="ely-mod-chat-close">Cerrar chat</button></div>
      </div>
    `;
    content.prepend(panel);
    document.getElementById('ely-mod-presence-toggle').onclick = toggleModeratorPresence;
    updatePresenceToggle();
    document.getElementById('ely-mod-chat-send').onclick = function(){ sendModeratorMessage(); };
    document.getElementById('ely-mod-chat-input').addEventListener('keydown', function(e){if(e.key==='Enter'&&!e.shiftKey){e.preventDefault();sendModeratorMessage();}});
    document.getElementById('ely-mod-chat-activate').onclick = function(){ setSelectedChatStatus('active'); };
    document.getElementById('ely-mod-chat-close').onclick = function(){ setSelectedChatStatus('closed'); };
    ensureModeratorPolling();
  }

  let selectedModeratorChat = null;
  let moderatorChats = [];

  function refreshModeratorChats() {
    if (!isModerator()) return;

    const list = document.getElementById('ely-mod-chat-list');
    const count = document.getElementById('ely-mod-chat-count');

    if (!list) return;

    jsonGet('getSupportChats').then(function(res) {
      if (!res || res.success !== true) {
        throw new Error(
          res && res.error
            ? res.error
            : 'No se pudieron cargar los chats.'
        );
      }

      const incoming = Array.isArray(res.data) ? res.data : [];

      moderatorChats = incoming
        .filter(function(item) {
          return String(item.status || '').toLowerCase() !== 'closed';
        })
        .sort(function(a, b) {
          const ta = new Date(a.timestamp || 0).getTime() || 0;
          const tb = new Date(b.timestamp || 0).getTime() || 0;
          return tb - ta;
        });

      if (count) {
        count.textContent =
          moderatorChats.length +
          (moderatorChats.length === 1
            ? ' conversación'
            : ' conversaciones');
      }

      const signature = moderatorChats.map(function(item) {
        return [
          item.chatID || '',
          item.status || '',
          item.timestamp || '',
          item.userName || '',
          item.userEmail || ''
        ].join(':');
      }).join('|');

      if (signature !== lastModeratorChatSignature) {
        lastModeratorChatSignature = signature;

        if (!moderatorChats.length) {
          list.innerHTML =
            '<div class="ely-live-empty" style="height:70px">' +
            'No hay chats pendientes.' +
            '</div>';
        } else {
          list.innerHTML = moderatorChats.map(function(item) {
            const active =
              selectedModeratorChat &&
              selectedModeratorChat.chatID === item.chatID;

            return (
              '<div class="ely-mod-chat-item ' +
              (active ? 'active' : '') +
              '" data-chat-id="' +
              esc(item.chatID || '') +
              '">' +
                '<div>' +
                  '<b>' +
                    esc(item.userName || 'Usuario') +
                  '</b>' +
                  '<small>' +
                    esc(item.userEmail || '') +
                    ' · ' +
                    esc(item.status || 'pending') +
                  '</small>' +
                '</div>' +
                '<button type="button">Abrir</button>' +
              '</div>'
            );
          }).join('');

          list.querySelectorAll('.ely-mod-chat-item').forEach(function(el) {
            el.onclick = function() {
              selectModeratorChat(
                el.getAttribute('data-chat-id')
              );
            };
          });
        }
      }

      if (selectedModeratorChat) {
        const fresh = moderatorChats.find(function(item) {
          return item.chatID === selectedModeratorChat.chatID;
        });

        if (fresh) {
          selectedModeratorChat = fresh;
          refreshModeratorMessages();
        } else {
          selectedModeratorChat = null;

          const view =
            document.getElementById('ely-mod-chat-view');

          if (view) {
            view.classList.remove('open');
          }
        }
      }
    }).catch(function(error) {
      console.error('[ElyLiveChat] Error cargando chats:', error);

      list.innerHTML =
        '<div class="ely-live-empty" style="height:70px">' +
        'Error cargando chats.<br>' +
        '<small>' +
        esc(error && error.name === 'AbortError'
          ? 'La conexión tardó demasiado.'
          : (error && error.message) || 'Error desconocido') +
        '</small>' +
        '</div>';
    });
  }

  function ensureModeratorPolling() {
    if (!isModerator() || moderatorPollTimer) return;
    moderatorPollTimer = setInterval(function(){
      refreshModeratorChats();
      if (selectedModeratorChat) refreshModeratorMessages();
    }, MODERATOR_POLL_MS);
    refreshModeratorChats();
  }

  function selectModeratorChat(chatID) {
    selectedModeratorChat = moderatorChats.find(function(x){return x.chatID===chatID;}) || null;
    const view = document.getElementById('ely-mod-chat-view');
    if (!view || !selectedModeratorChat) return;
    view.classList.add('open');
    const title = document.getElementById('ely-mod-chat-title');
    if (title) title.textContent = selectedModeratorChat.userName + ' · ' + selectedModeratorChat.userEmail;
    refreshModeratorMessages();
    refreshModeratorChats();
  }

  function refreshModeratorMessages() {
    if (!selectedModeratorChat) return;
    jsonGet('getSupportMessages', {chatID:selectedModeratorChat.chatID}).then(function(res){
      const list = res && Array.isArray(res.data) ? res.data : [];
      const el = document.getElementById('ely-mod-chat-messages');
      if (!el) return;
      el.innerHTML = list.map(function(m){
        const mine = m.sender === 'moderator';
        return '<div class="ely-live-msg ' + (mine?'mine':'') + '"><div class="ely-live-bubble">' + esc(m.message) + '<span class="ely-live-time">' + esc(formatTime(m.timestamp)) + '</span></div></div>';
      }).join('') || '<div class="ely-live-empty" style="height:100px">Sin mensajes.</div>';
      el.scrollTop = el.scrollHeight;
    }).catch(function(){});
  }

  function sendModeratorMessage() {
    if (!selectedModeratorChat) return;
    const input = document.getElementById('ely-mod-chat-input');
    const message = String(input.value || '').trim();
    if (!message) return;
    input.value = '';
    jsonPost({action:'saveRealtimeSupport',type:'support_message',chatID:selectedModeratorChat.chatID,messageID:uuid(),userID:selectedModeratorChat.userID,userName:selectedModeratorChat.userName,userEmail:selectedModeratorChat.userEmail,sender:'moderator',message:message,status:selectedModeratorChat.status}).catch(function(){});
    setTimeout(refreshModeratorMessages, 500);
  }

  function setSelectedChatStatus(status) {
    if (!selectedModeratorChat) return;
    jsonPost({action:'updateSupportChatStatus',chatID:selectedModeratorChat.chatID,status:status}).catch(function(){});
    selectedModeratorChat.status = status;
    if (status === 'closed') {
      selectedModeratorChat = null;
      const view = document.getElementById('ely-mod-chat-view');
      if (view) view.classList.remove('open');
    }
    setTimeout(refreshModeratorChats, 500);
  }

  function hookContactModal() {
    const modal = document.getElementById('contact-modal');
    if (!modal) return;
    if (!modal.querySelector('#ely-live-contact-btn')) {
      const submit = document.getElementById('contact-submit-btn');
      if (!submit) return;
      const row = submit.parentElement;
      const btn = document.createElement('button');
      btn.id = 'ely-live-contact-btn';
      btn.type = 'button';
      btn.className = 'hidden mr-auto px-4 py-2 rounded-lg bg-cyan-400/10 border border-cyan-400/30 text-cyan-300 hover:bg-cyan-400/20 text-xs font-bold transition-all items-center gap-1.5';
      btn.innerHTML = '<span>●</span><span>Chat en vivo</span>';
      btn.onclick = function(){
        const vals=getContactValues();
        if(vals.name) user.userName=vals.name;
        if(vals.email) user.userEmail=vals.email;
        saveState();
        openChat();
      };
      row.insertBefore(btn, row.firstChild);
    }
    const btn=document.getElementById('ely-live-contact-btn');
    if(btn) btn.style.display=moderatorOnline && !isModerator() ? 'inline-flex' : 'none';
  }

  function observeDOM() {
    const observer = new MutationObserver(function(){
      hookContactModal();
      if (isModerator()) ensureModeratorPanel();
    });
    observer.observe(document.body,{childList:true,subtree:true});
    hookContactModal();
  }

  function init() {
    loadState();
    injectStyles();
    buildUI();
    observeDOM();
    checkPresence();
    setInterval(checkPresence, 15000);
    if (isModerator()) {
      ensureModeratorPanel();
      ensureModeratorPolling();
    }
    window.addEventListener('storage', function(){ checkPresence(); });
  }

  window.ElyLiveChat = {
    open: openChat,
    close: closeChat,
    refresh: checkPresence
  };

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();