//var wqiAPI = '//api.waqi.info/feed/helsinki/?token=806975824bc11802f1c018cb32976ef7f23d4e7a';

let wqi = new XMLHttpRequest();

	wqi.onload = function () {
		// process return data
		if (this.readyState === 4) {
			if (wqi.status >= 200 && wqi.status < 300) {
				// this will run when the request is successful
                let data = JSON.parse(wqi.responseText);
                console.log(data)
			}
		} else {
			// log the error status text helps you with debugging
			console.log('Request failed with code: ' + wqi.statusText);
		}
	};

	// create and send a GET request
	wqi.open('GET', 'https://api.waqi.info/feed/helsinki/?token=806975824bc11802f1c018cb32976ef7f23d4e7a');
	wqi.send();


