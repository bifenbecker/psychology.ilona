import type { ElementType, PropsWithChildren, SVGProps } from "react";

type CardProps = {
	Icon: ElementType<SVGProps<SVGSVGElement>>;
	title: string;
	text: string;
	onClick: () => void;
} & PropsWithChildren;

const Card = ({ Icon, title, text, onClick }: CardProps) => {
	return (
		<div className="flex w-fit flex-col items-start justify-center gap-3 rounded-md bg-white p-7 shadow-xl hover:bg-gray-200 md:gap-7 md:p-9">
			<Icon width={42} height={42} />
			<h1 className="text-xl md:text-2xl">{title}</h1>
			<p>{text}</p>
			<button onClick={onClick} type="button">
				Подробнее
			</button>
		</div>
	);
};

export { Card };
