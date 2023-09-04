class ReviewPage {
  get productPrices() {
    return $$("//tr/td[4]/strong");
  }
  get totalPrice() {
    return $("h3 strong");
  }

  async sumOfProducts() {
    const sumOfProducts = (
      await Promise.all(
        await this.productPrices.map(async (productPrice) =>
          parseInt((await productPrice.getText()).split(".")[1].trim())
        )
      )
    ).reduce((acc, price) => acc + price, 0); //0+ 13000 =13000    50000+13000 =
    return sumOfProducts;
  }

  async totalFormattedPrice() {
    const totalText = await this.totalPrice.getText();
    const price = parseFloat(totalText.split(" ")[1]);
    return price;
  }
}

export default new ReviewPage();
