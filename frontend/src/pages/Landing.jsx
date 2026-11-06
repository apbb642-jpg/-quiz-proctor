import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { GENERAL_THEME } from '../config/theme';

export default function Landing() {
  const [roomCode, setRoomCode] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleJoin = (e) => {
    e.preventDefault();
    const formatted = roomCode.trim().toUpperCase();
    if (formatted.length >= 2) {
      navigate(`/join/${formatted}`);
    } else {
      setError('Please enter a valid room access code');
    }
  };

  return (
    <div className={`min-h-screen ${GENERAL_THEME.bg} text-slate-100 flex flex-col justify-between p-6`}>
      <div className="flex justify-end">
        <button
          onClick={() => navigate('/admin/login')}
          className="border border-amber-500/50 text-amber-400 px-4 py-1.5 rounded text-sm font-semibold hover:bg-amber-500/10 transition-colors"
        >
          Admin Portal
        </button>
      </div>

      <div className="max-w-md w-full mx-auto text-center space-y-6">
        <div className="space-y-2">
          <div className="inline-block p-3 rounded-full bg-amber-500/10 border border-amber-500/30 mb-2">
            <svg className="w-8 h-8 text-amber-400 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </div>
          <h1 className="text-2xl font-extrabold tracking-tight text-amber-400 uppercase">
            ECE Assessment Portal
          </h1>
          <p className="text-xs text-slate-400 uppercase tracking-wider">
            Secure Exam Environment & Real-Time Proctoring
          </p>
        </div>

        <div className={`${GENERAL_THEME.cardBg} border-2 ${GENERAL_THEME.border} p-6 rounded-xl shadow-2xl space-y-4`}>
          <form onSubmit={handleJoin} className="space-y-4">
            <div>
              <label className="block text-xs uppercase font-bold text-amber-300 mb-2 text-left">
                Room Access Code
              </label>
              <input
                type="text"
                placeholder="ENTER ACCESS CODE"
                value={roomCode}
                onChange={(e) => {
                  setRoomCode(e.target.value);
                  setError('');
                }}
                className={`w-full text-center tracking-widest text-lg ${GENERAL_THEME.inputBg} p-3 rounded outline-none uppercase font-mono font-bold border-2`}
              />
            </div>
            {error && <p className="text-red-400 text-xs font-semibold">{error}</p>}
            <button
              type="submit"
              className={`w-full ${GENERAL_THEME.buttonBg} py-3 rounded uppercase tracking-wider transition-all`}
            >
              Proceed to Registration
            </button>
          </form>

          <div className="pt-4 border-t border-slate-700/60 text-left text-xs space-y-2">
            <p className="font-bold text-amber-400 uppercase">Available Exam Rooms:</p>
            <div className="flex items-center justify-between p-2 rounded bg-slate-900/60 border border-purple-500/30">
              <span className="font-semibold text-purple-300">Room 1 (Core Electronics)</span>
              <span className="font-mono bg-orange-500/20 text-orange-400 px-2 py-0.5 rounded border border-orange-500/40 font-bold">Orange & Lavender</span>
            </div>
            <div className="flex items-center justify-between p-2 rounded bg-slate-900/60 border border-rose-900/60">
              <span className="font-semibold text-zinc-300">Room 2 (Communication Systems)</span>
              <span className="font-mono bg-rose-950 text-rose-400 px-2 py-0.5 rounded border border-rose-800 font-bold">Black & Maroon</span>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center text-xs text-slate-500 uppercase tracking-widest">
        Proctoring System Active • Blue & Gold Portal Theme
      </div>
    </div>
  );
}
