import './App.css';
import { PaymentButton, ApplePayButton } from './components/ComponentOverProps';
import NormalOrApplePay from './components/ReusableDynamicComponent';

function App() {
	return (
		<div className="m-10  text-center">
			<div className="mb-3">
				<p className="text-3xl">Component Over Props</p>
			</div>
			<div className="mb-2">
				<PaymentButton />
			</div>

			<div>
				<ApplePayButton />
			</div>
			<br />
			<div>
				<p className="text-3xl mb-3">Reusable Dynamic Component</p>
				<NormalOrApplePay paymentType="Apple" />
				<NormalOrApplePay paymentType="Normal" />
			</div>
		</div>
	);
}

export default App;
