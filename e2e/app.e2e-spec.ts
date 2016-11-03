import { YourthingPage } from './app.po';

describe('yourthing App', function() {
  let page: YourthingPage;

  beforeEach(() => {
    page = new YourthingPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
