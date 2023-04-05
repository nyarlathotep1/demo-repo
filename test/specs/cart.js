import CartPage from "../pages/cart-page";

describe('Cart page', () => {
    
    beforeEach(async() => {
        await CartPage.open();
        await CartPage.open();
    })

    it('Adding 1 item to the cart and assert', async () => {
        await CartPage.btnAddToCart.click();
        await CartPage.productAddingSuccessMsg.getText();
        await CartPage.ammountOfItems.getText();

        // const addingProductSuccessMsg = await CartPage.productAddingSuccessMsg.getText();
        // const ammountOfItems = await CartPage.ammountOfItems.getText();

        await expect(CartPage.productAddingSuccessMsg).toHaveText('Product successfully added to your shopping cart');
        await expect(CartPage.ammountOfItems).toHaveText('There is 1 item in your cart.')

    });

    it('Removing 1 item from the cart and assert', async () => {
        await CartPage.btnCartPage.click();
        await CartPage.btnDelete.click();

        await expect(CartPage.summaryProductsQuantity).toHaveText('0 product')

        //  // eslint-disable-next-line wdio/no-debug
        //  await browser.debug();
    });

    it('Adding 10 items & assert', async () => {
        await CartPage.firstProduct.click();
        for (let i=1; i<10; i++){
            await CartPage.addItemsbtn.click();
        }
        await CartPage.btnAddToCart2.click();
        await CartPage.btnCartPage.click();
        // await CartPage.cartQty.getValue();
        await expect(CartPage.cartQty).toHaveValue('10')
        //  // eslint-disable-next-line wdio/no-debug
        //  await browser.debug();
    });

    it('Adding items, deleting & assert', async () => {
        await CartPage.firstProduct.click();
        for (let i=1; i<10; i++){
            await CartPage.addItemsbtn.click();
        }
        await CartPage.btnAddToCart2.click();
        await CartPage.btnCartPage.click();
        await CartPage.btnDelete.click();
        browser.refresh();
        await expect(CartPage.emptyCartMessage).toHaveText('Your shopping cart is empty.')

    });
});