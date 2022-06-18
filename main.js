window.addEventListener('DOMContentLoaded', function () {
    function generator_pay() {
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
        console.log(pay_link)
        navigator.clipboard.writeText(pay_link);
        document.querySelectorAll('.sample .toast')
            .forEach(toastNode => {
                const toast = new bootstrap.Toast(toastNode, {
                    autohide: false
                })

                toast.show()
            })
    }

    function change_setting() {
        if (swi.checked) {
            Numbrs = true
        } else {
            Numbrs = false
        }
    }
    const btn = document.getElementById('btn');
    const swi = document.getElementById('Switch');
    const num = document.getElementById('Number');

    let Numbrs = false;


    swi.addEventListener('click', change_setting);
    btn.addEventListener('click', generator_pay);
})
