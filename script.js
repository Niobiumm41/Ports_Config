const btn_create = document.getElementById("btn_create");
const btn_clean = document.getElementById("btn_clean");
const config = document.getElementById("config");
const port =  document.getElementById("port");
const dogovor =  document.getElementById("dogovor");
const vlan =  document.getElementById("vlan");
const utp_ftth =  document.getElementById("utp_ftth");
const sw =  document.getElementById("sw");
const pole_utp_ftth =  document.getElementById("pole_utp_ftth");
const pole_port =  document.getElementById("pole_port");
const pole_dogovor =  document.getElementById("pole_dogovor");
const pole_vlan =  document.getElementById("pole_vlan");
const parametr =  document.getElementById("parametr");
const pole_portGPON4000 =  document.getElementById("pole_portGPON4000");
const pole_portGPON5800 =  document.getElementById("pole_portGPON5800");
const pole_SNGPON =  document.getElementById("pole_SNGPON");
const pole_passGPON =  document.getElementById("pole_passGPON");

//Модели SW
const A1_UTP = document.getElementById("A1_UTP");
const A1_FTTH = document.getElementById("A1_FTTH");
const A2_UTP = document.getElementById("A2_UTP");
const A2_FTTH = document.getElementById("A2_FTTH");
const Eltex_UTP = document.getElementById("Eltex_UTP");
const Eltex_FTTH = document.getElementById("Eltex_FTTH");
const GPON_4000 = document.getElementById("GPON_4000");
const GPON_MA5800 = document.getElementById("GPON_MA5800");

sw.addEventListener ('change', SW_parametr)
btn_create.addEventListener('click', Ports_Config);
btn_clean.addEventListener('click', Clean);

function SW_parametr() {
    if (sw.value == "D-LINK_1210_A1" || sw.value == "D-LINK_1210_A2") {
        pole_utp_ftth.style.display = "block";
        pole_port.style.display = "block";
        pole_dogovor.style.display = "block";
        pole_vlan.style.display = "none";
        pole_portGPON4000.style.display = "none";
        pole_portGPON5800.style.display = "none";
        pole_SNGPON.style.display = "none";
        pole_passGPON.style.display = "none";
    } if (sw.value == "Eltex_2428") {
        pole_utp_ftth.style.display = "block";
        pole_port.style.display = "block";
        pole_dogovor.style.display = "block";
        pole_vlan.style.display = "block";
        pole_portGPON4000.style.display = "none";
        pole_portGPON5800.style.display = "none";
        pole_SNGPON.style.display = "none";
        pole_passGPON.style.display = "none";
    } if (sw.value == "GPON_MA4000") {
        pole_portGPON4000.style.display = "block";
        pole_portGPON5800.style.display = "none";
        pole_SNGPON.style.display = "block";
        pole_passGPON.style.display = "block";
        pole_utp_ftth.style.display = "none";
        pole_port.style.display = "none";
        pole_dogovor.style.display = "none";
        pole_vlan.style.display = "none";
    } if (sw.value == "GPON_MA5800") {  //
        pole_portGPON5800.style.display = "block";
        pole_SNGPON.style.display = "block";
        pole_passGPON.style.display = "block";
        pole_portGPON4000.style.display = "none";
        pole_utp_ftth.style.display = "none";
        pole_port.style.display = "none";
        pole_dogovor.style.display = "none";
        pole_vlan.style.display = "none";
        pole_portGPON5800.style.display = "none";
    } if (sw.value == "none") {
        pole_utp_ftth.style.display = "none";
        pole_port.style.display = "none";
        pole_dogovor.style.display = "none";
        pole_vlan.style.display = "none";
        pole_portGPON4000.style.display = "none";
        pole_portGPON5800.style.display = "none";
        pole_SNGPON.style.display = "none";
        pole_passGPON.style.display = "none";
    }
}

function Ports_Config() {
    var port_cur = port.value;
    var dogovor_cur = dogovor.value;
    var vlan_cur = vlan.value;
    var port1_GPON4000_cur = port1_GPON4000.value;
    var port2_GPON4000_cur = port2_GPON4000.value;
    var port3_GPON4000_cur = port3_GPON4000.value;

    var port1_GPON5800_cur = port1_GPON5800.value;
    var port2_GPON5800_cur = port2_GPON5800.value;
    var port3_GPON5800_cur = port3_GPON5800.value;
    var port4_GPON5800_cur = port4_GPON5800.value;
    var SN_GPON_cur = SN_GPON.value;
    var pass_GPON_cur = pass_GPON.value;
    var edit_config = {":port:": port_cur, ":dogovor:": dogovor_cur, ":vlan:":vlan_cur, ":port1_GPON4000:":port1_GPON4000_cur, 
        ":port2_GPON4000:":port2_GPON4000_cur, ":port3_GPON4000:":port3_GPON4000_cur, ":SN_GPON:":SN_GPON_cur, ":pass_GPON:":pass_GPON_cur,
        ":port1_GPON5800:":port1_GPON5800_cur, ":port2_GPON5800:":port2_GPON5800_cur, ":port3_GPON5800:":port3_GPON5800_cur,
        ":port43_GPON5800:":port4_GPON5800_cur
    };
        if (sw.value == "D-LINK_1210_A1" && utp_ftth.value == "UTP") {
            var new_config = A1_UTP.textContent.replace(/:port:|:dogovor:/g, (matched) => edit_config[matched]);
            config.value = new_config;
        } if (sw.value == "D-LINK_1210_A1" && utp_ftth.value == "FTTH")  {
            var new_config = A1_FTTH.textContent.replace(/:port:|:dogovor:/g, (matched) => edit_config[matched]);
            config.value = new_config;
        } if (sw.value == "D-LINK_1210_A2" && utp_ftth.value == "UTP") {
            var new_config = A2_UTP.textContent.replace(/:port:|:dogovor:/g, (matched) => edit_config[matched]);
            config.value = new_config;
        } if (sw.value == "D-LINK_1210_A2" && utp_ftth.value == "FTTH") {
            var new_config = A2_FTTH.textContent.replace(/:port:|:dogovor:/g, (matched) => edit_config[matched]);
            config.value = new_config;
        } if (sw.value == "Eltex_2428" && utp_ftth.value == "UTP") {
            var new_config = Eltex_UTP.textContent.replace(/:port:|:dogovor:|:vlan:/g, (matched) => edit_config[matched]);
            config.value = new_config;
        } if (sw.value == "Eltex_2428" && utp_ftth.value == "FTTH") {
            var new_config = Eltex_FTTH.textContent.replace(/:port:|:dogovor:|:vlan:/g, (matched) => edit_config[matched]);
            config.value = new_config;
        } if (sw.value == "GPON_MA4000") {
            var new_config = GPON_4000.textContent.replace(/:port1_GPON4000:|:port2_GPON4000:|:port3_GPON4000:|:SN_GPON:|:pass_GPON:/g, 
                (matched) => edit_config[matched]);
            config.value = new_config;
        }
    }

    function Clean() {

    } 
