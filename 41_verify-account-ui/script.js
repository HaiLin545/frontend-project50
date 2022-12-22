const codes = document.querySelectorAll("input");

// codes[0].focus();

codes.forEach((code, idx) => {
    code.addEventListener("keydown", (e) => {
        if (e.key >= 0 && e.key <= 9) {
            codes[idx].value = "";
            if (idx < 5) {
                setTimeout(() => codes[idx + 1].focus(), 10);
            }
        } else if (e.key === "Backspace") {
            if (idx > 0) {
                setTimeout(() => codes[idx - 1].focus(), 10);
            } else {
                setTimeout(() => codes[0].focus(), 10);
            }
        }
    });
    code.addEventListener("input", (e) => {
        const flag = e.target.value >= 0 && e.target.value <= 9;
        if (!flag) {
            e.target.value = "";
        }
    });
});
