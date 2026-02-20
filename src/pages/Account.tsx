import Layout from '../components/Layout';
import { useAppContext } from '../hooks/useAppContext';

export default function Account() {
  const { user } = useAppContext();

  return (
    <Layout>
      <div className="max-w-md mx-auto">
        <h1 className="text-2xl font-bold mb-4">Account Information</h1>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <p className="mt-1 text-lg">{user?.email}</p>
          </div>
          
        </div>
      </div>
    </Layout>
  );
}
