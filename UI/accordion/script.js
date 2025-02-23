  document.addEventListener("DOMContentLoaded", function () {
            const items = document.querySelectorAll(".accordion-title");
            items.forEach(item => {
                item.addEventListener("click", function () {
                    this.classList.toggle("active");
                });
            });
        });