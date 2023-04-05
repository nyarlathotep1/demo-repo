class MyAccountPage {
    open() {
        return browser.url('http://prestashop.qatestlab.com.ua/en/authentication?back=my-account')
    }

    get emailField() {
        return $('#email')
    }

    get passwordField() {
        return $('#passwd')
    }

    get sbmtLogin() {
        return $('#SubmitLogin')
    }

    get msgSuccess() {
        return $('.info-account')
    }

    get btnMyAddresses() {
        return $('//a[@title="Addresses"]')
    }

    get btnAddNewAddress() {
        return $('//a[@title="Add an address"]')
    }

    get firstNameField() {
        return $('#firstname')
    }

    get lastNameField() {
        return $('#lastname')
    }

    get addressField() {
        return $('#address1')
    }

    get postalCodeField() {
        return $('#postcode')
    }

    get cityField() {
        return $('#city')
    }

    get dropdownCountry() {
        return $('#uniform-id_country')
    }

    get valueUkraine() {
        return $('//option[@value="216"]')
    }

    get homePhoneField() {
        return $('#phone')
    }

    get mobilePhoneField() {
        return $('#phone_mobile')
    }

    get dropdownState() {
        return $('#id_state')
    }

    get oblastRive() {
        return $('//option[@value="328"]')
    }

    get addressNameField() {
        return $('#alias')
    }

    get btnSaveAddress() {
        return $('#submitAddress')
    }

    get addressName() {
        return $('.page-subheading')
    }
    
    get btnAddressDelete() {
        return $('//a[@title="Delete"]')
        // return $('//i[@class="icon-remove right"]')
    }

}

export default new MyAccountPage();