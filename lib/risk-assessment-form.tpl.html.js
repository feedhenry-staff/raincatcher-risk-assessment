var ngModule;
try {
  ngModule = angular.module('wfm.risk-assessment');
} catch (e) {
  ngModule = angular.module('wfm.risk-assessment', []);
}

ngModule.run(['$templateCache', function ($templateCache) {
  $templateCache.put('wfm-template/risk-assessment-form.tpl.html',
    '<ion-item class="risk-assessment">\n' +
    '  <div ng-show="riskAssessmentStep === 0">\n' +
    '    <div class="heading">\n' +
    '      <i class="icon ion-alert-circled"></i>\n' +
    '      <h2>Risk assessment complete?</h2>\n' +
    '    </div>\n' +
    '    <button class="button button-balanced button-full" ng-click="ctrl.answerComplete(true)">Yes</button>\n' +
    '    <button class="button button-assertive button-full" ng-click="ctrl.answerComplete(false)">No</button>\n' +
    '  </div>\n' +
    '  <div ng-if="riskAssessmentStep == 1">\n' +
    '    <div class="heading">\n' +
    '      <h3>Signature:</h3>\n' +
    '    </div>\n' +
    '    <risk-assessment-signature></risk-assessment-signature>\n' +
    '    <button class="button button-positive button-full" ng-click="ctrl.done()">Submit</button>\n' +
    '  </div>\n' +
    '</ion-item>\n' +
    '');
}]);