angular.module('starter.services', [])

.factory('Commons', function() {

  var _sms_server = '+14077925761';
  var _api_server = 'http://crosscode.tk/dimana/api';
  var _userinfo = {
    mobile: '+6281234567890',
    username: 'hackathon@gmail.com'
  };

  var _items = [
    {code: 'BAWANG_MERAH', name: 'Bawang merah'},
    {code: 'PISANG_AMBON', name: 'Pisang ambon'},
    {code: 'APEL_MALANG', name: 'Apel malang'}
  ]

  var _sellers = [
    {code: 'PASAR_001', name: 'Pasar 001'},
    {code: 'SUPERMARKET_002', name: 'Supermarket 002'},
    {code: 'TOKO_003', name: 'Toko 003'}
  ]

  return {
    userInfo: function() {
      return _userinfo;
    },
    items: function() {
      return _items;
    },
    sellers: function() {
      return _sellers;
    },
    SMSServer: function() {
      return _sms_server;
    },
    APIServer: function() {
      return _api_server;
    },
    updateSMSServer: function(newVal) {
      if (_sms_server != newVal) {
        _sms_server = newVal;
        return true;
      }
      return false;
    },
    updateAPIServer: function(newVal) {
      if (_api_server != newVal) {
        _api_server = newVal;
        return true;
      }
      return false;
    },
    updateUserInfo: function(userInfo) {
      _userinfo = userInfo;
      return true;
    }
  }

})

.service('Webservice', function($http, Commons) {

  var me = this;

  this.urlencode = function(obj) {
      var str = [];
      for(var p in obj) str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
      return str.join("&");
  }

  this.example = function(data, onSuccess, onError) {
    $http({
      method: 'POST',
      url: Commons.APIServer() + '/example',
      data: me.urlencode(data),
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    })
    .success(onSuccess)
    .error(onError);
  }
})

// .factory('Chats', function() {
//   // Might use a resource here that returns a JSON array
//
//   // Some fake testing data
//   var chats = [{
//     id: 0,
//     name: 'Ben Sparrow',
//     lastText: 'You on your way?',
//     face: 'https://pbs.twimg.com/profile_images/514549811765211136/9SgAuHeY.png'
//   }, {
//     id: 1,
//     name: 'Max Lynx',
//     lastText: 'Hey, it\'s me',
//     face: 'https://avatars3.githubusercontent.com/u/11214?v=3&s=460'
//   }, {
//     id: 2,
//     name: 'Adam Bradleyson',
//     lastText: 'I should buy a boat',
//     face: 'https://pbs.twimg.com/profile_images/479090794058379264/84TKj_qa.jpeg'
//   }, {
//     id: 3,
//     name: 'Perry Governor',
//     lastText: 'Look at my mukluks!',
//     face: 'https://pbs.twimg.com/profile_images/598205061232103424/3j5HUXMY.png'
//   }, {
//     id: 4,
//     name: 'Mike Harrington',
//     lastText: 'This is wicked good ice cream.',
//     face: 'https://pbs.twimg.com/profile_images/578237281384841216/R3ae1n61.png'
//   }];
//
//   return {
//     all: function() {
//       return chats;
//     },
//     remove: function(chat) {
//       chats.splice(chats.indexOf(chat), 1);
//     },
//     get: function(chatId) {
//       for (var i = 0; i < chats.length; i++) {
//         if (chats[i].id === parseInt(chatId)) {
//           return chats[i];
//         }
//       }
//       return null;
//     }
//   };
// })

;