setTimeout(() => {
    document.querySelector("#logo").classList.add("img-wrapper-animate");

    setTimeout(() => {
        document.querySelector(".first").classList.add("brand-animate");
        setTimeout(() => {
            document.querySelector(".second").classList.add("brand-animate");

            setTimeout(() => {
                document.querySelector("img").classList.add("img-animate");
            }, 1000);
            setTimeout(() => {
                document.querySelector(".info").classList.add("info-animate");
            }, 1000);
        }, 300);
    }, 1000);
}, 1000);
