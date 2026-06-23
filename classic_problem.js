/**
 * 0.1 + 0.2 = 0.30000000000000004
 * this is the classic problem of floating point arithmetic
 */

console.log(0.1 + 0.2)

/**
 * it hapens bcz 0.1 aur 0.2 cannot be represented exactly in binary
 * 0.1*2 = 0.2 ===> 0
 * 0.2*2 = 0.4 ===> 0
 * 0.4*2 = 0.8 ===> 0
 * 0.8*2 = 1.6 ===> 0.6
 * 0.6*2 = 1.2 ===> 0.2
 * 0.2*2 = 0.4 ===> 0.4
 * 0.4*2 = 0.8 ===> 0.8
 * 0.8*2 = 1.6 ===> 0.6
 * 0.6*2 = 1.2 ===> 0.2
 * 0.2*2 = 0.4 ===> 0.4
 * 0.4*2 = 0.8 ===> 0.8
 * 0.8*2 = 1.6 ===> 0.6  repeated ....... as same as for 0.2 with different value so the adition of o,1 and 0,2 is as it is so if the system is 32 bit it will give 0.30000000000000004 as byond this it will loss precision
 * 
 */



console.log(0.1 + 0.2 === 0.3)  // here it is false bcz 0.3 is a literal an 0.1 and 0.3 gve an floting point arimetic as we shown above.

/**
 * 
 * 
 * GOLDEN rule never use floting point number for financial calculations.
 * use paise instead of rupess.
 * 
 * 
 */
const a = '0.1'.charCodeAt(0)
const b = '0.2'.charCodeAt(0)
// console.log(parseFloat(a) + parseFloat(b) === parseFloat('0.3'))
// console.log(String.fromCharCode(a+b))
