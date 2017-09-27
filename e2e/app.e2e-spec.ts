import { D3BrainstormingMapPage } from './app.po';

describe('d3-brainstorming-map App', () => {
  let page: D3BrainstormingMapPage;

  beforeEach(() => {
    page = new D3BrainstormingMapPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
