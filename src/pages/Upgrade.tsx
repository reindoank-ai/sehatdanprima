import { Button } from '../components/Button';

const CHECKOUT_URL = 'https://sehatprima.lemonsqueezy.com/checkout';

export default function Upgrade() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-4">
      <div className="w-full max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Upgrade to Premium</h1>
          <p className="text-lg text-gray-500">Unlock all features and take your habit tracking to the next level.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="border rounded-lg p-8 space-y-6">
            <h2 className="text-2xl font-bold">Free</h2>
            <p className="text-4xl font-bold">$0<span className="text-lg font-normal">/month</span></p>
            <ul className="space-y-2 text-gray-600">
              <li>✓ Track up to 3 habits</li>
              <li>✓ Basic stats</li>
              <li>✗ Guided programs</li>
              <li>✗ Advanced statistics</li>
            </ul>
            <Button variant="outline" className="w-full" disabled>Current Plan</Button>
          </div>
          <div className="border rounded-lg p-8 space-y-6 bg-white shadow-lg">
            <h2 className="text-2xl font-bold">Premium</h2>
            <p className="text-4xl font-bold">$5<span className="text-lg font-normal">/month</span></p>
            <ul className="space-y-2 text-gray-600">
              <li>✓ Track unlimited habits</li>
              <li>✓ Basic stats</li>
              <li>✓ Guided programs</li>
              <li>✓ Advanced statistics</li>
            </ul>
            <a href={`${CHECKOUT_URL}?redirect_url=${window.location.origin}/success`} className="w-full">
              <Button className="w-full">Upgrade Now</Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
