import { Ng2TreeDeptPage } from './app.po';

describe('ng2-tree-dept App', function() {
  let page: Ng2TreeDeptPage;

  beforeEach(() => {
    page = new Ng2TreeDeptPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
