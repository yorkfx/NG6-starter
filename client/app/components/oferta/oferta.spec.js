import OfertaModule from './oferta';
import OfertaController from './oferta.controller';
import OfertaComponent from './oferta.component';
import OfertaTemplate from './oferta.html';

describe('Oferta', () => {
  let $rootScope, makeController;

  beforeEach(window.module(OfertaModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new OfertaController();
    };
  }));

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
  });

  describe('Controller', () => {
    // controller specs
    it('has a name property [REMOVE]', () => { // erase if removing this.name from the controller
      let controller = makeController();
      expect(controller).to.have.property('name');
    });
  });

  describe('Template', () => {
    // template specs
    // tip: use regex to ensure correct bindings are used e.g., {{  }}
    it('has name in template [REMOVE]', () => {
      expect(OfertaTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
    // component/directive specs
    let component = OfertaComponent;

    it('includes the intended template', () => {
      expect(component.template).to.equal(OfertaTemplate);
    });

    it('invokes the right controller', () => {
      expect(component.controller).to.equal(OfertaController);
    });
  });
});
