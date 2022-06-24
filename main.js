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
                'count': Paypay['num'].value
            })
        });
        let pay_link = ""
        const text = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
        for (i = 0; i < Paypay['num'].value; i++) {
            if (Paypay['s_num'].checked) {
                var randtext = Array.from(Array(8)).map(() => text[Math.floor(Math.random() * text.length)]).join('')
                pay_link += "[" + (Number(i) + 1) + "] " + "  https://pay.paypay.ne.jp/" + randtext + "\n"
            } else {
                var randtext = Array.from(Array(8)).map(() => text[Math.floor(Math.random() * text.length)]).join('')
                pay_link += "https://pay.paypay.ne.jp/" + randtext + "\n"
            }
        }
        if (Paypay['s_text'].checked) {
            Paypay['btn'].setAttribute("download", "paypay.txt");
            handleDownload(pay_link, 'Pay_btn')
        } else {
            Paypay['btn'].removeAttribute("download");
            Paypay['btn'].removeAttribute("href");
            change_count()
            navigator.clipboard.writeText(pay_link);


        }
    }

    function generator_amazon(callback) {
        fetch('https://script.google.com/macros/s/AKfycbxoabebpZAIknu_r1OEkvSZJYZSphNuChkiyyH2UIboZReDXfhc/exec', {
            method: 'POST',
            body: new URLSearchParams({
                'count': Amazon['num'].value
            })
        });
        let amazon_link = ""
        const text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
        for (i = 0; i < Amazon['num'].value; i++) {
            if (Amazon['s_num'].checked) {
                var rand1 = Array.from(Array(3)).map(() => text[Math.floor(Math.random() * text.length)]).join('')
                var rand2 = Array.from(Array(6)).map(() => text[Math.floor(Math.random() * text.length)]).join('')
                var rand3 = Array.from(Array(5)).map(() => text[Math.floor(Math.random() * text.length)]).join('')
                amazon_link += "[" + (Number(i) + 1) + "] " + "A" + rand1 + ' ' + rand2 + ' ' + rand3 + "\n"
            } else {
                var rand1 = Array.from(Array(3)).map(() => text[Math.floor(Math.random() * text.length)]).join('')
                var rand2 = Array.from(Array(6)).map(() => text[Math.floor(Math.random() * text.length)]).join('')
                var rand3 = Array.from(Array(5)).map(() => text[Math.floor(Math.random() * text.length)]).join('')
                amazon_link += "A" + rand1 + ' ' + rand2 + ' ' + rand3 + "\n"
            }
        }
        if (Amazon['s_text'].checked) {
            Amazon['btn'].setAttribute("download", "amazon.txt");
            handleDownload(amazon_link, 'Amazon_btn')
        } else {
            Amazon['btn'].removeAttribute("download");
            Amazon['btn'].removeAttribute("href");
            change_count()
            navigator.clipboard.writeText(amazon_link);
        }
    }
    function generator_discord(callback) {
        fetch('https://script.google.com/macros/s/AKfycbxoabebpZAIknu_r1OEkvSZJYZSphNuChkiyyH2UIboZReDXfhc/exec', {
            method: 'POST',
            body: new URLSearchParams({
                'count': discord['num'].value
            })
        });
        let nitro_link = ""
        const text = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
        for (i = 0; i < discord['num'].value; i++) {
            if (discord['s_num'].checked) {
                var nitro = Array.from(Array(16)).map(() => text[Math.floor(Math.random() * text.length)]).join('')
                nitro_link += "[" + (Number(i) + 1) + "] " + 'https://discord.gift/' + nitro + "\n"
            } else {
                var nitro = Array.from(Array(16)).map(() => text[Math.floor(Math.random() * text.length)]).join('')
                nitro_link += 'https://discord.gift/' + nitro + "\n"
            }
        }
        if (discord['s_text'].checked) {
            discord['btn'].setAttribute("download", "discord.txt");
            handleDownload(nitro_link, 'Discord_btn')
        } else {
            discord['btn'].removeAttribute("download");
            discord['btn'].removeAttribute("href");
            change_count()
            navigator.clipboard.writeText(nitro_link);
        }
    }
    function generator_iTunes(callback) {
        fetch('https://script.google.com/macros/s/AKfycbxoabebpZAIknu_r1OEkvSZJYZSphNuChkiyyH2UIboZReDXfhc/exec', {
            method: 'POST',
            body: new URLSearchParams({
                'count': iTunes['num'].value
            })
        });
        let iTunes_link = ""
        const text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
        for (i = 0; i < iTunes['num'].value; i++) {
            if (iTunes['s_num'].checked) {
                var iTunesr = Array.from(Array(15)).map(() => text[Math.floor(Math.random() * text.length)]).join('')
                iTunes_link += "[" + (Number(i) + 1) + "] " + 'X' + iTunesr + "\n"
            } else {
                var iTunesr = Array.from(Array(15)).map(() => text[Math.floor(Math.random() * text.length)]).join('')
                iTunes_link += 'X' + iTunesr + "\n"
            }
        }
        if (iTunes['s_text'].checked) {
            iTunes['btn'].setAttribute("download", "iTunes.txt");
            handleDownload(iTunes_link, 'iTunes_btn')
        } else {
            iTunes['btn'].removeAttribute("download");
            iTunes['btn'].removeAttribute("href");
            change_count()
            navigator.clipboard.writeText(iTunes_link);
        }
    }
    function generator_FN(callback) {
        fetch('https://script.google.com/macros/s/AKfycbxoabebpZAIknu_r1OEkvSZJYZSphNuChkiyyH2UIboZReDXfhc/exec', {
            method: 'POST',
            body: new URLSearchParams({
                'count': FN['num'].value
            })
        });
        let FN_link = ""
        const text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
        for (i = 0; i < FN['num'].value; i++) {
            if (FN['s_num'].checked) {
                var FNlink1 = Array.from(Array(5)).map(() => text[Math.floor(Math.random() * text.length)]).join('')
                var FNlink2 = Array.from(Array(5)).map(() => text[Math.floor(Math.random() * text.length)]).join('')
                var FNlink3 = Array.from(Array(5)).map(() => text[Math.floor(Math.random() * text.length)]).join('')
                var FNlink4 = Array.from(Array(5)).map(() => text[Math.floor(Math.random() * text.length)]).join('')
                FN_link += "[" + (Number(i) + 1) + "] " + FNlink1 + '-' + FNlink2 + '-' + FNlink3 + '-' + FNlink4 + "\n"
            } else {
                var FNlink1 = Array.from(Array(5)).map(() => text[Math.floor(Math.random() * text.length)]).join('')
                var FNlink2 = Array.from(Array(5)).map(() => text[Math.floor(Math.random() * text.length)]).join('')
                var FNlink3 = Array.from(Array(5)).map(() => text[Math.floor(Math.random() * text.length)]).join('')
                var FNlink4 = Array.from(Array(5)).map(() => text[Math.floor(Math.random() * text.length)]).join('')
                FN_link += FNlink1 + '-' + FNlink2 + '-' + FNlink3 + '-' + FNlink4 + "\n"
            }
        }
        if (FN['s_text'].checked) {
            FN['btn'].setAttribute("download", "FN.txt");
            handleDownload(FN_link, 'FN_btn')
        } else {
            FN['btn'].removeAttribute("download");
            FN['btn'].removeAttribute("href");
            change_count()
            navigator.clipboard.writeText(FN_link);
        }
    }
    function generator_A(callback) {
        fetch('https://script.google.com/macros/s/AKfycbxoabebpZAIknu_r1OEkvSZJYZSphNuChkiyyH2UIboZReDXfhc/exec', {
            method: 'POST',
            body: new URLSearchParams({
                'count': Amagasaki['num'].value
            })
        });
        let A_link = ""
        const text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
        for (i = 0; i < Amagasaki['num'].value; i++) {
            if (Amagasaki['s_num'].checked) {
                var Alink = Array.from(Array(13)).map(() => text[Math.floor(Math.random() * text.length)]).join('')
                A_link += "[" + (Number(i) + 1) + "] " + Alink + "\n"
            } else {
                var Alink = Array.from(Array(13)).map(() => text[Math.floor(Math.random() * text.length)]).join('')
                A_link += Alink + "\n"
            }
        }
        if (Amagasaki['s_text'].checked) {
            Amagasaki['btn'].setAttribute("download", "Amagasaki.txt");
            handleDownload(A_link, 'A_btn')
        } else {
            Amagasaki['btn'].removeAttribute("download");
            Amagasaki['btn'].removeAttribute("href");
            change_count()
            navigator.clipboard.writeText(A_link);
        }
    }
    function Check_Value() {
        if (this.value > 10000) {
            this.value = 10000
        } else if (this.value < 0) {
            this.value = 0
        }
    }

    function handleDownload(text, btn) {
        var blob = new Blob([text], {
            "type": "text/plain"
        });

        if (window.navigator.msSaveBlob) {
            window.navigator.msSaveBlob(blob, "test.txt");
            window.navigator.msSaveOrOpenBlob(blob, "test.txt");
        } else {
            document.getElementById(btn).href = window.URL.createObjectURL(blob);
        }
    }

    let Paypay = {
        'btn': document.getElementById('Pay_btn'),
        's_num': document.getElementById('Pay_Switch'),
        's_text': document.getElementById('Pay_Switch_text'),
        'num': document.getElementById('Pay_Number'),
    }
    let Amazon = {
        'btn': document.getElementById('Amazon_btn'),
        's_num': document.getElementById('Amazon_Switch'),
        's_text': document.getElementById('Amazon_Switch_text'),
        'num': document.getElementById('Amazon_Number'),
    }
    let discord = {
        'btn': document.getElementById('Discord_btn'),
        's_num': document.getElementById('Discord_Switch'),
        's_text': document.getElementById('Discord_Switch_text'),
        'num': document.getElementById('Discord_Number'),
    }
    let iTunes = {
        'btn': document.getElementById('iTunes_btn'),
        's_num': document.getElementById('iTunes_Switch'),
        's_text': document.getElementById('iTunes_Switch_text'),
        'num': document.getElementById('iTunes_Number'),
    }
    let FN = {
        'btn': document.getElementById('FN_btn'),
        's_num': document.getElementById('FN_Switch'),
        's_text': document.getElementById('FN_Switch_text'),
        'num': document.getElementById('FN_Number'),
    }
    let Amagasaki = {
        'btn': document.getElementById('A_btn'),
        's_num': document.getElementById('A_Switch'),
        's_text': document.getElementById('A_Switch_text'),
        'num': document.getElementById('A_Number'),
    }
    Amazon['btn'].addEventListener('click', generator_amazon);
    Paypay['btn'].addEventListener('click', generator_pay);
    discord['btn'].addEventListener('click', generator_discord);
    iTunes['btn'].addEventListener('click', generator_iTunes);
    FN['btn'].addEventListener('click', generator_FN);
    Amagasaki['btn'].addEventListener('click', generator_A);
    const numbers = document.querySelectorAll('input[type=number]');
    for(i=0;i<numbers.length;i++) {
        numbers[i].addEventListener('input', Check_Value)
    }
    change_count()
});
