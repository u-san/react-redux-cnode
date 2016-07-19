export default {
	createUrl(url, param) {
		let str = ''
		for (var i in param) {
			str += '&' + i + '=' + param[i]
		}
		return url + '?' + str.substring(1)
	},

	getTagOpt(obj, data) {
		if (obj.top) return data.top
		if (obj.good) return data.good
		if (!obj.tab) return
		return data[obj.tab]
	},

	formatTime(time) {

		time = Date.parse(time);
		let date = new Date(),
			now = date.getTime(),
			diff = parseInt((now - time) / 1000),
			str = '';

		if (!diff) return;

		if (diff < 60) {
			str = diff + ' 秒前';
		}
		else if (diff >= 60 && diff < 3600) {
			str = parseInt(diff / 60 ) + ' 分前';
		}
		else if (diff >= 3600 && diff < (3600 * 24) ) {
			str = parseInt(diff / 3600) + ' 小时前';
		}
		else if (diff >= (3600 * 24) && diff < (3600 * 24 * 30)) {
			str = parseInt(diff / (3600 * 24)) + ' 天前';
		}
		else if (diff >= (3600 * 24 * 30) && diff < (3600 * 24 * 365)) {
			str = parseInt(diff / (3600 * 24 * 30)) + ' 月前';
		}
		else if (diff >= (3600 * 24 * 365)) {
			str = parseInt(diff / (3600 * 24 * 365)) + ' 年前';
		}
		return str;
	}
}

window.requestNextAnimationFrame = (function () {

  var originalWebkitRequestAnimationFrame = undefined,
      wrapper = undefined,
      callback = undefined,
      geckoVersion = 0,
      userAgent = navigator.userAgent,
      index = 0,
      self = this;

  if (window.webkitRequestAnimationFrame) {
    wrapper = function (time) {
      if (time === undefined) {
        time = +new Date();
      }
      self.callback(time);
    };

    originalWebkitRequestAnimationFrame = window.webkitRequestAnimationFrame;

    window.webkitRequestAnimationFrame = function (callback, element) {
      self.callback = callback;
      originalWebkitRequestAnimationFrame(wrapper, element);
    }
  }

  if (window.mozRequestAnimationFrame) {
    index = userAgent.indexOf('rv:');
    if (userAgent.indexOf('Gecko') != -1) {
      geckoVersion = userAgent.substr(index + 3, 3);
      if (geckoVersion === '2.0') {
        window.mozRequestAnimationFrame = undefined;
      }
    }
  }

  return  window.requestAnimationFrame ||
      window.webkitRequestAnimationFrame ||
      window.mozRequestAnimationFrame ||
      window.oRequestAnimationFrame ||
      window.msRequestAnimationFrame ||

      function (callback, element) {
        var start,
            finish;

        window.setTimeout(function () {
          start = +new Date();
          callback(start);
          finish = +new Date();

          self.timeout = 1000 / 60 - (finish - start);

        }, self.timeout);
      };
}());

window.cancelNextRequestAnimationFrame = window.cancelRequestAnimationFrame
  || window.webkitCancelAnimationFrame
  || window.webkitCancelRequestAnimationFrame
  || window.mozCancelRequestAnimationFrame
  || window.oCancelRequestAnimationFrame
  || window.msCancelRequestAnimationFrame
  || clearTimeout;
