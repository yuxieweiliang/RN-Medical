
import { Alert } from 'react-native';
import buffer from 'buffer'

export default pushMessage = async () => {
	try {
	  
		let postdata = JSON.stringify({
			"platform": ["android"],
			"audience": "all",
			"notification": {
			  "alert": "hi notify 7 !",
			},
			"message": {
			  "msg_content": "custome 8 !",
			},
		})

		const res = await fetch('https://api.jpush.cn/v3/push', {
			method: 'POST',
			headers: {
				'Connection': 'Keep-Alive',
				'Charset': 'UTF-8',
				'Content-Type': 'application/json',
				"Authorization": "Basic " + new buffer.Buffer.from("cb421288cf278b1a3ced70b8:c241a3ef3f786b736b65845c").toString('base64')
			},
			body:postdata
		})
		const event = await res.json()
		alert(JSON.stringify(event))
		return event
	} catch (err) {
		alert(err);
	}
}



