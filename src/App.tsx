import { useState } from 'react';
import { LoginForm } from './components/login-form';
import { SocialLogin } from './components/social-login';
import { Check } from 'lucide-react';

function App() {
  const [loginSuccess, setLoginSuccess] = useState(false);

  const handleLoginSuccess = () => {
    setLoginSuccess(true);
    
    // Reset after showing success message
    setTimeout(() => {
      setLoginSuccess(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 to-secondary-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="flex justify-center">
          <div className="h-12 w-12 rounded-full bg-primary-500 flex items-center justify-center">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              className="h-8 w-8 text-white"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
          </div>
        </div>
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Sign in to your account
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          Access your dashboard and manage your projects
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          {loginSuccess ? (
            <div className="bg-success-50 border border-success-200 rounded-md p-4 mb-6">
              <div className="flex">
                <div className="flex-shrink-0">
                  <Check className="h-5 w-5 text-success-400" />
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium text-success-800">
                    Successfully logged in!
                  </p>
                </div>
              </div>
            </div>
          ) : null}
          
          <LoginForm onSuccess={handleLoginSuccess} />
          
          <div className="mt-6">
            <SocialLogin />
          </div>
        </div>
      </div>
      
      <div className="mt-8 text-center text-sm text-gray-600">
        <p>
          By signing in, you agree to our{' '}
          <a href="#" className="font-medium text-primary-600 hover:text-primary-500">
            Terms of Service
          </a>{' '}
          and{' '}
          <a href="#" className="font-medium text-primary-600 hover:text-primary-500">
            Privacy Policy
          </a>
        </p>
      </div>
    </div>
  );
}

export default App;
