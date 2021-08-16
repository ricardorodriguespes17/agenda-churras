export default function formatMoney(money: number) {
  return Intl.NumberFormat("pt-br", {
    currency: "BRL",
    style: "currency",
  }).format(money);
}
