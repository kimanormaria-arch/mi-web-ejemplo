

const select = document.getElementById("country");
const prices = document.querySelectorAll(".price");

const rates = {
  EUR: { rate: 1, symbol: "€" },
  MAD: { rate: 10.9, symbol: "MAD" },
  USD: { rate: 1.1, symbol: "$" },
  GBP: { rate: 0.85, symbol: "£" }
};

function updatePrices(currency) {
  const { rate, symbol } = rates[currency];

  prices.forEach(price => {
    const base = parseFloat(price.dataset.price);
    const converted = (base * rate).toFixed(2);

    // coma española
    price.textContent = converted.replace(".", ",") + " " + symbol;
  });
}

select.addEventListener("change", () => {
  updatePrices(select.value);
});

// precio inicial en EUR
updatePrices("EUR");
const openFilter = document.getElementById("openFilter");
const closeFilter = document.getElementById("closeFilter");
const panel = document.getElementById("filterPanel");

openFilter.onclick = () => panel.classList.add("active");
closeFilter.onclick = () => panel.classList.remove("active");

/* SORT */
const sort = document.getElementById("sort");
const container = document.getElementById("products");

sort.addEventListener("change", () => {
  let items = Array.from(container.children);

  if (sort.value === "az")
    items.sort((a,b)=>a.dataset.name.localeCompare(b.dataset.name));

  if (sort.value === "za")
    items.sort((a,b)=>b.dataset.name.localeCompare(a.dataset.name));

  if (sort.value === "low")
    items.sort((a,b)=>a.dataset.price-b.dataset.price);

  if (sort.value === "high")
    items.sort((a,b)=>b.dataset.price-a.dataset.price);

  container.innerHTML="";
  items.forEach(i=>container.appendChild(i));
});

/* SEARCH */
function searchProducts(){
  let v=document.getElementById("search").value.toLowerCase();
  document.querySelectorAll(".product").forEach(p=>{
    p.style.display=p.innerText.toLowerCase().includes(v)?"block":"none";
  });
}



