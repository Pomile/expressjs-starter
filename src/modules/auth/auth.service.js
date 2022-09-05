
class AuthService {

    /**
     * @description Create a user
     * @param {object} data
     * @returns {object}
     */

    static async signUp (data) {
        return data
    }

   static async login (data) {
    return data
   }

   static async verifyEmail(hash){
        return hash

   }

   static async generatePasswordResetToken(email) {

    return email
   }
   /**
    * Verify Password Reset Token
    * @param {*} hash 
    * @returns 
    */
   static async verifyPasswordResetToken(hash){
    return hash
   }

   /**
    * Verify Password Reset Token
    * @param {*} hash 
    * @returns 
    */
    static async resetPassword(hash, password){
        return 'something'
    }
}
export default AuthService
