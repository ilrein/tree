webpackJsonp([1],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(177);


/***/ },

/***/ 177:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	__webpack_require__(2);
	
	__webpack_require__(178);
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(160);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _rcTree = __webpack_require__(161);
	
	var _rcTree2 = _interopRequireDefault(_rcTree);
	
	var Demo = _react2['default'].createClass({
	  displayName: 'Demo',
	
	  propTypes: {
	    keys: _react.PropTypes.array
	  },
	  getDefaultProps: function getDefaultProps() {
	    return {
	      keys: ['0-0-0-0', '0-0-1']
	    };
	  },
	  getInitialState: function getInitialState() {
	    var keys = this.props.keys;
	    return {
	      defaultExpandedKeys: keys,
	      defaultSelectedKeys: keys,
	      defaultCheckedKeys: keys,
	      switchIt: true
	    };
	  },
	  onExpand: function onExpand(treeNode, expand, expandedKeys) {
	    console.log('onExpand', expand, expandedKeys);
	  },
	  onSelect: function onSelect(info) {
	    console.log('selected', info);
	  },
	  onCheck: function onCheck(info) {
	    console.log('onCheck', info);
	  },
	  onEdit: function onEdit(e) {
	    console.log('edit', this);
	    e.stopPropagation();
	  },
	  onDel: function onDel(e) {
	    if (!window.confirm('sure to delete?')) {
	      return;
	    }
	    e.stopPropagation();
	  },
	  render: function render() {
	    var customLabel = _react2['default'].createElement(
	      'span',
	      { className: 'cus-label' },
	      _react2['default'].createElement(
	        'span',
	        null,
	        'operations: '
	      ),
	      _react2['default'].createElement(
	        'span',
	        { style: { color: 'blue' }, onClick: this.onEdit },
	        'Edit'
	      ),
	      ' ',
	      _react2['default'].createElement(
	        'span',
	        { style: { color: 'red' }, onClick: this.onDel },
	        'Delete'
	      )
	    );
	    return _react2['default'].createElement(
	      'div',
	      { style: { margin: '0 20px' } },
	      _react2['default'].createElement(
	        'h2',
	        null,
	        'simple'
	      ),
	      _react2['default'].createElement(
	        _rcTree2['default'],
	        { className: 'myCls', showLine: true, multiple: true, checkable: true,
	          defaultExpandedKeys: this.state.defaultExpandedKeys,
	          onExpand: this.onExpand,
	          defaultSelectedKeys: this.state.defaultSelectedKeys,
	          defaultCheckedKeys: this.state.defaultCheckedKeys,
	          onSelect: this.onSelect, onCheck: this.onCheck },
	        _react2['default'].createElement(
	          _rcTree.TreeNode,
	          { title: 'parent 1', key: '0-0' },
	          _react2['default'].createElement(
	            _rcTree.TreeNode,
	            { title: customLabel, key: '0-0-0' },
	            _react2['default'].createElement(_rcTree.TreeNode, { title: 'leaf', key: '0-0-0-0' }),
	            _react2['default'].createElement(_rcTree.TreeNode, { title: 'leaf', key: '0-0-0-1' })
	          ),
	          _react2['default'].createElement(
	            _rcTree.TreeNode,
	            { title: 'parent 1-1', key: '0-0-1', disabled: true },
	            _react2['default'].createElement(_rcTree.TreeNode, { title: 'parent 1-1-0', key: '0-0-1-0', disableCheckbox: true }),
	            _react2['default'].createElement(_rcTree.TreeNode, { title: 'parent 1-1-1', key: '0-0-1-1' })
	          )
	        )
	      )
	    );
	  }
	});
	
	_reactDom2['default'].render(_react2['default'].createElement(Demo, null), document.getElementById('__react-content'));

/***/ },

/***/ 178:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }

});
//# sourceMappingURL=basic.js.map