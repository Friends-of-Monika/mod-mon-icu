export function getCssVar(name: string): string {
	const styles = getComputedStyle(document.documentElement);
	return styles.getPropertyValue(name);
}
