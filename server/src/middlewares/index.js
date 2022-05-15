import {CommonErrors, ValidationErrors} from "../utilities/error-generate.js";
import {errorResponse} from "../helpers/httpResponse.helper.js";

/**
 * Handle error from controller catch
 *
 * @param err
 * @param req
 * @param res
 * @param next
 * @returns {*}
 */
export const handleError = (err, req, res, next) => {
    if (res.headersSent) {
        return next(err)
    }

    // LATER: log create LATER, using pino !!!
    return errorResponse(res, err)
}


/**
 * Handle form validation
 *
 * @param validate
 * @returns {(function(*, *, *): (*))|*}
 */
export const handleValidation = validate => {
    return (req, res, next) => {
        const result = validate(req.body);
        if ( result.error == null) {
            return next();
        }

        let message = result.error.details.map(elem => elem.message);
        const messages = []
        message.forEach(msg => {
            messages.push(msg.replace(/["]+/g, '')) // trim quote marks
        })
        // console.log('messages array: ', messages);
        const error = new ValidationErrors(messages);
        return errorResponse(res, error)
        // Validate error sample
        /**
          [Error [ValidationError]: "email" must be a valid email] {
            _original: { email: 'test1@.com', name: '123456' },
            details: [
              {
                message: '"email" must be a valid email',
                path: [Array],
                type: 'string.email',
                context: [Object]
              }
            ]
          }
         */
    }
}
