'use strict';
'require view';

return view.extend({
	render: function() {
		return E('iframe', {
			'src': '/speedtest/',
			'style': 'width: 100%; height: 800px; border: none; border-radius: 10px;'
		});
	},

	handleSave: null,
	handleSaveApply: null,
	handleReset: null
});
