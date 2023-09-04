class Shop {
  get checkoutButton() {
    return $("*=Checkout");
  }
  get cards() {
    return $$("div[class='card h-100']");
  }
  get productPrices() {
    return $$("//tr/td[4]/strong");
  }
  async addToCart(products) {
    for (let i = 0; i < (await this.cards.length); i++) {
      const card = await this.cards[i].$("div h4 a");

      if (products.includes(await card.getText())) {
        await this.cards[i].$(".card-footer button").click();
      }
    }
  }

  async productsValues() {
    await Promise.all(
      await this.productPrices.map(async (price) =>
        parseInt((await price.getText()).split(".")[1].trim())
      )
    );
  }

  //   async total() {
  //     this.productsValues.reduce((acc, cur) => acc + parseInt(cur), 0);
  //   }
}

export default new Shop();
