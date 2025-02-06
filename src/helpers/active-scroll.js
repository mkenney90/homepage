export const activeSection = function() {
    const sections = document.querySelectorAll("section");
    const navLi = document.querySelectorAll(".navbar-nav li a");
    const defaultSection = "home";
    const prefix = "section-";

    window.onscroll = () => {
        var current = defaultSection;

        sections.forEach((section) => {
            const sectionTop = section.offsetTop;
            if (scrollY >= sectionTop - 60) {
                current = section.getAttribute("id").substring(prefix.length);
            }
        });

        navLi.forEach((li) => {
            li.classList.remove("active");
            if (li.classList.contains(current)) {
                li.classList.add("active");
            }
        });
    }
}