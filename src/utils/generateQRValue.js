export default function generateQRValue(name, price, symbol) {
  const numStr = Number.parseFloat(price).toFixed(4);
  const strValue = `"Name: ${name} "\n" Price: ${numStr} "\n" + Symbol: ${symbol}`;
  console.log(strValue);
  return strValue;
}
