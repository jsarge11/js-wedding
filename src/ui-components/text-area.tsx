import React, { FC, InputHTMLAttributes } from 'react';
import classnames from 'classnames';

interface TextAreaProps extends InputHTMLAttributes<HTMLTextAreaElement> {
	label: string;
}
export const TextArea: FC<TextAreaProps> = (props) => {
	const { label, className, ...rest } = props;

	const innerClasses = 'p-1';
	const lowerLabel = label.toLowerCase();
	const isCheckbox = rest.type === 'checkbox';

	let labelWrapperClasses = 'flex flex-col items-center p-1 w-full';
	let labelTextClasses = `${innerClasses} rounded-t-lg truncate pl-2 w-full text-black md:text-2xl`;
	let textAreaClasses = `${innerClasses} rounded-b-lg pl-1 w-full m-h-20 text-black md:text-2xl`;

	if (isCheckbox) {
		labelTextClasses += ' rounded-r-lg';
		labelWrapperClasses += ' relative cursor-pointer';
		textAreaClasses += ' transform scale-200 ml-6';
	} else {
		textAreaClasses += ' flex-1';
	}

	return (
		<label className={labelWrapperClasses}>
			<p className={labelTextClasses}>{label}:</p>
			<textarea
				className={classnames(textAreaClasses, className)}
				id={lowerLabel}
				name={lowerLabel}
				rows={6}
				{...rest}
			/>
		</label>
	);
};
