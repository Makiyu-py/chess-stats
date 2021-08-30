// https://stackoverflow.com/a/34680912/14614326
export function camel2title(myString: string): string {
	myString = myString.replace(
		/([A-Z](?=[A-Z][a-z])|[^A-Z](?=[A-Z])|[a-zA-Z](?=[^a-zA-Z]))/g,
		'$1 '
	);
	myString = myString.charAt(0).toUpperCase() + myString.slice(1);
	return myString;
}
