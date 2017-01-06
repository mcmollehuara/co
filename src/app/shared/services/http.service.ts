import {Injectable} from '@angular/core';
import {Http, XHRBackend, RequestOptions, Request, RequestOptionsArgs, Response, Headers} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import {ToastyService, ToastyConfig} from 'ng2-toasty';

@Injectable()
export class HttpService extends Http {

	constructor(backend: XHRBackend, options: RequestOptions) {
		let userToken = JSON.parse(localStorage.getItem('tokenInfo'));
		options.headers.set('Authorization', `Bearer ${userToken.bearer}`);
		super(backend, options);
	}

	request(url: string | Request, options?: RequestOptionsArgs): Observable<Response> {
		let userToken = JSON.parse(localStorage.getItem('tokenInfo'));
		if (typeof url === 'string') { // meaning we have to add the token to the options, not in url
			if (!options) {
				// let's make option object
				options = { headers: new Headers() };
			}
			options.headers.set('Authorization', `Bearer ${userToken.bearer}`);
		} else {
			// we have to add the token to the url object
			url.headers.set('Authorization', `Bearer ${userToken.bearer}`);
		}
		// return super.request(url, options).catch(this.catchAuthError(this));
		let response = super.request(url, options);
		response.subscribe(null, error => {
			this.catchAuthError(error);
		}, () => {
			// Own code on success
		});
		return response;
	}

	/**
		 * Performs a request with `get` http method.
	*/
	public get(url: string, options?: RequestOptionsArgs): Observable<Response> {
		// Own code before the request is performed
		var response = super.get(url, options);
		response.subscribe(null, error => {
			this.catchAuthError(error);
		}, () => {

			let toastr = new ToastyService(new ToastyConfig());
			toastr.success({ title: "Success", msg: "processsssssss!" });			
		});
		return response;
	}
    /**
     * Performs a request with `post` http method.
     */
	public post(url: string, body: any, options?: RequestOptionsArgs): Observable<Response> {
		var response = super.post(url, body, options);
		response.subscribe(null, error => {
			this.catchAuthError(error);
		}, () => {
			// Own code on success
		});
		return response;
	}

    /**
     * Performs a request with `put` http method.
     */
    public put(url: string, body: any, options?: RequestOptionsArgs): Observable<Response> {
		var response = super.put(url, body, options);
		response.subscribe(null, error => {
			this.catchAuthError(error);
		}, () => {
			// Own code on success
		});
		return response;
	}
    /**
     * Performs a request with `delete` http method.
     */
    public delete(url: string, options?: RequestOptionsArgs): Observable<Response> {
		var response = super.delete(url, options);
		response.subscribe(null, error => {
			this.catchAuthError(error);
		}, () => {
			// Own code on success
		});
		return response;
	}
    /**
     * Performs a request with `patch` http method.
     */
    public patch(url: string, body: any, options?: RequestOptionsArgs): Observable<Response> {
		var response = super.patch(url, body, options);
		response.subscribe(null, error => {
			this.catchAuthError(error);
		}, () => {
			// Own code on success
		});
		return response;
	}
    /**
     * Performs a request with `head` http method.
     */
    public head(url: string, options?: RequestOptionsArgs): Observable<Response> {
		var response = super.head(url, options);
		response.subscribe(null, error => {
			this.catchAuthError(error);
		}, () => {
			// Own code on success
		});
		return response;
	}
    /**
     * Performs a request with `options` http method.
     */
    public options(url: string, options?: RequestOptionsArgs): Observable<Response> {
		var response = super.options(url, options);
		response.subscribe(null, error => {
			this.catchAuthError(error);
		}, () => {
			// Own code on success
		});
		return response;
	}

	private catchAuthError(error: any) {
		// we have to pass HttpService's own instance here as `self`
		return (res: Response) => {
			console.log(res);
			if (res.status === 0) {
				console.log(res);
			}
			if (res.status === 401 || res.status === 403) {
				// if not authenticated
				console.log(res);
			}

			return Observable.throw(res);
		};
	}
}
