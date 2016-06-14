/**
 * Utility combine multiple regular expressions.
 *
 * @param {RegExp[]|string[]} regexpList List of regular expressions or strings.
 * @param {string} flags Normal RegExp flags.
 */
var combineRegExp = function (regexpList, flags) {
  var i,
      source = '';
  for (i = 0; i < regexpList.length; i++) {
    if (typeof regexpList[i] === 'string') {
      source += regexpList[i];
    } else {
      source += regexpList[i].source;
    }
  }
  return new RegExp(source, flags);
};

/**
 * Generate the required regular expressions once.
 *
 * Regular Expressions are easier to manage this way and can be well described.
 *
 * @result {object} Object containing regular expressions.
 */
var generateRegExp = function () {
  // Note any variables with "Capture" in name include capturing bracket set(s).
  var searchFlags = 'gi', // ignore case for angles, "rgb" etc
      rAngle = /(?:[+-]?\d*\.?\d+)(?:deg|grad|rad|turn)/, // Angle +ive, -ive and angle types
      rSideCornerCapture = /to\s+((?:(?:left|right)(?:\s+(?:top|bottom))?))/, // optional 2nd part
      rComma = /\s*,\s*/, // Allow space around comma.
      rColorHex = /\#(?:[A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})/, // 3 or 6 character form
      rDigits3 = /\(\s*(?:[0-9]{1,3}\s*,\s*){2}[0-9]{1,3}\s*\)/,// "(1, 2, 3)"
      rDigits4 = /\(\s*(?:[0-9]{1,3}\s*,\s*){3}(?:\d*\.?\d+){1,4}\s*\)/,// "(1, 2, 3, 4)"
      rValue = /(?:[+-]?\d*\.?\d+)(?:%|[a-z]+)?/,// ".9", "-5px", "100%".
      rKeyword = /[_A-Za-z-][_A-Za-z0-9-]*/,// "red", "transparent", "border-collapse".
      rColor = combineRegExp([
        '(?:', rColorHex, '|', '(?:rgb|hsl)', rDigits3, '|', '(?:rgba|hsla)', rDigits4, '|', rKeyword, ')'
      ], ''),
      rColorStop = combineRegExp([rColor, '(?:\\s+', rValue, ')?'], ''),// Single Color Stop, optional value.
      rColorStopList = combineRegExp(['(?:', rColorStop, rComma, ')*', rColorStop], ''),// List of color stops min 1.
      rLineCapture = combineRegExp(['(?:(', rAngle, ')|', rSideCornerCapture, ')'], ''),// Angle or SideCorner
      rGradientSearch = combineRegExp([
        '(', rLineCapture, ')', rComma, '(', rColorStopList, ')'
      ], searchFlags),// Capture 1:"line", 2:"angle" (optional), 3:"side corner" (optional) and 4:"stop list".
      rColorStopSearch = combineRegExp([
        '\\s*(', rColor, ')', '(?:\\s+', '(', rValue, '))?', '(?:', rComma, '\\s*)?'
      ], searchFlags);// Capture 1:"color" and 2:"position" (optional).

  return {
    gradientSearch:  rGradientSearch,
    colorStopSearch: rColorStopSearch
  };
};

/**
 * Actually parse the input gradient parameters string into an object for reusability.
 *
 *
 * @note Really this only supports the standard syntax not historical versions, see MDN for details
 *       https://developer.mozilla.org/en-US/docs/Web/CSS/linear-gradient
 *
 * @param regExpLib
 * @param {string} input Input string in the form "to right bottom, #FF0 0%, red 20px, rgb(0, 0, 255) 100%"
 * @returns {object|undefined} Object containing break down of input string including array of stop points.
 */
export default function parseGradient(inputSource, regExpLib = generateRegExp()) {
  var result,
      matchGradient,
      matchColorStop,
      stopResult;

  var rGradientEnclosedInBrackets = /.*gradient\s*\(((?:\([^\)]*\)|[^\)\(]*)*)\)/;
  var input = rGradientEnclosedInBrackets.exec(inputSource);

  matchGradient = regExpLib.gradientSearch.exec(input);
  if (matchGradient !== null) {
    result = {
      original:      matchGradient[0],
      colorStopList: []
    };

    // Line (Angle or Side-Corner).
    if (!!matchGradient[1]) {
      result.line = matchGradient[1];
    }
    // Angle or undefined if side-corner.
    if (!!matchGradient[2]) {
      result.angle = matchGradient[2];
    }
    // Side-corner or undefined if angle.
    if (!!matchGradient[3]) {
      result.sideCorner = matchGradient[3];
    }

    // Loop though all the color-stops.
    matchColorStop = regExpLib.colorStopSearch.exec(matchGradient[4]);
    while (matchColorStop !== null) {

      stopResult = {
        color: matchColorStop[1]
      };

      // Position (optional).
      if (!!matchColorStop[2]) {
        stopResult.position = matchColorStop[2];
      }
      result.colorStopList.push(stopResult);

      // Continue searching from previous position.
      matchColorStop = regExpLib.colorStopSearch.exec(matchGradient[4]);
    }
  }

  // Can be undefined if match not found.
  return result;
};