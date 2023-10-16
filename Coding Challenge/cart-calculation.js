document.addEventListener("DOMContentLoaded", async () => {
    const loadCartData = async () => {
        try {
            const res = await fetch("cart-data.json");
            const data = await res.json();
            return data;
        } catch (error) {
            throw Error("Error, cart not loading!")
        }
    }
    const calculateOrder = async () => {
        const data = await loadCartData();

        const { SKUS, shoppingCart, cartScenario } = data;

        const newCart = { ...shoppingCart };
        const currentCart = cartScenario.option1; // Change this to option2 if needed

        const cartQty = currentCart.reduce((acc, item) => {
            acc[item] = (acc[item] || 0) + 1;
            return acc;
        }, {});

        const cartProdNameQty = Object.entries(cartQty).map(([name, quantity]) => ({
            name,
            quantity
        }));

        cartProdNameQty.forEach(item => {
            newCart.products.push(item.name);
            newCart.quantity.push(item.quantity);
            newCart.price.push(SKUS[item.name].price);
        });

        const newSubTotal = calculateSubtotal(currentCart, SKUS);
        const newDiscountTotal = validateActivePromos(currentCart, SKUS);
        const { discountAmount, discount, newFreeGift } = newDiscountTotal;
        const newTotalCost = calculateTotalCost(newSubTotal, discountAmount);

        newCart.subtotal = newSubTotal;
        newCart.discount = discount;
        newCart.discountTotal = discountAmount;
        newCart.totalCost = newTotalCost;
        newCart.freeGift = newFreeGift;
        const finalShoppingCart = { ...shoppingCart, ...newCart }

        showCartItems(finalShoppingCart, SKUS);

        const subtotalElem = document.querySelector(".sub-total");
        const discountTotalElem = document.querySelector(".discount-total");
        const orderTotalElem = document.querySelector(".order-total");

        subtotalElem.textContent = `$${finalShoppingCart.subtotal}`;
        discountTotalElem.textContent = `$${finalShoppingCart.discountTotal}`;
        orderTotalElem.textContent = `$${finalShoppingCart.totalCost}`;
    };
    const calculateSubtotal = (currentCart, SKUS) => {
        return currentCart.reduce((acc, sku) => acc + SKUS[sku].price, 0);
    }
    const validateActivePromos = (currentCart, SKUS) => {
        let orderPromotions = {
            discountAmount: 0,
            discount: [],
            newFreeGift: []
        };

        const validatePromoA = currentCart.filter(product => product === "A");
        const validatePromoB = currentCart.filter(product => product === "B");

        if (validatePromoA.length >= 2) {
            const promoDiscountAmount = 10;
            const discountAmount = validatePromoA.length * promoDiscountAmount;

            if (!orderPromotions.discount.includes("Buy 2 for $100")) {
                orderPromotions.discount.push("Buy 2 for $100");
            }
            orderPromotions.discountAmount = discountAmount;
        }

        if (validatePromoB.length >= 2) {
            orderPromotions.discountAmount += SKUS["B"].price;
            orderPromotions.newFreeGift.push("B");

            if (!orderPromotions.discount.includes("Buy 2 get 1 Free!")) {
                orderPromotions.discount.push("Buy 2 get 1 Free!");
            }
        }
        return orderPromotions;
    };
    const calculateTotalCost = (newSubTotal, discountTotal) =>
        newSubTotal - discountTotal;
    const showCartItems = (updatedCart, SKUS) => {
        const { products, price, quantity, discount, freeGift, subtotal, totalCost, discountTotal } = updatedCart;

        let cartListItems = products.map((sku, index) => `
        <li class="order-item">
            <div class="product-info product-name-cont">
            <div class="product-name">${sku}</div>
            <div class="product-price">$${price[index]}</div>
            <div class="product-quantity">${quantity[index]}</div>
            <div class="product-discount">${discount[index] || ""}</div>
            </div>
        </li>
        `);

        if (freeGift.length > 0) {
            cartListItems.push(`
            <li class="order-item">
                <div class="product-info product-name-cont">
                <div class="product-name">${freeGift[0]}</div>
                <div class="product-price">Free</div>
                <div class="product-quantity">1</div>
                <div class="product-discount">$${SKUS[freeGift[0]].price} Value</div>
                </div>
            </li>
            `);
        }

        const cartListItemsTotal = cartListItems.join("");

        const cartListCont = document.querySelector(".order-items");

        cartListCont.innerHTML = cartListItemsTotal;
    };

    const submitBtn = document.querySelector(".submitBtn");

    submitBtn.addEventListener("click", () => {
        alert("Thank you, order now processing!")
    })

    await calculateOrder();
});