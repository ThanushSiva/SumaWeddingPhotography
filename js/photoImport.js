var xmlHttp = new XMLHttpRequest();
xmlHttp.open("GET", "https://raw.githubusercontent.com/ThanushSiva/SWP/main/img/portfolio/numberFinal.txt", false); // false for synchronous request
xmlHttp.send(null);
const num = xmlHttp.responseText;
xmlHttp.open("GET", "https://raw.githubusercontent.com/ThanushSiva/SWP/main/img/portfolio/dataNew.txt", false); // false for synchronous request
xmlHttp.send(null);
const dataString = xmlHttp.responseText;

const datas = JSON.parse(dataString);

const container = document.querySelector(".portfolio-filter")

let classString, i, finalOut="";

function trial() {
    for (let i = 0; i < num; i++) {
        let classString = "";
        switch (i % 11) {
            case 0: classString = "";
                break;
            case 1: classString = "large-width large-height";
                break;
            case 2: classString = "large-width";
                break;
            case 3: classString = "large-height";
                break;
            case 4: classString = "";
                break;
            case 5: classString = "";
                break;
            case 6: classString = "";
                break;
            case 7: classString = "";
                break;
            case 8: classString = "large-width";
                break;
            case 9: classString = "";
                break;
            case 10: classString = "large-width large-height";
                break;
            default: break;
        }
        finalOut += `
        <div class="pf-item ${classString} set-bg ${datas[i+1]}" data-setbg="https://raw.githubusercontent.com/ThanushSiva/SWP/main/img/portfolio/${i + 1}.jpg">
            <a href="https://raw.githubusercontent.com/ThanushSiva/SWP/main/img/portfolio/${i + 1}.jpg" class="pf-icon image-popup"><span class="icon_plus"></span></a>
            <div class="pf-text">
                <h4>SUMA CLICK</h4>
                <span>${datas[i+1]}</span>
            </div>
        </div>`
    }
    container.innerHTML = finalOut
}
trial()