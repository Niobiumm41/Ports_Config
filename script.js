const btn = document.getElementById("btn");
const config = document.getElementById("config");
const port =  document.getElementById("port");
const dogovor =  document.getElementById("dogovor");
const utp_ftth =  document.getElementById("utp_ftth");
const sw =  document.getElementById("sw");
const A1_UTP = document.getElementById("A1_UTP");
const A1_FTTH = document.getElementById("A1_FTTH");



btn.addEventListener('click', Ports_Config);

function Ports_Config() {
//     if (sw.value == "D-LINK_1210_A1" && utp_ftth.value == "UTP") {
//         config.value == A1_UTP.textContent;
//         } 
//     if (sw.value = "D-LINK_1210_A2") {
//         config.value = "errrrr";
// }

var port_cur = port.value;
var dogovor_cur = dogovor.value;
var new_config = A1_UTP.textContent.replaceAll(":port:", port_cur);
var new_config_end = new_config.replaceAll(":dogovor:", dogovor_cur);
config.value = new_config_end;
}

