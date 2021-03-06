import api from '@/api.js'
export default {
  /**
  * Get colors from www.colorfyit.com
  *
  * @param {Object} data Info to get color
  * @param {string} data.url The url
  * @example
  *
  *     grabColors({
  *       url: 'upwork.com'
  *     })
  */
  grabColors(data) {
    return api.$post('/app-settings/grab-colors', data)
  },

  /**
  * Set website colors used in the theme
  *
  * @param {Object} data
  * @example
  *
  *     applyWebsiteColors(data)
  */
  applyWebsiteColors(data) {
    return api.$post('/app-settings/website-colors', data)
  },

  /**
  * Get website settings
  *
  * @param {Object} data
  * @example
  *
  *     getSetting(data)
  */
  getSetting(data) {
    return api.$post('/app-settings/get-setting', data)
  },

  /**
  * Update backgraound image in auth page
  *
  * @example
  *
  *     updateAuthBackground()
  */
  updateAuthBackground() {
    return api.$post('/app-settings/update-auth-background')
  },

  /**
  * Upload a new logo
  * @param {Object} data Data of logo file
  *
  * @example
  *
  *     uploadLogo({
  *       data
  *     })
  */
  uploadLogo(data) {
    return api.$post('/app-settings/upload-logo', data)
  },

  /**
  * Upload a new image
  * @param {Object} data Data of image file
  *
  * @example
  *
  *     uploadImage({
  *       data
  *     })
  */
  uploadImage(data) {
    return api.$post('/app-settings/upload-image', data)
  },

  /**
  * Reset website settings
  *
  * @example
  *
  *     resetSettings()
  */
  resetSettings() {
    return api.$post('/app-settings/reset')
  },

  /**
  * Set product information
  * @param {Object} data Data of product information
  *
  * @example
  *
  *     setProductInfo({
  *       data
  *     })
  */
  setProductInfo(data) {
    return api.$post('/app-settings/set-product-info', data)
  },

  /**
  * Set product information
  * @param {Object} data Data of product information
  *
  * @example
  *
  *     setProductInfo({
  *       data
  *     })
  */
  setPageTitle(data) {
    return api.$post('/app-settings/set-page-title', data)
  }
}
