export function openWhatsapp(msg?: string) {
    const phone = "+5521993143738";
    const msgUrlEncoded = msg ? encodeURI(msg) : "";
    window.open(`https://api.whatsapp.com/send?phone=${phone}&text=${msgUrlEncoded}`, "_blank");
}