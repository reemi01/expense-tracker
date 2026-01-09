let expenses = [];

function addExpense() {
    const title = document.getElementById("title").value;
    const amount = document.getElementById("amount").value;
    const category = document.getElementById("category").value;

    if (title === "" || amount === "") {
        alert("Please fill all fields");
        return;
    }

    expenses.push({
        title: title,
        amount: Number(amount),
        category: category
    });

    displayExpenses();
    calculateTotal();
}
function displayExpenses() {
    const list = document.getElementById("expenseList");
    list.innerHTML = "";

    expenses.forEach((expense, index) => {
        const li = document.createElement("li");
        li.innerText = `${expense.title} - $${expense.amount} (${expense.category})`;
        list.appendChild(li);
    });
}
function calculateTotal() {
    let total = 0;

    expenses.forEach(expense => {
        total += expense.amount;
    });

    document.getElementById("total").innerText = total;
}
