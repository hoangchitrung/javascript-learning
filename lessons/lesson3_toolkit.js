// PART 3: TOOLKITS
// Add item
const items = [{ name: "Desktop", type: "Office", price: 500 }];
items.push({ name: "Laptop", type: "Gaming", price: 1000 });
console.log(items);
// Remove item
const filteredItems = items.filter(item => item.name !== "Desktop")
console.log(filteredItems);
// sort item
const sortedItems = items.sort(function (a, b) { return b.price - a.price });
console.log(sortedItems);
// search item 
const searchItems = items.filter(item => item.name === "Laptop");
console.log(searchItems);


