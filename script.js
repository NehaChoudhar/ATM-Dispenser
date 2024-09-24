
document.querySelector('.get-money').addEventListener('click', () => {
    let amount = parseInt(document.querySelector('.amount-input').value);

    if (isNaN(amount) || amount <= 0) {
        alert('Please enter a valid amount.');
        return;
    }

    const notes = [500, 200, 100, 50, 20, 10, 5, 2, 1];
    let result = '';
    let totalNotes = 0;

    notes.forEach((note) => {
        let count = (amount / note) >>0;
        if (count > 0) {
            result += "<li>" + count + " note" + (count > 1 ? "s" : "") + " of Rs " + note + "</li>";
            totalNotes += count;
            amount -= count * note;
        }
    });

    document.querySelector('.nav ul').innerHTML = result;
    document.querySelector('.nav h4').innerText = `Total notes dispensed: ${totalNotes}`;
});
