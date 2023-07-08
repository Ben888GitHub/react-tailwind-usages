import { useState } from 'react';

const ApplePayButton = () => {
	const [payment, setPayment] = useState(false);

	const handlePayment = () => {
		console.log('Payment Paid');
		setPayment(true);
	};

	return (
		<button
			disabled={payment}
			type="button"
			className={`text-white bg-[#050708] hover:bg-[#050708]/80 focus:ring-4 focus:outline-none focus:ring-[#050708]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:hover:bg-[#050708]/40 dark:focus:ring-gray-600 mr-2 mb-2 ${
				payment && `cursor-not-allowed`
			}`}
			onClick={handlePayment}
		>
			{payment ? `Loading...` : `Check out with Apple Pay`}
		</button>
	);
};

const PaymentButton = () => {
	return (
		<button
			type="button"
			className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
		>
			Pay $200
		</button>
	);
};

export { ApplePayButton, PaymentButton };
