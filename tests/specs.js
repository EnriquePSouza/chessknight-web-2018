describe('Chess Knight App Tests', function () {
  var square = element(by.id('d5'));
  var checkbox = element(by.id('cbHighlights'));

  it('should have a Web Application Running', function () {
    expect(browser.get('http://192.168.0.102:8080/'));
  });

  it('should have a Title', function () {
    expect(browser.getTitle()).toEqual('Chess Knight');
  });

  it('should have a Checkbox', function () {
    expect(checkbox.click());
  });

  it('should have a Chessboard', function () {
    expect(checkbox.getAttribute('class')).toEqual('ng-untouched ng-valid ng-not-empty ng-dirty ng-valid-parse')
    expect(square.click());
  });

  it('should have a Chessboard with Highlights', function () {
    expect(square.getAttribute('class')).toEqual('divTableCell ng-binding ng-scope imgKnight highlightTurnTwo')
  });
});