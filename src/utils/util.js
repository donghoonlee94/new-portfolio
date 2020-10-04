/* eslint-disable no-unused-vars */
import _get from 'lodash/get';

export function apiFunc(promisifiedFunc, ...arg) {
	return new Promise((resolve, reject) => {
		promisifiedFunc(...arg)
			.then(res => {
				resolve({ error: null, result: res });
			})
			.catch(err => {
				const errcode = _get(err, 'data.error.code');
				const summaryErrorCode = _get(err, 'data.summary.code');
				resolve({ errorCode: errcode || summaryErrorCode, error: err });
			});
	});
}

export const test = 'test';
