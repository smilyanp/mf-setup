/* 
 * FILE: 
 * - root-methods.util.js
 *
 * DESCRIPTION: 
 * - This file is to be used for any functions needed within the root-application.js in an 
 *   attempt to keep the root-application file smaller and more manageable.
 * 
*/

export const showWhenAnyOf = (routes) => {
    return function (location) {
      return routes.some((route) => location.pathname === route);
    };
}

export const showWhenPrefix = (routes) => {
    return function (location) {
      return routes.some((route) => location.pathname.startsWith(route));
    };
}

export const showExcept = (routes) => {
    return function (location) {
      return routes.every((route) => !location.pathname.startsWith(route));
    };
}

export const showWhenAnyOfAndNotTaxfiler = (routes) => {
    return function (location) {
      return routes.some((route) => location.pathname === route && location.search.indexOf("?csp") == -1);
    };
}

export const showWhenPrefixWithParameters = (routes) => {
    return function (location) {
      // map routes into regex strings, with each parameter getting replaced with a wildcard
      let regexRoutes = [];
      routes.forEach((route) => {
        route = route.replaceAll(/:([^/])+\//g, ')(.+\/)(');
        regexRoutes.push(`(${route}).*`);
      });

      let x = regexRoutes.some(route => {
        return location.pathname.match(route)
      })

      // attempt to match url to each regex
      return regexRoutes.some((route) => location.pathname.match(route));
    };
}

export const showWhenSentaRoute = () => {
    return function (location) {
      const url = location.pathname;
      if (url.startsWith('/c/')) {
        return true
      } else if (url.startsWith('/s/')) {
        return true
      } else if (url.startsWith('/t/')) {
        return true
      } else if (url.startsWith('/j/')) {
        return true
      } else if (url.startsWith('/f/')) {
        return true
      } else {
        return false
      }
    }
}

export const showWhenTaxfilerRoute = () => {
    return function (location) {
      return location.search.indexOf("?csp") > -1 || (location.pathname.startsWith("/client-management/") && location.pathname.endsWith("/taxfiler"));
    }
}

export const load = (module) => {
    return System.import(module).then(m => m.default);
}
