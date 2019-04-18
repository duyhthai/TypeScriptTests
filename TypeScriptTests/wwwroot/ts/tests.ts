var firstName: string = "Francesco";
var surName: string = "Abbruzzese";

function fullName(x: string, y: string, spaces: number): string {
	return x + Array(spaces + 1).join(' ') + y;
}

var label: string = fullName(firstName, surName, 3);

var aString: string = `this is a ${firstName} string`,
	aNumber: number,
	anInteger: number = 1;


let untypedVar;
untypedVar = 1.2;
var test1: number = untypedVar + 2;



var nullCheck: string | null | undefined = null;
type ExtendedString = string | null | undefined;
var undefinedCheck: ExtendedString = undefined;


type dice = 1 | 2 | 3 | 4 | 5 | 6;
var myDice: dice = 5; //Right


function wrongNumer(x: number): number | void {
	if (x > 0) return x;
}