class HomePage {
    open () {
        return browser.url('http://prestashop.qatestlab.com.ua/en/')
    }

    get btnWomen() {
        return $('//a[@title="Women"]')
    }

    get imageLogo() {
        return $('//img[@alt="http://prestashop.qatestlab.com.ua/"]');
    }

    get txtCustomBlock() {
        return $('.col-xs-5 h3');
    }
}

export default new HomePage();