import MyAccountPage from '../pages/my-account-page';
import { faker } from '@faker-js/faker';

describe('My Account', () => {

    beforeEach(async() => {
        await MyAccountPage.open();

        await MyAccountPage.emailField.setValue('turin.turambar.test@gmail.com');
        await MyAccountPage.passwordField.setValue('Test123!');
        await MyAccountPage.sbmtLogin.click();

        const successMessage = await MyAccountPage.msgSuccess;
        await expect(successMessage).toHaveText('Welcome to your account. Here you can manage all of your personal information and orders.');
    }) 


    it('Adding "My Address" and assert', async () => {
        
        await MyAccountPage.btnMyAddresses.click();
        await MyAccountPage.btnAddNewAddress.click();
        await MyAccountPage.firstNameField.setValue(faker.name.firstName());
        await MyAccountPage.lastNameField.setValue(faker.name.lastName());
        await MyAccountPage.addressField.setValue(faker.address.cityName());
        await MyAccountPage.postalCodeField.setValue(faker.address.zipCode('#####'));
        await MyAccountPage.cityField.setValue(faker.address.city());
        await MyAccountPage.dropdownCountry.click();
        await MyAccountPage.valueUkraine.click();
        await MyAccountPage.homePhoneField.setValue(faker.phone.number());
        await MyAccountPage.mobilePhoneField.setValue(faker.phone.number());
        await MyAccountPage.dropdownState.click();
        await MyAccountPage.oblastRive.click();
        await MyAccountPage.addressNameField.setValue('MyAddress1');
        await MyAccountPage.btnSaveAddress.click();
        
        const addressName1 = await MyAccountPage.addressName;
        await expect(addressName1).toHaveText('MYADDRESS1')

        
        // await browser.dismissAlert()

        // // eslint-disable-next-line wdio/no-debug
        // await browser.debug();
        // await MyAccountPage.btnAddressDelete.click();
        
        
        // // const alert_text = await browser.getAlertText()
        // // await expect(alert_text).toHaveText('Are you sure1?')
        // await browser.acceptAlert()
    });

    // it('Deleting "My Address', async () => {

    //     await MyAccountPage.btnMyAddresses.click();
    //     await MyAccountPage.btnAddressDelete.click();
    // });
});

