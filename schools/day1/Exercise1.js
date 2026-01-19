// DONE: BÀI 1: KIỂM TRA ĐĂNG NHẬP NGƯỜI DÙNG
// Yêu cầu:
// Viết hàm login(username, password)
// Điều kiện:
// Username phải >= 4 ký tự
// Password phải >= 6 ký tự
// Nếu hợp lệ:
// In "Login successful"
// Nếu không:
// In lý do cụ thể:
// "Username too short"
// "Password too short"

const login = (username, password) => {
    if (username.length < 4) {
        console.log("Username too short");
    }
    if (password.length < 6) {
        console.log("Password too short");
    } else {
        console.log("Login successful");
    }
};
console.log("Problem 1");
login("Hoang", "Trungg");

// BÀI 2: TÍNH TỔNG TIỀN GIỎ HÀNG
// Yêu cầu:
// Tạo mảng cart = []
// Cho phép nhập 3 sản phẩm, mỗi sản phẩm là object:
// {
//   name: "Book",
//   price: 20000,
//   quantity: 2
// }
// Viết hàm:
//     calculateTotal(cart)
//     Áp dụng khuyến mãi:
//         Tổng ≥ 100.000 → giảm 10%
//         In:
//         Tổng ban đầu
//         Tổng sau giảm giá

console.log("Problem 2");
cart = [
    { name: "Book", price: 10000, quantity: 2 },
    { name: "Book2", price: 10000, quantity: 5 },
    { name: "Book3", price: 10000, quantity: 5 },
];

let total = 0,
    totalAfterSale = 0;
const calculateTotal = (cart) => {
    cart.forEach((item) => {
        total += item.price * item.quantity;

        if (total >= 100000) {
            totalAfterSale = total - total * 0.1;
        }
    });
    console.log(`Total at first: ${total}`);
    console.log(`Total at first: ${totalAfterSale}`);
};

calculateTotal(cart);

// BÀI 3: QUẢN LÝ ĐIỂM SINH VIÊN
// Yêu cầu:
// Tạo mảng students = []
// Nhập thông tin 3 sinh viên:
// {
//   name: "An",
//   scores: [7, 8, 6]
// }
// Viết hàm:
// calculateAverage(scores)
// classifyStudent(avg)
// In:
// Tên sinh viên
// Điểm trung bình
// Xếp loại:
//     ≥ 8 → Giỏi
//     ≥ 6.5 → Khá
//     ≥ 5 → Trung bình
//     < 5 → Yếu
console.log("Problem 3");

students = [
    {
        name: "An",
        scores: [7, 8, 6],
    },
    {
        name: "Trung",
        scores: [5, 6, 7],
    },
    {
        name: "Hoang",
        scores: [8, 9, 10],
    }
];
let totalScores = 0;
let avg = 0;
const classifyStudent = (avg) => {
    if (avg >= 8) return "Type: Execellent";
    else if (avg >= 6.5) return "Type: Good";
    else if (avg >= 5) return "Type: Average";
    else return "Type: Weak";
}

const calculateAverage = (scores) => {
    for (let index = 0; index < scores.length; index++) {
        totalScores += scores[index];
    }
    return totalScores / scores.length;
}

const printStudentInfo = (students) => {
    const avg = calculateAverage(students.scores);
    console.log(`Student's name: ${students.name}`);
    console.log(`Student's avg: ${avg}`);
    console.log(`Student's name: ${classifyStudent(avg)}`);
}

printStudentInfo(students[1]);

// TODO: BÀI 4: QUẢN LÝ KHO HÀNG ĐƠN GIẢN
// Yêu cầu:
// Tạo mảng products = []
// Mỗi sản phẩm gồm:
// {
//   name: "Laptop",
//   price: 15000000,
//   stock: 5
// }
// Viết hàm:
// addProduct(products, product)
// sellProduct(products, name, quantity)
// Khi bán:
// Nếu tồn kho đủ → trừ số lượng
// Nếu không → in "Not enough stock"
console.log("Problem 4");
products = [
    {
        name: "Laptop",
        price: 1500000,
        stock: 5,
    },
    {
        name: "Macbook Pro",
        price: 20000000,
        stock: 10
    },
    {
        name: "Macbook Air",
        price: 15000000,
        stock: 3
    },
];
product = {
    name: "Intel NUC",
    price: 7000000,
    stock: 15,
}

const addProduct = (products, product) => {
    products.push(product);
    console.log(`Added successfully ${product.name}`);
}

const sellProduct = (products, name, quantity) => {
    if (quantity <= 0) {
        console.log("Out of stock");
    }

    const product = products.find(p => p.name === name);

    if (!product) {
        console.log("Product not found");
        return;
    }
    if (product.stock < quantity) {
        console.log(`Not enough stock for ${product}`);
        return;
    }
    product.stock -= quantity;
    console.log(`Sold ${product.stock} ${product.name} with ${product.price}`);
}

const printListProducts = (products) => {
    products.forEach(product => {
        console.log(`${product.name} - ${product.price} - ${product.stock}`);
        console.log("==================================================");

    });
}

addProduct(products, product);
sellProduct(products, "Macbook Pro", 4);
printListProducts(products);

// BÀI 5: MÔ PHỎNG TÀI KHOẢN NGÂN HÀNG
// yêu cầu:
// Tạo object bankAccount:
// {
//   owner: "hAN",
//   balance: 5000000
// }
// Viết các hàm:
// deposit(amount)
// withdraw(amount)

// Quy tắc:
// Không cho rút số âm
// Không cho rút quá số dư
// In số dư sau mỗi giao dịch
bankAccount = {
    owner: "hAN",
    balance: 5000000,
}

const deposit = (amount) => {
    bankAccount.balance += amount;
    console.log(`You just deposit ${amount} to your bank account. Here is your bank account`);
    printBankAccount(bankAccount);
}

const withdraw = (amount) => {
    if (amount <= 0) {
        console.log("You don't have enough money to withdraw");
        return;
    }
    bankAccount.balance -= amount;
    console.log(`You just withdraw ${amount} from your bank account. Here is your bank account`);
    printBankAccount(bankAccount);
}

const printBankAccount = (bankAccount) => {
    console.log(`Hello ${bankAccount.owner}, you has ${bankAccount.balance}`);

}

deposit(5000);
withdraw(5000);