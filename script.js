const products = {
  1: {
    title: "Wii console",
    price: "249 درهم",
    desc: "جهاز ويي بحالة جيدة مع يد تحكم. معه شاحن وعجلة القيادة و 2 كاسيت",
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
    title: "ps2",
    price: "249 درهم",
    desc: "جهاز بلاي ستيشن بحالة جيدة مع 2 يد تحكم. معه ميموار usb 16 gb القيادة و 2 كاسيت",
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
  window.open(`https://wa.me/212615435474?text=${encodeURIComponent(msg)}`, "_blank");
});
