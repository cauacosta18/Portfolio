let programming_text = "<p>Meu nome é Cauã Luiz Costa. Tive meu primeiro contato com a programação em 2024, quando me matriculei em um curso de informática onde aprendi sobre lógica de programação, bem como HTML e CSS.</p><br><p>Sempre gostei de desenhar, ilustrar, criar algo e por esse motivo me interessei pelo desenvolvimento web, assim como da programação no geral.</p>";
let art_text = "";

export function setupTabs () {
    let tab_div = document.getElementById("tabs");

    document.getElementById("tab-1").addEventListener("click", () => {
        tab_div.style.marginLeft = "0";

        document.getElementById("resume").innerHTML = programming_text;
     
    })

    document.getElementById("tab-2").addEventListener("click", () => {
        tab_div.style.marginLeft = "calc(-200% - 40px)";

        document.getElementById("resume").innerHTML = art_text;
    })
}