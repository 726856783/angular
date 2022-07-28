import { ComponentsEx727Page } from './app.po';

describe('components-ex727 App', function() {
  let page: ComponentsEx727Page;

  beforeEach(() => {
    page = new ComponentsEx727Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
