// DOM element
// index.html
const productList = document.getElementById("devices-list");
const showallBtn = document.getElementById("showAllBtn");
const availableOnlyBtn = document.getElementById("availableOnlyBtn");
const searchField = document.querySelector(".search-field");

// add.html
const productName = document.getElementById("product-name");
const productType = document.getElementById("product-type");
const productPrice = document.getElementById("product-price");
const productImage = document.getElementById("product-image");
const productImageFile = document.getElementById("product-image-file");
const addBtn = document.getElementById("submit-button");

let products = [];
let allProduct = [];
let productId = 1;

const STORAGE_KEY = "products";

// Lưu products vào localstorage
function saveProducts() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(products));
}

function loadProducts() {
  const raw = localStorage.getItem(STORAGE_KEY);
  if (!raw) {
    products = [];
    allProduct = [];
    productId = 1;
    return;
  }

  const saved = JSON.parse(raw);

  if (Array.isArray(saved) && saved.length) {
    products = saved;
    allProduct = [...saved];

    // cập nhật product id tiếp theo
    productId = saved.length ? Math.max(...saved.map((p) => p.id)) + 1 : 1;
  }
}

// thêm products
if (addBtn) {
  addBtn.addEventListener("click", () => {
    const productNameText = productName.value.trim();
    const productTypeText = productType.value.trim();
    const productPriceText = productPrice.value.trim();
    const productImageText = productImage.value.trim();
    const selected = document.querySelector(
      'input[name="product-available"]:checked',
    );
    const availableValue = selected ? selected.value : "";
    const file = productImageFile?.files?.[0];
    const hasImage = !!productImageText || !!file;

    if (
      !productNameText ||
      !productTypeText ||
      !productPriceText ||
      !hasImage ||
      !availableValue
    ) {
      alert("Please fill all of these fields");
      return;
    }

    // thêm sản phẩm vào mảng
    const saveProduct = (imageSrc) => {
      products.push({
        id: productId++,
        name: productNameText,
        type: productTypeText,
        price: Number(productPriceText),
        image: imageSrc,
        available: availableValue === "true",
      });
      allProduct = [...products];
      saveProducts();
      render();
    };

    if (file) {
      const reader = new FileReader();
      reader.onload = () => saveProduct(reader.result);
      reader.readAsDataURL(file); // => base64
    } else {
      saveProduct(productImageText);
    }
    alert("Product Added");
    productName.value = "";
    productType.value = "";
    productPrice.value = "";
    productImage.value = "";
    productImageFile.value = "";
  });
}

// event handle search bar
if (searchField) {
  searchField.addEventListener("input", () => {
    const inputText = searchField.value.trim().toLowerCase();
    if (!inputText) {
      products = [...allProduct];
      render();
      return;
    }

    products = allProduct.filter((p) =>
      p.name.toLowerCase().includes(inputText),
    );
    render();
  });
}

// event lọc sản phẩm còn hàng
if (availableOnlyBtn) {
  availableOnlyBtn.addEventListener("click", () => {
    products = products.filter((p) => p.available);
    render();
  });
}

// event hiển thị tất cả sản phẩm
if (showallBtn) {
  showallBtn.addEventListener("click", () => {
    products = [...allProduct];
    render();
  });
}

// render các sản phẩm
function render() {
  if (productList) {
    productList.replaceChildren(
      ...products.map((product) => {
        const li = document.createElement("li");
        li.dataset.id = product.id;
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

        // xử lí event click vào các phần từ danh sách
        li.addEventListener("click", () => {
          const id = Number(li.dataset.id);
          const item = products.find((p) => p.id === id);
          if (!item) return;
          item.available = !item.available;
          saveProducts();
          render();
        });

        // xóa sản phẩm
        const removeBtn = document.createElement("button");
        removeBtn.textContent = "🗑️";
        removeBtn.style.fontSize = "15px";
        // remove event
        removeBtn.addEventListener("click", (e) => {
          e.stopPropagation();

          products = products.filter((p) => p.id !== product.id);

          allProduct = allProduct.filter((p) => p.id !== product.id);
          saveProducts();
          render();
        });

        li.append(img, name, type, price, available, removeBtn);
        return li;
      }),
    );
  }
}

// gọi hàm khi khởi chạy web
loadProducts();
render();
