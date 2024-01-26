import React, { FC, InputHTMLAttributes } from 'react';
import classnames from 'classnames';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
	label: string;
}
export const Input: FC<InputProps> = (props) => {
	const { label, className, ...rest } = props;

	const innerClasses = 'p-1';
	const lowerLabel = label.toLowerCase();
	const isCheckbox = rest.type === 'checkbox';

	let inputClasses = `${innerClasses} rounded-r-lg pl-1 md:text-2xl`;
	let labelTextClasses = `${innerClasses} rounded-l-lg truncate pl-2 text-black md:text-2xl`;
	let labelWrapperClasses = 'flex items-center p-1 w-full text-black';

	if (isCheckbox) {
		labelTextClasses += ' rounded-r-2xl';
		labelWrapperClasses += ' relative cursor-pointer';
		inputClasses += ' transform scale-200 ml-6';
	} else {
		inputClasses += ' flex-1';
	}

	return (
		<label className={labelWrapperClasses}>
			<p className={labelTextClasses}>{label}:</p>
			<input
				className={classnames(inputClasses, className)}
				id={lowerLabel}
				name={lowerLabel}
				{...rest}
			/>
		</label>
	);
};
