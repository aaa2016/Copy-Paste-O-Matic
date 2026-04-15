var brandColor = "#555555"; // Default is otherwise: #555555
var brandColorLight = "#888888"; // Default is otherwise: #888888
var brandContrastColor = "white"; // Default is otherwise: white

var configInfo = [

	/*
		Notes to end user:
		1) Some text requires an escape character:
			eg. # should be written as \#
		2) Last button in each section doesn't have comma after square bracket
		3) Last section doesn't have comma after square bracket
		4) To insert a line break (new line), use \n
		5) Don't mix the same quotation marks - use ' inside the text
			or use escape character \' or \"
		6) You can set a custom colour for the buttons in a particular section
			in the element after the section title
	*/

	// Section 1
	[
		["Section 1",""],
		["Text Aa","- This is text Aa."],
		["Text Bb","- This is text Bb."],
		["Text Cc","- This is text Cc."]
	],
	
	// Section 2
	[
		["Section 2",""],
		["Text Dd","- This is text Dd."],
		["Text Ee","- This is text Ee."],
		["Text Ff","- This is text Ff. This is also text Ff. This is text also Ff." + 
		"This is text Ff. This is text Ff. This is text Ff. This is text Ff. This is" + 
		"text Ff. This is text Ff."]
		],
	
	// Section 3
	[
		["Section 3","#000099"],
		["Text Aa","- This is text Aa."],
		["Text Bb","- This is text Bb."],
		["Text Cc","- This is text Cc."],
		["Text Aaa","- This is text Aaa."],
		["Text Bbb","- This is text Bbb."],
		["Text Ccc","- This is text Ccc."]
	],
	
	// Section 4
	[
		["Section 4","#009900"],
		["Text Dd","- This is text Dd."],
		["Text Ee","- This is text Ee."],
		["Text Ff","- This is text Ff."],
		["Text Ddd","- This is text Ddd."],
		["Text Eee","- This is text Eee."],
		["Text Fff","- This is text Fff."]
		],
	
	// Section 5
	[
		["Section 5","#990000"],
		["Text Xx","- This is text Xx."],
		["Text Yy","- This is text Yy."],
		["Text Zz","- This is text Zz."]
	]
	
	/* To create a new section, copy and paste this up to the asterisk and slash:
	
	[
		["Section Title","Section custom button colour (optional)"],
		["Button text Xx","- This is the text snippet Xx."],
		["Button text Yy","- This is the text snippet Yy."],
		["Button text Zz","- This is the text snippet Zz."]
	]
	
	*/

]; // End of configInfo array

console.log("Config file has been loaded.");