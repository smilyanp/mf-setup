/* eslint-disable */
export const utils = {

  handle404s: function (singleSpa) {
    window.addEventListener('single-spa:routing-event', () => {
      const contentHolders = ['home-app', 'angular-app', 'angular-app-with-routing', 'react-app', 'react-auth-app', 'tax-filer-holder-app'];
      let contentHoldersUsed = [];
      contentHolders.forEach(function (item) {
        if (document.getElementById(item).innerHTML !== '') { contentHoldersUsed.push({'holder': item}) }
      });
      if (contentHoldersUsed.length === 0) {
        singleSpa.navigateToUrl("/404");
      }
    });
  }
}
