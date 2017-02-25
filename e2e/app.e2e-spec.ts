import { GdFrontendPage } from './app.po';

describe('gd-frontend App', () => {
  let page: GdFrontendPage;

  beforeEach(() => {
    page = new GdFrontendPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
