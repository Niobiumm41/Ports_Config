const btn_create = document.getElementById("btn_create");
const btn_clean = document.getElementById("btn_clean");
const config = document.getElementById("config");
const interface = document.getElementById("interface");
const contract = document.getElementById("contract");
const vlan = document.getElementById("vlan");
const utp_ftth = document.getElementById("utp_ftth");
const sw = document.getElementById("sw");
const ip_sw = document.getElementById("ip_sw");
const pole_utp_ftth = document.getElementById("pole_utp_ftth");
const pole_port = document.getElementById("pole_port");
const pole_contract = document.getElementById("pole_contract");
const pole_vlan = document.getElementById("pole_vlan");
const parametr = document.getElementById("parametr");
const pole_portG4 = document.getElementById("pole_portG4");
const pole_portG58 = document.getElementById("pole_portG58");
const pole_snGPON = document.getElementById("pole_snGPON");
const pole_passGPON = document.getElementById("pole_passGPON");
const pole_ip_sw = document.getElementById("pole_ip_sw");
const pole_vlanTR069 = document.getElementById("pole_vlanTR069");
const pole_vlanFVNO = document.getElementById("pole_vlanFVNO");
const vlanTR069 = document.getElementById("vlanTR069");
const vlanFVNO = document.getElementById("vlanFVNO");

//config
const A1_UTP = document.getElementById("A1_UTP");
const A1_FTTH = document.getElementById("A1_FTTH");
const A2_UTP = document.getElementById("A2_UTP");
const A2_FTTH = document.getElementById("A2_FTTH");
const Eltex_UTP = document.getElementById("Eltex_UTP");
const Eltex_FTTH = document.getElementById("Eltex_FTTH");
const GPON_4000 = document.getElementById("GPON_4000");
const GPON_5800_245 = document.getElementById("GPON_5800_245");
const GPON_5800_other = document.getElementById("GPON_5800_other");

sw.addEventListener ('change', SW_parametr);
ip_sw.addEventListener ('change', IP_sw);
btn_create.addEventListener('click', Ports_Config);
btn_clean.addEventListener('click', Clean);

function SW_parametr() {
    if (sw.value == "D-LINK_1210_A1" || sw.value == "D-LINK_1210_A2") {
        pole_utp_ftth.style.display = "block";
        pole_port.style.display = "block";
        pole_contract.style.display = "block";
        pole_vlan.style.display = "none";
        pole_portG4.style.display = "none";
        pole_portG58.style.display = "none";
        pole_snGPON.style.display = "none";
        pole_passGPON.style.display = "none";
        pole_ip_sw.style.display = "none";
        pole_vlanTR069.style.display = "none";
        pole_vlanFVNO.style.display = "none";
    } 
    if (sw.value == "Eltex_2428") {
        pole_utp_ftth.style.display = "block";
        pole_port.style.display = "block";
        pole_contract.style.display = "block";
        pole_vlan.style.display = "block";
        pole_portG4.style.display = "none";
        pole_portG58.style.display = "none";
        pole_snGPON.style.display = "none";
        pole_passGPON.style.display = "none";
        pole_ip_sw.style.display = "none";
        pole_vlanTR069.style.display = "none";
        pole_vlanFVNO.style.display = "none";
    } 
    if (sw.value == "GPON_MA4000") {
        pole_portG4.style.display = "block";
        pole_portG58.style.display = "none";
        pole_snGPON.style.display = "block";
        pole_passGPON.style.display = "block";
        pole_utp_ftth.style.display = "none";
        pole_port.style.display = "none";
        pole_contract.style.display = "none";
        pole_vlan.style.display = "none";
        pole_ip_sw.style.display = "none";
        pole_vlanTR069.style.display = "none";
        pole_vlanFVNO.style.display = "none";
    } 
    if (sw.value == "GPON_MA5800") { 
        pole_ip_sw.style.display = "block";
        pole_portG58.style.display = "block";
        pole_contract.style.display = "block";
        pole_passGPON.style.display = "block";
        pole_snGPON.style.display = "none";
        pole_portG4.style.display = "none";
        pole_utp_ftth.style.display = "none";
        pole_port.style.display = "none";
        pole_vlan.style.display = "none";
    } 
    if (sw.value == "none") {
        pole_utp_ftth.style.display = "none";
        pole_port.style.display = "none";
        pole_contract.style.display = "none";
        pole_vlan.style.display = "none";
        pole_portG4.style.display = "none";
        pole_portG58.style.display = "none";
        pole_snGPON.style.display = "none";
        pole_passGPON.style.display = "none";
        pole_ip_sw.style.display = "none";
        pole_vlanTR069.style.display = "none";
        pole_vlanFVNO.style.display = "none";
    }
};

function IP_sw () {
    if (ip_sw.value == "ip_other") {
        pole_vlanTR069.style.display = "block";
        pole_vlanFVNO.style.display = "block";
    }
    if (ip_sw.value == "ip_245") {
        pole_vlanTR069.style.display = "none";
        pole_vlanFVNO.style.display = "none";
    }
}

function Ports_Config() {
    var interface_cur = interface.value;
    var contract_cur = contract.value;
    var vlan_cur = vlan.value;
    var slotG4_cur = slot_G4.value;
    var portG4_cur = port_G4.value;
    var idG4_cur = id_G4.value;
    var snG_cur = sn_GPON.value;
    var passG_cur = pass_GPON.value;
    var frameG58_cur = frame_G58.value;
    var slotG58_cur = slot_G58.value;
    var portG58_cur = port_G58.value;
    var idG58_cur = id_G58.value;
    var tag_vlanTR069_cur = vlanTR069.value;
    var tag_vlanFVNO_cur = vlanFVNO.value;

    var edit_config = {
        "{interface_id}": interface_cur
        , "{contract_id}": contract_cur
        , "{tag_vlan}": vlan_cur
        , "{slot}": slotG4_cur
        , "{port}": portG4_cur
        , "{id}": idG4_cur
        , "{serial}": snG_cur
        , "{ploam}": passG_cur
        ,"{frame_id}": frameG58_cur
        , "{slot_id}": slotG58_cur
        , "{port_id}": portG58_cur
        ,"{ont_id}": idG58_cur
        , "{tag_vlanTR069}": tag_vlanTR069_cur
        , "{tag_vlanFVNO}": tag_vlanFVNO_cur
    };

        if (sw.value == "D-LINK_1210_A1" && utp_ftth.value == "UTP") {
            var new_config = A1_UTP.textContent.replace(/{interface_id}|{contract_id}/g, (matched) => edit_config[matched]);
            config.value = new_config;
        } 
        if (sw.value == "D-LINK_1210_A1" && utp_ftth.value == "FTTH")  {
            var new_config = A1_FTTH.textContent.replace(/{interface_id}|{contract_id}/g, (matched) => edit_config[matched]);
            config.value = new_config;
        } 
        if (sw.value == "D-LINK_1210_A2" && utp_ftth.value == "UTP") {
            var new_config = A2_UTP.textContent.replace(/{interface_id}|{contract_id}/g, (matched) => edit_config[matched]);
            config.value = new_config;
        } 
        if (sw.value == "D-LINK_1210_A2" && utp_ftth.value == "FTTH") {
            var new_config = A2_FTTH.textContent.replace(/{interface_id}|{contract_id}/g, (matched) => edit_config[matched]);
            config.value = new_config;
        } 
        if (sw.value == "Eltex_2428" && utp_ftth.value == "UTP") {
            var new_config = Eltex_UTP.textContent.replace(/{interface_id}|{contract_id}|{tag_vlan}/g, (matched) => edit_config[matched]);
            config.value = new_config;
        } 
        if (sw.value == "Eltex_2428" && utp_ftth.value == "FTTH") {
            var new_config = Eltex_FTTH.textContent.replace(/{interface_id}|{contract_id}|{tag_vlan}/g, (matched) => edit_config[matched]);
            config.value = new_config;
        } 
        if (sw.value == "GPON_MA4000") {
            var new_config = GPON_4000.textContent.replace(/{slot}|{port}|{id}|{serial}|{ploam}/g, (matched) => edit_config[matched]);
            config.value = new_config;
        }
        if (sw.value == "GPON_MA5800" && ip_sw.value == "ip_245") {
            var new_config = GPON_5800_245.textContent.replace(/{frame_id}|{slot_id}|{port_id}|{ont_id}|{ploam}|{contract_id}/g, (matched) => edit_config[matched]);
            config.value = new_config;
        }
        if (sw.value == "GPON_MA5800" && ip_sw.value == "ip_other") {
            var new_config = GPON_5800_other.textContent.replace(/{frame_id}|{slot_id}|{port_id}|{ont_id}|{ploam}|{contract_id}|{tag_vlanTR069}|{tag_vlanFVNO}/g, (matched) => edit_config[matched]);
            config.value = new_config;
        }
    }

    function Clean() {
        interface.value = "";
        contract.value = "";
        vlan.value = "";
        slot_G4.value = "";
        port_G4.value = "";
        id_G4.value = "";
        sn_GPON.value = "";
        pass_GPON.value = "";
        frame_G58.value = "";
        slot_G58.value = "";
        port_G58.value = "";
        id_G58.value = "";
        vlanTR069.value = "";
        vlanFVNO.value = "";
        config.value = " ";
        utp_ftth.value = "none";
        ip_sw.value = "none";
    }
    