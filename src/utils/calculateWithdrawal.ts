import ICassette from "../types/ICassette.ts";


function calculateWithdrawal(cassettes: ICassette[], amount: number): string {
    const start = performance.now();
    const denominations = [5000, 2000, 1000, 500, 200, 100];
    const result: { [key: number]: number } = {};
    if (amount < 100) {
        return "Нельзя выдать сумму меньше номинала минимальной банкноты"
    }
    let remaining = amount;
    for (const denomination of denominations) {
        const availableCassette = cassettes.find(
            (cassette) =>
                cassette.denomination === denomination &&
                cassette.amount > 0 &&
                cassette.isWorked
        );

        if (availableCassette) {
            const notes = Math.min(
                Math.floor(remaining / denomination),
                availableCassette.amount
            );
            remaining -= notes * denomination;
            result[denomination] = notes;
        }
    }

    const end = performance.now();
    const time = end - start;

    if (remaining === 0) {
        const output = Object.entries(result)
            .filter(([, count]) => count > 0)
            .map(([denomination, count]) => `${count} x ${denomination}`)
            .join(', ');
        return `Можно выдать: ${output}. Время вычисления: ${time.toFixed(2)} мс`;
    } else {
        return `Невозможно выдать ${amount}. Время вычисления: ${time.toFixed(2)} мс`;
    }
}

export default calculateWithdrawal;