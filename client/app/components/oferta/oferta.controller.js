class OfertaController {
  /*@ngInject*/
  constructor(Offers) {
    this.name = 'oferta';
    this.offers = Offers;
    this.listing = null;
  }

  $onInit(){
   this.listOffers();
  }

  listOffers() {
    return this.offers.get().then(
      (response) => this.listing = response.data.result
    );
  }

}

export default OfertaController;
