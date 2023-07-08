const NormalOrApplePay = ({ paymentType }) => {
	const applePayStyle = `text-white bg-[#050708] hover:bg-[#050708]/80 focus:ring-4 focus:outline-none focus:ring-[#050708]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:hover:bg-[#050708]/40 dark:focus:ring-gray-600 mr-2 mb-2`;

	const normalPayStyle =
		'text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800';

	return (
		<button
			type="button"
			className={paymentType === 'Apple' ? applePayStyle : normalPayStyle}
		>
			{paymentType === 'Apple' ? 'Check out with Apple Pay' : 'Pay $200'}
		</button>
	);
};

export default NormalOrApplePay;
