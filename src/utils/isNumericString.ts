export default function (str: string): boolean {
    const regex = /^\d*$/;

    return regex.test(str);
}