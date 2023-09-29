// Smooth scrolling when clicking on links
document.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", (event) => {
        event.preventDefault();
        const targetId = link.getAttribute("href");
        const targetOffset = document.querySelector(targetId).offsetTop;
        window.scrollTo({
            top: targetOffset,
            behavior: "smooth"
        });
    });
});

// Cache selectors
let lastId,
    topMenu = document.querySelector("#navbar"),
    topMenuHeight = topMenu.offsetHeight + 15,
    menuItems = topMenu.querySelectorAll("a"),
    scrollItems = Array.from(menuItems).map(link => {
        const item = document.querySelector(link.getAttribute("href"));
        if (item) {
            return item;
        }
    });

window.addEventListener("scroll", () => {
    const fromTop = window.scrollY + topMenuHeight;

    const cur = scrollItems.map(item => {
        if (item.offsetTop < fromTop) return item;
    }).filter(Boolean);

    const curItem = cur[cur.length - 1];
    const id = curItem ? curItem.id : "";

    if (lastId !== id) {
        lastId = id;
        menuItems.forEach(link => {
            link.parentNode.classList.remove("active");
        });
        const activeLink = topMenu.querySelector(`a[href='#${id}']`);
        if (activeLink) {
            activeLink.parentNode.classList.add("active");
        }
    }
});

// Handle background element movement
const moveBackgroundElements = () => {
    document.querySelectorAll(".bg-static").forEach(element => {
        const windowTop = window.scrollY;
        const elementTop = element.offsetTop;
        const leftPosition = windowTop - elementTop;
        element.querySelector(".bg-move").style.right = `${leftPosition}px`;
        element.querySelector(".bg-move2").style.left = `${leftPosition}px`;
    });
};

window.addEventListener("load", moveBackgroundElements);
window.addEventListener("resize", moveBackgroundElements);
window.addEventListener("scroll", moveBackgroundElements);

// Intersection Observer for fading elements
const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.7
};

const observerCallback = (entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Fade in observed elements that are in view
            entry.target.classList.replace("fadeOut", "fadeIn");
        } else {
            // Fade out observed elements that are not in view
            entry.target.classList.replace("fadeIn", "fadeOut");
        }
    });
};

const fadeElms = document.querySelectorAll(".fade");
const observer = new IntersectionObserver(observerCallback, observerOptions);
fadeElms.forEach(el => observer.observe(el));

// Toggle panel visibility
document.addEventListener("DOMContentLoaded", () => {
    document.querySelector(".collapsepanel").addEventListener("click", () => {
        const imageFlip2 = document.querySelector("#imageflip2");
        imageFlip2.classList.toggle("flip");
    });
});

let hidden = true;

document.querySelector("button.collapsepanel").addEventListener("click", () => {
    const panel = document.querySelector("div.panel");
    if (hidden) {
        panel.style.display = "block";
    } else {
        panel.style.display = "none";
    }
    hidden = !hidden;
});

let active = "no";
document.querySelector("div.details").addEventListener("click", () => {
    const desc = document.querySelector(".desc");
    if (active === "no") {
        active = "yes";
        desc.style.display = "block";
    } else {
        active = "no";
        desc.style.display = "none";
    }
});