import { useState } from 'react';

const ToggleSwitch = (props) => {
	const [isOn, setIsOn] = useState(props.defaultChecked || false);

	const styles = {
		switch: `relative inline-block w-10 h-5 rounded-full ${
			isOn ? 'bg-green-500' : 'bg-red-500'
		}`,
		slider: `absolute top-2 ${
			isOn ? 'left-22' : 'left-2'
		} w-4 h-4 rounded-full bg-white transition-left duration-200 ease-in-out`,
		checkbox: `absolute opacity-0 pointer-events-none`,
		titles: `absolute top-2 ml-12 ${
			isOn ? 'text-green-500' : 'text-red-500'
		} font-bold`
	};

	const handleToggle = () => {
		const newValue = !isOn;
		setIsOn(newValue);
		props?.onToggleChange?.(newValue);
	};

	return (
		<>
			<label className={styles.switch}>
				<input
					type="checkbox"
					checked={isOn}
					onChange={handleToggle}
					disabled={props?.disabled}
					className={styles.checkbox}
				/>
				<span className={styles.slider}></span>
				<span className={styles.titles}>
					{isOn ? props?.OnTitle || 'On' : props?.OffTitle || 'Off'}
				</span>
			</label>
			<br />
		</>
	);
};

export default ToggleSwitch;
