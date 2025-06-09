
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface LoginProps {
  onLogin: () => void;
}

const Login: React.FC<LoginProps> = ({ onLogin }) => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === 'testpassword') {
      // Play background music when login is successful
      const audio = new Audio('https://www.soundjay.com/misc/sounds/magic-chime-02.wav');
      audio.volume = 0.3;
      audio.loop = true;
      audio.play().catch(console.log); // Catch any autoplay restrictions
      
      onLogin();
    } else {
      setError('Incorrect password. Please try again.');
      setPassword('');
    }
  };

  return (
    <div className="min-h-screen romantic-bg flex items-center justify-center">
      <div className="fixed inset-0 bg-gradient-to-br from-blue-50/40 via-indigo-50/30 to-sky-50/40 pointer-events-none" />
      
      <div className="relative z-10 w-full max-w-md px-6">
        <div className="text-center mb-8">
          <h1 className="font-display text-4xl md:text-5xl font-bold romantic-title mb-4">
            Welcome
          </h1>
          <p className="font-script text-lg text-cornflower-blue/80">
            Please enter the password to continue
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <Input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
              className="w-full text-center text-lg py-3 border-cornflower-blue/30 focus:border-cornflower-blue focus:ring-cornflower-blue/20"
              autoFocus
            />
          </div>
          
          {error && (
            <p className="text-red-500 text-sm text-center">{error}</p>
          )}

          <Button
            type="submit"
            size="lg"
            className="w-full bg-gradient-to-r from-cornflower-blue via-blue-400 to-indigo-500 hover:from-cornflower-dark hover:via-blue-500 hover:to-indigo-600 text-white border-0 shadow-lg hover:shadow-xl transform hover:scale-102 transition-all duration-300 py-3 text-lg font-medium"
          >
            <span className="font-script">Enter</span>
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Login;
