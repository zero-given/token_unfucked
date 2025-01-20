import { Component } from 'solid-js';

export const TrendBadge: Component<{ trend: 'up' | 'down' | 'stagnant'; type: string }> = (props) => (
  <div class={`px-2 py-1 rd-lg text-xs fw-600 ml-2 flex items-center gap-2 ${
    props.trend === 'up' ? 'bg-green-500/20 text-green-400 border border-green-500/30' :
    props.trend === 'down' ? 'bg-red-500/20 text-red-400 border border-red-500/30' :
    'bg-gray-500/20 text-gray-400 border border-gray-500/30'
  }`}>
    <span class="uppercase tracking-wide">{props.type}</span>
    <div class="flex items-center justify-center w-5 h-5">
      {props.trend === 'up' && (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5">
          <path d="M12 19V5m0 0l7 7M12 5L5 12"/>
        </svg>
      )}
      {props.trend === 'down' && (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5">
          <path d="M12 5v14m0 0l7-7m-7 7l-7-7"/>
        </svg>
      )}
      {props.trend === 'stagnant' && (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5">
          <path d="M5 12h14m0 0l-6-6m6 6l-6 6"/>
        </svg>
      )}
    </div>
  </div>
); 