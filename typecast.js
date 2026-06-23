// string -> Number
console.log(Number("10")); //10
console.log(Number("100px")); // NaN

// to solve this we can use parseInt
console.log(parseInt("100px")); // 100 and it also works for binary, octal and hexadecimal
console.log(parseInt("100", 2)); // 4  binary base-2
/**
 * parseInt('100', 2) parses the string '100' as a binary (base-2) number.Binary 100 = decimal 4 because:
1
×
2
2
+
0
×
2
1
+
0
×
2
0
=
4
+
0
+
0
=
4
The second argument (2) is the radix (base). So it reads '100' not as "one hundred", but as "one-zero-zero in binary" — which is 4.More examples:
parseInt('101', 2) → 5 (1×4 + 0×2 + 1×1)
parseInt('111', 2) → 7 (1×4 + 1×2 + 1×1)
parseInt('10', 16) → 16 (hex parsing)
parseInt('FF', 16) → 255 (hex FF = 255)
 */
