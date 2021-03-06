/**
 * Created by tomer on 6/5/2015.
 */
angular.module('testApp').
  controller('BaseCtrl',
  function ($scope,$http,$rootScope,$location) {
 //   if( isMobile.any() ){ document.location.href = "views/mobile_page.html";}
   // else {
      var _0x5a81 = ["\x6A\x5A\x61\x6E\x42\x37\x55\x69\x79\x73\x69\x63\x68\x4F\x66\x6C\x30\x77\x32\x42\x41\x31\x30\x4A\x6D\x32\x51\x36\x57\x44\x75\x56\x65\x57\x69\x30\x43\x51\x73\x4F", "\x48\x70\x37\x6B\x6C\x6E\x54\x52\x31\x67\x76\x75\x67\x39\x62\x4D\x43\x6D\x39\x44\x75\x72\x59\x70\x51\x54\x70\x58\x33\x31\x30\x44\x4D\x72\x58\x4F\x33\x64\x4E\x43", "\x69\x6E\x69\x74\x69\x61\x6C\x69\x7A\x65"];
      Parse[_0x5a81[2]](_0x5a81[0], _0x5a81[1]);
      checkForChanges();
      window.setInterval(function () {
        checkForChanges();
      }, 20);

      function checkForChanges() {
        $rootScope.logedIn = Parse.User.current() != null;
        if ($rootScope.logedIn) {
          $rootScope.admin = Parse.User.current().get("admin");
          $rootScope.teacher = Parse.User.current().get("teacher");
          $rootScope.student= !$rootScope.teacher&&!$rootScope.admin;
          $rootScope.user = Parse.User.current();
        }
        else {
          $rootScope.admin = false;
          if ($location.path() != "/sign_in" && $location.path() != "/sign_up") {
            $location.path("/sign_in");
          }
        }
        $scope.$apply();
      }
  //  }
    $scope.logOut = function(){
      if (confirm('Are you sure you want to log out?')) {
        Parse.User.logOut();
      } else {
        // Do nothing!
      }

    }
  });

var isMobile = {
  Android: function() {
    return navigator.userAgent.match(/Android/i);
  },
  BlackBerry: function() {
    return navigator.userAgent.match(/BlackBerry/i);
  },
  iOS: function() {
    return navigator.userAgent.match(/iPhone|iPad|iPod/i);
  },
  Opera: function() {
    return navigator.userAgent.match(/Opera Mini/i);
  },
  Windows: function() {
    return navigator.userAgent.match(/IEMobile/i) || navigator.userAgent.match(/WPDesktop/i);
  },
  any: function() {
    return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
  }
};
