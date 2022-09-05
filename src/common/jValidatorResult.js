import CatchAsync from '../exception/catchAsyncError'

/**
 * Schema validator
 * @param {Object} schemas
 */
export default  (schema, data) => {
  return CatchAsync(schema.validateAsync(data, { abortEarly: false }));
};