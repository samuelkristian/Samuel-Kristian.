function nextPage(page) {
    const currentPage = document.getElementById(`page-${page}`);
    const nextPage = document.getElementById(`page-${page + 1}`);
    currentPage.style.transform = "rotateY(-180deg)";
    currentPage.style.zIndex = page;
    nextPage.style.transform = "rotateY(0deg)";
    nextPage.style.zIndex = page + 1;
}

function prevPage(page) {
    const currentPage = document.getElementById(`page-${page}`);
    const prevPage = document.getElementById(`page-${page - 1}`);
    currentPage.style.transform = "rotateY(180deg)";
    currentPage.style.zIndex = page;
    prevPage.style.transform = "rotateY(0deg)";
    prevPage.style.zIndex = page - 1;
}