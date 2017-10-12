import { AiPage } from './app.po';

describe('ai App', () => {
  let page: AiPage;

  beforeEach(() => {
    page = new AiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
