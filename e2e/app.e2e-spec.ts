import { ClarityWebsitePage } from './app.po';

describe('clarity-website App', function() {
  let page: ClarityWebsitePage;

  beforeEach(() => {
    page = new ClarityWebsitePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
