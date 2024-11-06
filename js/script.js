document.addEventListener("DOMContentLoaded", () => {
    const params = new URLSearchParams(window.location.search);
    const imageNumber = params.get("img");

    if (imageNumber) {
        const mainImage = document.querySelector(".main-image");
        mainImage.src = `image${imageNumber}.png`; // 根據參數設置不同圖片
        mainImage.alt = `展示圖片 ${imageNumber}`;
    }
});
