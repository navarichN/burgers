window.onload = function () {

    document.getElementById('main-action-button').onclick = function () {
        document.getElementById("products").scrollIntoView({behavior: "smooth"});
    }

    let links = document.querySelectorAll('.menu-item > a');
    for (let i = 0; i < links.length; i++) {
        links[i].onclick = function () {
            document.getElementById(links[i].getAttribute('data-link')).scrollIntoView({behavior: "smooth"});
        }
    }

    let buttons = document.getElementsByClassName('product-button');
    let products = document.getElementsByClassName('products-item');
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].onclick = function (e) {
            document.getElementById("burger").value = products[i].children[1].innerText;
            document.getElementById("order").scrollIntoView({behavior: "smooth"});
        }
    }

    let popup = document.getElementById("popup");

    function showPopUp(e) {
        e.preventDefault();
        popup.classList.add("popup-open");
    }

    let burger = document.getElementById('burger');
    let name = document.getElementById('name');
    let phone = document.getElementById('phone');

    document.getElementById('order-action').onclick = function (e) {
        let hasError = false;

        [burger, name, phone].forEach(item => {
            if (!item.value) {
                item.parentElement.style.background = "red";
                hasError = true;
            } else {
                item.parentElement.style.background = "";
            }
        });

        if (!hasError) {
            [burger, name, phone].forEach(item => {
                item.value = "";
            });
            showPopUp(e);
        }
    }

    let prices = document.getElementsByClassName('products-item-price');
    document.getElementById("change-currency").onclick = function (e) {

        let currentCurrency = e.target.innerText;

        let newCurrency = "$";
        let coefficient = 1;

        if (currentCurrency === "$") {
            newCurrency = "€";
            coefficient = 1;
        } else if (currentCurrency === "€") {
            newCurrency = "BYN";
            coefficient = 3;
        } else if (currentCurrency === "BYN") {
            newCurrency = "UAH";
            coefficient = 37;
        } else if (currentCurrency === "UAH") {
            newCurrency = "₽";
            coefficient = 96;
        } else if (currentCurrency === "₽") {
            newCurrency = "PLN";
            coefficient = 4;
        } else if (currentCurrency === "PLN") {
            newCurrency = "¥";
            coefficient = 6.9;
        }

        e.target.innerText = newCurrency;

        for (let i = 0; i < prices.length; i++) {
            prices[i].innerText = +(prices[i].getAttribute('data-base-price') * coefficient).toFixed(1) + " " + newCurrency;
        }
    }

    let okBtn = document.getElementById("confirm");

    okBtn.onclick = (e) => {
        popup.classList.remove("popup-open");
    }

}