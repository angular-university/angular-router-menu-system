import { AngularRouterMenuSystemPage } from './app.po';

describe('angular-router-menu-system App', function() {
  let page: AngularRouterMenuSystemPage;

  beforeEach(() => {
    page = new AngularRouterMenuSystemPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
