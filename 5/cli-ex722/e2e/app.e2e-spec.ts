import { CliEx722Page } from './app.po';

describe('cli-ex722 App', function() {
  let page: CliEx722Page;

  beforeEach(() => {
    page = new CliEx722Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
