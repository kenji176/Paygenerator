window.addEventListener('DOMContentLoaded', function () {
    function change_count() {
        const counter = document.getElementById('count')
        fetch("https://script.googleusercontent.com/macros/echo?user_content_key=4xiHZycjAcTakmti5OEBAgmlDnVDaHjdZD7a_WxMHvKDiULBQgfmytz9Qb4uPNdDlIoH0RqGl98NTiaMI-LoAeCcW5RbjJx8m5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnMGUmVsXRxFQlDf_VZxp4m24gEMHkG6-Rqw0S7T0VsKXoh4_BZH3TefWFBqXP4ia01DKKcZoQPle&lib=M5cGVpYzPffJzlBS-LfugPf6sUuSqfdfD")
            .then((res) => {
                return (res.json());
            })
            .then((json) => {
                counter.textContent = json.count;
            });
    }

    function generator_pay(callback) {
        fetch('https://script.google.com/macros/s/AKfycbxoabebpZAIknu_r1OEkvSZJYZSphNuChkiyyH2UIboZReDXfhc/exec', {
            method: 'POST',
            body: new URLSearchParams({
                'count': num.value,
                'mode': no - cors,
                'headers': {
                    'Content-Type': 'text/plain'
                }
            })
        });
        let pay_link = ""
        const text = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
        for (i = 0; i < num.value; i++) {
            if (Numbrs) {
                var randtext = Array.from(Array(8)).map(() => text[Math.floor(Math.random() * text.length)]).join('')
                pay_link += "[" + (Number(i) + 1) + "]" + "  https://pay.paypay.ne.jp/" + randtext + "\n"
            } else {
                var randtext = Array.from(Array(8)).map(() => text[Math.floor(Math.random() * text.length)]).join('')
                pay_link += "https://pay.paypay.ne.jp/" + randtext + "\n"
            }
        }
        if (TXT) {
            handleDownload(pay_link)
        } else {
            change_count()
            navigator.clipboard.writeText(pay_link);

        }
    }

    function handleDownload(text) {
        var blob = new Blob([text], {
            "type": "text/plain"
        });

        if (window.navigator.msSaveBlob) {
            window.navigator.msSaveBlob(blob, "test.txt");
            window.navigator.msSaveOrOpenBlob(blob, "test.txt");
        } else {
            document.getElementById("btn").href = window.URL.createObjectURL(blob);
        }
    }

    function change_setting() {
        if (swi.checked) {
            Numbrs = true
        } else {
            Numbrs = false
        }
    }

    function change_settingtext() {
        if (swi_text.checked) {
            btn.setAttribute("download", "test.txt");
            TXT = true
        } else {
            btn.removeAttribute("download");
            btn.removeAttribute("href");
            TXT = false
        }
    }
    const btn = document.getElementById('btn');
    const swi = document.getElementById('Switch');
    const swi_text = document.getElementById('Switch_text');
    const num = document.getElementById('Number');

    let Numbrs = false;
    let TXT = false;

    var toastElList = [].slice.call(document.querySelectorAll(".toast"));
    var toastList = toastElList.map(function (toastEl) {
        return new bootstrap.Toast(toastEl, {
            // オプション
            delay: 60000,
        });
    });


    swi.addEventListener('click', change_setting);
    swi_text.addEventListener('click', change_settingtext);
    btn.addEventListener('click', generator_pay);
    change_count()
});
