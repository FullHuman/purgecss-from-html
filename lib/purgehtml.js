'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var parse5 = _interopDefault(require('parse5'));

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();









































var toConsumableArray = function (arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  } else {
    return Array.from(arr);
  }
};

var getSelectorsInNodes = function getSelectorsInNodes(node) {
    var selectors = [];
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
        for (var _iterator = node.children[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var childNode = _step.value;

            if (childNode.type === "tag") {
                var tag = void 0,
                    classes = [],
                    ids = [];
                // add tag name
                tag = childNode.name;
                // add classes names
                if (childNode.attribs) {
                    if (childNode.attribs.class) classes = childNode.attribs.class.split(" ");
                    if (childNode.attribs.id) ids = childNode.attribs.id.split(" ");
                }
                selectors = [].concat(toConsumableArray(selectors), [tag], toConsumableArray(classes), toConsumableArray(ids), toConsumableArray(getSelectorsInNodes(childNode)));
            }
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion && _iterator.return) {
                _iterator.return();
            }
        } finally {
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }

    return selectors;
};

var PurgeFromHtml = function () {
    function PurgeFromHtml() {
        classCallCheck(this, PurgeFromHtml);
    }

    createClass(PurgeFromHtml, null, [{
        key: "extract",
        value: function extract(content) {
            var tree = parse5.parse(content, {
                treeAdapter: parse5.treeAdapters.htmlparser2
            });
            return getSelectorsInNodes(tree);
        }
    }]);
    return PurgeFromHtml;
}();

module.exports = PurgeFromHtml;
