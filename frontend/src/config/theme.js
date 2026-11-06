// Centralized UI Color Theme Configuration

export const GENERAL_THEME = {
  name: 'General (Blue & Gold)',
  bg: 'bg-slate-900',
  cardBg: 'bg-slate-800',
  text: 'text-amber-400',
  textLight: 'text-slate-200',
  subText: 'text-slate-400',
  border: 'border-amber-500',
  inputBg: 'bg-slate-950 text-amber-300 placeholder-slate-500 border-amber-500',
  buttonBg: 'bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold shadow-lg shadow-amber-500/20',
  headerBg: 'bg-slate-950 border-b-2 border-amber-500',
  badge: 'bg-amber-500/20 text-amber-300 border border-amber-500/40',
  accentColor: '#f59e0b',
  primaryColor: '#1e3a8a'
};

export const ROOM_THEMES = {
  // Room 1 (R1 / Core Electronics / ECE-R1) -> Orange & Lavender
  r1: {
    name: 'Room 1 (Orange & Lavender)',
    bg: 'bg-purple-950',
    cardBg: 'bg-purple-900/60',
    text: 'text-orange-400',
    textLight: 'text-purple-100',
    subText: 'text-purple-300',
    border: 'border-orange-500',
    inputBg: 'bg-purple-950 text-orange-300 placeholder-purple-400 border-orange-500',
    buttonBg: 'bg-orange-500 hover:bg-orange-600 text-purple-950 font-bold shadow-lg shadow-orange-500/30',
    headerBg: 'bg-purple-950 border-b-2 border-orange-500',
    badge: 'bg-purple-800/80 text-purple-200 border border-purple-400',
    optionDefault: 'border-purple-400/50 bg-purple-900/40 text-purple-100 hover:bg-orange-500/20 hover:border-orange-400',
    optionSelected: 'border-orange-500 bg-orange-500 text-purple-950 font-bold',
    accentColor: '#f97316',
    primaryColor: '#a855f7'
  },
  // Room 2 (R2 / Communication Systems / ECE-R2) -> Black & Maroon
  r2: {
    name: 'Room 2 (Black & Maroon)',
    bg: 'bg-zinc-950',
    cardBg: 'bg-zinc-900',
    text: 'text-rose-500',
    textLight: 'text-zinc-200',
    subText: 'text-zinc-400',
    border: 'border-rose-900',
    inputBg: 'bg-black text-rose-400 placeholder-zinc-600 border-rose-900',
    buttonBg: 'bg-rose-900 hover:bg-rose-800 text-white font-bold border border-rose-700 shadow-lg shadow-rose-950/50',
    headerBg: 'bg-black border-b-2 border-rose-900',
    badge: 'bg-rose-950 text-rose-300 border border-rose-800',
    optionDefault: 'border-rose-950 bg-zinc-900/80 text-zinc-200 hover:bg-rose-950/40 hover:border-rose-800',
    optionSelected: 'border-rose-600 bg-rose-900 text-white font-bold',
    accentColor: '#9f1239',
    primaryColor: '#09090b'
  }
};

/**
 * Get color theme based on room code or room name
 */
export function getRoomTheme(roomCodeOrName) {
  if (!roomCodeOrName) return GENERAL_THEME;
  const str = String(roomCodeOrName).toUpperCase();

  if (str.includes('R1') || str.includes('ROOM 1') || str.includes('ROOM_1') || str.includes('CORE')) {
    return ROOM_THEMES.r1;
  }
  if (str.includes('R2') || str.includes('ROOM 2') || str.includes('ROOM_2') || str.includes('COMMUNICATION')) {
    return ROOM_THEMES.r2;
  }
  return GENERAL_THEME;
}
