import Shopping from '../pageObjects/Shopping';

describe('empty spec', () => {
  it('passes', () => {
    Shopping.pickSize();
		Shopping.addProduct();
		Shopping.cartInfo();
  })
})