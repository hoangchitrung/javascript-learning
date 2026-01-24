// DOM element
const productList = document.getElementById("devices-list");
const showallBtn = document.getElementById("showAllBtn");
const availableOnlyBtn = document.getElementById("availableOnlyBtn");
const searchField = document.querySelector('.search-field');

let products = [
  {
    id: 1,
    name: "OPPO A3x 4GB/128GB",
    type: "phone",
    price: 3120000,
    image: "./images/oppo-a3x-blue-thumb-600x600.jpg",
    available: true,
  },
  {
    id: 2,
    name: "MacBook Pro 14 inch M5 16GB/512GB",
    type: "laptop",
    price: 41690000,
    image:
      "./images/macbook-pro-14-inch-m5-16gb-512gb-thumb-638962954605863722-600x600.jpg",
    available: false,
  },
  {
    id: 3,
    name: "SingPC i713H695SF-W i7 13620H",
    type: "desktop",
    price: 13990000,
    image:
      "./images/singpc-i713h695sf-w-i7-13620h-thumb-43-638681495786050591-600x600.jpg",
    available: true,
  },
  {
    id: 4,
    name: "Loa Bluetooth Marshall Kilburn II",
    type: "desktop",
    price: 5600000,
    image: "./images/loa-bluetooth-marshall-kilburn-ii-thumb-1-600x600.jpg",
    available: true,
  },
];

let allProduct = [...products];

// event handle search bar
searchField.addEventListener('input', () => {
  const inputText = searchField.value.trim().toLowerCase();
  if (!inputText) {
    products = [...allProduct];
    render();
    return;
  }

  products = products.filter(p => p.name.toLowerCase().includes(inputText));
  render();
});

// event lọc sản phẩm còn hàng
availableOnlyBtn.addEventListener('click', () => {
  products = products.filter(p => p.available);
  render();
});

// event hiển thị tất cả sản phẩm
showallBtn.addEventListener('click', () => {
  products = [...allProduct];
  render();
})

// render các sản phẩm
function render() {
  productList.replaceChildren(
    ...products.map((product) => {
      const li = document.createElement("li");
      // hiển thị hình ảnh sản phẩm
      const img = document.createElement("img");
      img.src = product.image;
      img.alt = product.name;

      // hiển thị tên sản phẩm
      const name = document.createElement("h3");
      name.textContent = product.name;

      // hiển thị loại sản phẩm
      const type = document.createElement("p");
      type.textContent = `Loại: ${product.type}`;
      // hiển thị giá sản phẩm
      const price = document.createElement("p");
      price.textContent = `Giá: ${product.price}`;

      // hiển thị sản phẩm
      const available = document.createElement("p");
      available.textContent = product.available ? "Còn Hàng" : "Hết Hàng";

      if (product.available === false) {
        li.style.backgroundColor = "lightcoral";
      }

      li.addEventListener('click', () => {
        if (product.available === false)
          product.available = true;
        else
          product.available = false;
        render();
      });

      // xóa sản phẩm
      const removeBtn = document.createElement('button');
      removeBtn.textContent = '🗑️';
      removeBtn.style.fontSize = '15px';
      // remove event
      removeBtn.addEventListener('click', (e) => {
        e.stopPropagation();

        products = products.filter(p => p.id !== product.id);

        allProduct = allProduct.filter(p => p.id !== product.id);

        render();
      });

      li.append(img, name, type, price, available, removeBtn);
      return li;
    }),
  );
}

render();
