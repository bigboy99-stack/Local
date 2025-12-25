document.body.onload = initializeTheme,
setTimeout( () => pd2.focus(), 200);
const ld = document.querySelector(".lb")
const ht = document.querySelector("html")
const sb = document.querySelector(".sb")
const sv = document.querySelector(".sbs")
const hb = document.querySelector("#sb-btn")
const prj = document.querySelector(".prj")
const pd2 = document.querySelector(".pd2");
const ema = document.querySelector("#ema");
const btc = document.querySelector(".btc");
const pages = document.querySelector(".pages");
const num = document.querySelector(".num");
const total = document.querySelector(".total");
const host = document.querySelector(".host");
const select = document.querySelector("select");
const sa = ["SB","EC","ED","HC","RE","PE","EN","LF"]
const pm = "PAGES MINIMUM"

select.onchange = ()=>{
    switch (select.value.toString()) {
        case sa[0]: pages.textContent = `5 ${pm}`; host.textContent = '100/MONTH';total.textContent = '$2100';
        break;

        case sa[1]: pages.textContent = `10 ${pm}`; host.textContent = '200/MONTH';total.textContent = '$4200';
        break;
        
        case sa[2]: pages.textContent = `5 ${pm}`; host.textContent = '100/MONTH';total.textContent = '$2100';
        break;

        case sa[3]: pages.textContent = `5 ${pm}`;host.textContent = '100/MONTH';total.textContent = '$2100';
        break;

        case sa[4]: pages.textContent = `5 ${pm}`; host.textContent = '100/MONTH';total.textContent = '$2100';
        break;

        case sa[5]: pages.textContent = `1 PAGE MINIMUM`; host.textContent = '20/MONTH';total.textContent = '$420';
        break;

        case sa[6]: pages.textContent = `4 ${pm}`; host.textContent = '80/MONTH'; total.textContent = '$1700';
        break;

        case sa[7]: pages.textContent = `5 ${pm}`; host.textContent = '100/MONTH';total.textContent = '$2100';
        break;
    }
}


btc.onclick = () => {
  btc.select();
  btc.setSelectionRange(0, 99999);
  navigator.clipboard.writeText(btc.value);
  alert("bitcoin wallet copied to your clip board " + btc.value);
}

ema.onclick = () => {
  ema.select();
  ema.setSelectionRange(0, 99999);
  navigator.clipboard.writeText(ema.value);
  alert
  ("Copied the text: " + ema.value);
}
function initializeTheme() {
    "on" === localStorage.getItem("dark") ? "true" === ld.getAttribute("aria-checked") || (ld.setAttribute("aria-checked", "true"),
    ht.setAttribute("data-theme", "dark"),
    ld.textContent = "light ☀️",
    ht.className = "bd") : (ld.setAttribute("aria-checked", "false"),
    ht.removeAttribute("data-theme"),
    ld.textContent = "dark 🌙",
    ht.className = "bl")
}

function two() {
    "true" === ld.getAttribute("aria-checked") ? (localStorage.setItem("dark", "off"),
    ld.setAttribute("aria-checked", "false"),
    ht.removeAttribute("data-theme"),
    ld.textContent = "dark 🌙",
    ht.className = "bl") : (localStorage.setItem("dark", "on"),
    ld.setAttribute("aria-checked", "true"),
    ht.setAttribute("data-theme", "dark"),
    ld.textContent = "light ☀️",
    ht.className = "bd")
}
function toggleDropdown(t, e, o) {
    "true" === t.getAttribute("aria-expanded") ? (e.classList.remove(o),
    t.setAttribute("aria-expanded", "false")) : (e.classList.add(o),
    t.setAttribute("aria-expanded", "true"))
}
ld.onclick = two,
hb.onclick = () => {
    toggleDropdown(hb, sb, "sbb")
}
,
pd2.onclick = () => {
    toggleDropdown(pd2, prj, "uls")
}
,
document.addEventListener("keydown", t => {
    "Escape" === t.key && sb.classList.contains("sbb") && toggleDropdown(hb, sb, "sbb"),
    "Escape" === t.key && prj.classList.contains("uls") && toggleDropdown(pd2, prj, "uls")
}
),
document.addEventListener("click", t => {
    !sb.classList.contains("sbb") || sb.contains(t.target) || hb.contains(t.target) || toggleDropdown(hb, sb, "sbb"),
    !prj.classList.contains("uls") || prj.contains(t.target) || pd2.contains(t.target) || toggleDropdown(pd2, prj, "uls")
}
);
