/* =========================================================
   HIGHER GROUND INTERNATIONAL SCHOOLS
   Navigation & Dropdown Script
========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    const menuToggle =
        document.getElementById("menuToggle");

    const mainNavigation =
        document.getElementById("mainNavigation");

    const dropdowns =
        document.querySelectorAll(".dropdown");


    /* =====================================================
       MOBILE MENU
    ===================================================== */

    if (menuToggle && mainNavigation) {

        menuToggle.addEventListener("click", function () {

            const isOpen =
                mainNavigation.classList.toggle("open");

            menuToggle.setAttribute(
                "aria-expanded",
                isOpen
            );

            menuToggle.textContent =
                isOpen ? "✕" : "☰";

        });

    }


    /* =====================================================
       DROPDOWNS
    ===================================================== */

    dropdowns.forEach(function (dropdown) {

        const toggle =
            dropdown.querySelector(".dropdown-toggle");


        toggle.addEventListener("click", function (event) {

            event.stopPropagation();


            dropdowns.forEach(function (otherDropdown) {

                if (otherDropdown !== dropdown) {

                    otherDropdown.classList.remove("open");

                }

            });


            dropdown.classList.toggle("open");

        });

    });


    /* =====================================================
       CLOSE DROPDOWN WHEN CLICKING OUTSIDE
    ===================================================== */

    document.addEventListener("click", function () {

        dropdowns.forEach(function (dropdown) {

            dropdown.classList.remove("open");

        });

    });


    /* =====================================================
       PREVENT DROPDOWN CLICKS FROM CLOSING THEM
    ===================================================== */

    dropdowns.forEach(function (dropdown) {

        const menu =
            dropdown.querySelector(".dropdown-menu");

        if (menu) {

            menu.addEventListener("click", function (event) {

                event.stopPropagation();

            });

        }

    });


    /* =====================================================
       CLOSE MOBILE MENU AFTER LINK CLICK
    ===================================================== */

    const navigationLinks =
        document.querySelectorAll(
            ".main-navigation a"
        );


    navigationLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            if (
                window.innerWidth <= 820 &&
                mainNavigation
            ) {

                mainNavigation.classList.remove("open");

                if (menuToggle) {

                    menuToggle.setAttribute(
                        "aria-expanded",
                        "false"
                    );

                    menuToggle.textContent = "☰";

                }

            }

        });

    });


    /* =====================================================
       ACTIVE NAVIGATION
    ===================================================== */

    const currentPage =
        window.location.pathname.split("/").pop()
        || "index.html";


    navigationLinks.forEach(function (link) {

        const linkPage =
            link.getAttribute("href");


        if (
            linkPage &&
            !linkPage.startsWith("#") &&
            linkPage === currentPage
        ) {

            link.classList.add("active");

        }

    });

});