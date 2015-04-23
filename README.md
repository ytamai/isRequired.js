# isRequiredJS

## Overview
*開発中*

型チェックに成功すればそのまま出力されます。


### Usage:

```javascript
var stream=isRequired('spec',target);
```
*target*の型が*spec*と一致すれば、*target*を返します。
一致しなければ、falseを返します。
*spec*がdateの場合、正しい日付かどうかもテストします。


### 利用可能な型

+ string
+ number
+ array
+ date


### 対応予定の型

+ object
+ boolean
+ regexp


## Overview
*dev version*
Type test and stream simply.


### Usage

```javascript
var stream=isRequired('spec',target);
```
If type of *target* is *spec*, target is stream.
Else if it was invalid, false is stream.
And if *spec* is *date*, validate date.


### Available Spec

+ string
+ number
+ array
+ date


### Not Available yet...

+ object
+ boolean
+ regexp


### License

isRequired.js v0.6.0
https://github.com/ytamai/isRequired.js

Copyright 2015 ytamai
Released under the MIT license
