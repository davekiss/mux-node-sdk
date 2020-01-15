/*!
 * Mux Delivery Usage
 * Copyright(c) 2019 Mux Inc.
 */
const Base = require('../../base');

/**
 * @private Base delivery-usage path for the Mux API
 * */
const PATH = '/video/v1/delivery-usage';

/**
 * Delivery Usage Class - get delivery/streaming usage details for each asset and across all assets. 
 *
 * @example
 * const { Video } = new Mux(accessToken, secret);
 *
 * // List delivery usage
 * Video.DeliveryUsage.list();
 */
class DeliveryUsage extends Base {
  /**
   * List delivery usage
   * @param {object} params - Object to include as query params
   * @param {string} params.asset_id - Filter response to return delivery usage for this asset only.
   * @param {array} params.timeframe - Time window to get delivery usage information. Include start and end time window values in seconds since the Unix epoch. Default time window is 1 hour representing usage from 13th to 12th hour from when the request is made.
   * @param {number} params.limit - Number of Delivery Usage objects to include in the response
   * @param {number} params.page - Offset by this many pages, of the size of `limit`.
   * @returns {Promise} - Returns a resolved Promise with a response from the Mux API
   *
   * @example
   * const { Video } = new Mux(accessToken, secret);
   *
   * // List delivery usage
   * Video.DeliveryUsage.list();
   *
   * @see https://docs.mux.com/reference#delivery-usage
   */
  list(params = {}) {
    return this.http.get(PATH, { params });
  }
}

module.exports = DeliveryUsage;
