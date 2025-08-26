const products = {
  1: {
    title: "بلاي ستيشن 4",
    price: "3000 درهم",
    desc: "جهاز بلاي ستيشن 4 بحالة جيدة مع يد تحكم.",
    images: [
      "wii/wii1.jpg",
      "wii/m2.jpg",
      "wii/m3.jpg",
      "wii/m4.jpg",
      "wii/m5.jpg",
      "wii/m6.jpg"
    ]
  },
  2: {
    title: "لابتوب ديل",
    price: "4500 درهم",
    desc: "حاسوب محمول ديل i7، SSD 512GB، رام 16GB.",
    images: [
      "ps2/m1.jpg",
      "ps2/m2.jpg",
      "ps2/m3.jpg"
    ]
  }
};

// جلب ID من الرابط
const params = new URLSearchParams(window.location.search);
const id = params.get("id");

if (id && products[id]) {
  document.getElementById("product-title").textContent = products[id].title;
  document.getElementById("product-price").textContent = products[id].price;
  document.getElementById("product-desc").textContent = products[id].desc;

  // عرض جميع الصور
  const imgContainer = document.getElementById("product-images");
  products[id].images.forEach(src => {
    const img = document.createElement("img");
    img.src = src;
    img.alt = products[id].title;
    imgContainer.appendChild(img);
  });
}

// معالجة الفورم
document.getElementById("orderForm")?.addEventListener("submit", function(e){
  e.preventDefault();
  const name = this.name.value;
  const phone = this.phone.value;
  const address = this.address.value;

  // يفتح واتساب مع الرسالة
  const msg = `طلب جديد:\nالمنتج: ${products[id].title}\nالاسم: ${name}\nالهاتف: ${phone}\nالعنوان: ${address}`;
  window.open(`https://wa.me/212600000000?text=${encodeURIComponent(msg)}`, "_blank");
});
