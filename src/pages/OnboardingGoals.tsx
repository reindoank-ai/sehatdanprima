import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/Button';

const goals = [
  'Improve Physical Health',
  'Boost Mental Clarity',
  'Increase Productivity',
  'Learn a New Skill',
  'Strengthen Relationships',
  'Financial Well-being',
];

export default function OnboardingGoals() {
  const [selectedGoals, setSelectedGoals] = useState<string[]>([]);
  const navigate = useNavigate();

  const toggleGoal = (goal: string) => {
    setSelectedGoals((prev) =>
      prev.includes(goal) ? prev.filter((g) => g !== goal) : [...prev, goal]
    );
  };

  const handleContinue = () => {
    // Here you would typically save the goals to the user's profile
    // For now, we'll just navigate to the next step
    navigate('/onboarding-habits');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-4">
      <div className="w-full max-w-xl text-center">
        <h1 className="text-3xl font-bold mb-2">What are your main goals?</h1>
        <p className="text-gray-500 mb-8">Select up to 3 areas you want to focus on.</p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
          {goals.map((goal) => (
            <button
              key={goal}
              onClick={() => toggleGoal(goal)}
              className={`p-4 border rounded-lg text-center transition-colors ${
                selectedGoals.includes(goal)
                  ? 'bg-primary text-primary-foreground border-primary'
                  : 'bg-white hover:bg-gray-100'
              }`}>
              {goal}
            </button>
          ))}
        </div>
        <Button size="lg" onClick={handleContinue} disabled={selectedGoals.length === 0}>
          Continue
        </Button>
      </div>
    </div>
  );
}
