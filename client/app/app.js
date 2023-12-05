let controller = new TradingController();

const form = document.querySelector('#stocks')

form.addEventListener('submit', controller.add.bind(controller))