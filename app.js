function renderCurrency(currencies) {
  let htmlStr = currencies.map(function(currency, index) {
    return `<tr>
      <td>${index + 1}</td>
      <td>${currency.txt}</td>
      <td>${currency.cc}</td>
      <td>${currency.rate.toFixed(2)}</td>
      <td>${currency.exchangedate}</td>
      </tr>`
  }).join('');
  console.log(htmlStr)
  document.getElementById('currencies-tbody').innerHTML = htmlStr;
};
fetch('https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?date=20230117&json').then(function(data) {
  return data.json();
}).then(function(data) {
  const getCurrency = data.map(function(currency) {
    return {
      txt: currency.txt,
      cc: currency.cc,
      rate: currency.rate,
      exchangedate: currency.exchangedate
      }
  })
  console.log(getCurrency);
  renderCurrency(getCurrency);
});
