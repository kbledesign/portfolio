const SKUS = {
    A: { name: "A", price: 60 },
    B: { name: "B", price: 70 },
    C: { name: "C", price: 10 },
    D: { name: "D", price: 20 }
};

const shoppingCart = {
    products: [],
    quantity: [],
    price: [],
    freeGift: [],
    discount: [],
    subtotal: 0,
    discountTotal: 0,
    totalCost: 0
};

const cartScenario = {
    option1: ['A', 'A', 'B', 'C', 'C', 'D'],
    option2: ['A', 'A', 'A', 'A', 'A', 'B', 'B', 'C', 'D']
};

const calculateOrderOnSubmit = () => {
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

    const newSubTotal = calculateSubtotal(currentCart);
    const newDiscountTotal = checkCartForDiscount(currentCart);
    const { discountAmount, discount, newFreeGift } = newDiscountTotal;

    const newTotalCost = calculateTotalCost(newSubTotal, discountAmount);

    newCart.subtotal = newSubTotal;
    newCart.discount = discount;
    newCart.discountTotal = discountAmount;
    newCart.totalCost = newTotalCost;
    newCart.freeGift = newFreeGift;

    Object.assign(shoppingCart, newCart);

    showCartItems(shoppingCart);

    const subtotalElem = document.querySelector(".sub-total");
    const discountTotalElem = document.querySelector(".discount-total");
    const orderTotalElem = document.querySelector(".order-total");

    subtotalElem.textContent = `$${shoppingCart.subtotal}`;
    discountTotalElem.textContent = `$${shoppingCart.discountTotal}`;
    orderTotalElem.textContent = `$${shoppingCart.totalCost}`;

    console.log(shoppingCart);
};

const calculateSubtotal = currentCart =>
    currentCart.reduce((total, sku) => total + SKUS[sku].price, 0);

const checkCartForDiscount = currentCart => {
    let discountData = {
        discountAmount: 0,
        discount: [],
        newFreeGift: []
    };

    const validatePromoA = currentCart.filter(product => product === "A");
    const validatePromoB = currentCart.filter(product => product === "B");

    if (validatePromoA.length >= 2) {
        const promoDiscountAmount = 10;
        const discountAmount = validatePromoA.length * promoDiscountAmount;

        if (!discountData.discount.includes("Buy 2 for $100")) {
            discountData.discount.push("Buy 2 for $100");
        }
        discountData.discountAmount = discountAmount;
    }

    if (validatePromoB.length >= 2) {
        discountData.discountAmount += SKUS["B"].price;
        discountData.newFreeGift.push("B");

        if (!discountData.discount.includes("Buy 2 get 1 Free!")) {
            discountData.discount.push("Buy 2 get 1 Free!");
        }
    }
    return discountData;
};

const calculateTotalCost = (newSubTotal, discountTotal) =>
    newSubTotal - discountTotal;

const showCartItems = currentCart => {
    const { products, price, quantity, discount, freeGift } = currentCart;
    const cartListCont = document.querySelector(".order-items");

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
    cartListCont.innerHTML = cartListItemsTotal;
};

calculateOrderOnSubmit();
