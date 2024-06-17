export default interface ICassette {
    denomination: 100 | 200 | 500 | 1000 | 2000 | 5000;
    amount: number;
    isWorked: boolean;
}