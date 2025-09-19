const defaultMessages = {
  200: 'OK',
  201: 'Created',
  204: 'No Content',
  400: 'Bad Request',
  401: 'Unauthorized',
  403: 'Forbidden',
  404: 'Not Found',
  409: 'Conflict',
  422: 'Unprocessable Entity',
  500: 'Internal Server Error',
  502: 'Bad Gateway',
  503: 'Service Unavailable'
}

let statusCode = null

export class ResponseManager {
  constructor (res, data = null) {
    this.res = res
    this.data = data
  }

  returnResponse (statusCode) {
    const response = {
      timestamp: new Date().toISOString(),
      message: defaultMessages[statusCode] || 'Unknown Status'
    }

    if (this.data) response.data = this.data

    return this.res.status(statusCode).json(response)
  }

  ok (data = null) {
    statusCode = 200
    this.data = data
    return this.returnResponse(statusCode)
  }

  created (data = null) {
    statusCode = 201
    this.data = data
    return this.returnResponse(statusCode)
  }

  noContent (data = null) {
    statusCode = 204
    this.data = data
    return this.returnResponse(statusCode)
  }

  badRequest (data = null) {
    statusCode = 400
    this.data = data
    return this.returnResponse(statusCode)
  }

  unauthorized (data = null) {
    statusCode = 401
    this.data = data
    return this.returnResponse(statusCode)
  }

  forbidden (data = null) {
    statusCode = 403
    this.data = data
    return this.returnResponse(statusCode)
  }

  notFound (data = null) {
    statusCode = 404
    this.data = data
    return this.returnResponse(statusCode)
  }

  conflict (data = null) {
    statusCode = 409
    this.data = data
    return this.returnResponse(statusCode)
  }

  unprocessableEntity (data = null) {
    statusCode = 422
    this.data = data
    return this.returnResponse(statusCode)
  }

  internalServerError (data = null) {
    statusCode = 500
    this.data = data
    return this.returnResponse(statusCode)
  }

  badGateway (data = null) {
    statusCode = 502
    this.data = data
    return this.returnResponse(statusCode)
  }

  serviceUnavailable (data = null) {
    statusCode = 503
    this.data = data
    return this.returnResponse(statusCode)
  }
}
