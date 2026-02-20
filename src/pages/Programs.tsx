import Layout from '../components/Layout';
import { useAppContext } from '../hooks/useAppContext';

export default function Programs() {
  const { user } = useAppContext();

  return (
    <Layout>
      <div className="flex flex-col items-center justify-center text-center">
        <h1 className="text-3xl font-bold mb-4">Guided Programs</h1>
        <p className="text-gray-500 mb-8">Unlock your potential with our expert-led programs.</p>
        {!user?.isPremium && (
          <div className="p-4 bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700">
            <p>This is a premium feature. Please upgrade to access our programs.</p>
          </div>
        )}
        {/* Placeholder for programs list */}
      </div>
    </Layout>
  );
}
