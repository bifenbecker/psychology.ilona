import type { SVGProps } from "react";

export function BurgerMenuIcon(props: SVGProps<SVGSVGElement>) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 512 512"
			width="1em"
			height="1em"
			{...props}
		>
			<title>menu</title>
			<path
				fill="currentColor"
				d="M80 96h352v32H80zm0 144h352v32H80zm0 144h352v32H80z"
			></path>
		</svg>
	);
}
