class CartPage {
    open () {
        return browser.url('http://prestashop.qatestlab.com.ua/en/')
    }

    get btnAddToCart() {
        return $('//a[@title="Add to cart"]') //div[@h2="Product successfully added to your shopping cart"]
    }

    get productAddingSuccessMsg() {
        return $('.layer_cart_product h2')
    }

    get ammountOfItems() {
        return $('.layer_cart_cart h2')
    }

    get btnCartPage() {
        return $('//a[@title="View my shopping cart"]')
    }

    get btnDelete() {
        return $('//a[@title="Delete"]')
    }

    get summaryProductsQuantity() {
        return $('#summary_products_quantity')
    }

    get firstProduct() {
        return $('.tab-content li')
    }

    get addItemsbtn() {
        return $('.icon-plus')
    }

    get btnAddToCart2() {
        return $('//span[.="Add to cart"]')
    }

    get cartQty() {
        return $('.cart_quantity_input')
    }

    get emptyCartMessage() {
        return $('//p[.="Your shopping cart is empty."]')
    }
}

export default new CartPage();