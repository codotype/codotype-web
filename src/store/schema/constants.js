export const TEXT_WORKFLOW_STEP = {
  order: null,
  icon: 'fa-paragraph',
  label: 'Type',
  type: 'TEXT',
  value: 'Hello, AstroKey!'
}

export const MACRO_WORKFLOW_STEP = {
  order: null,
  icon: 'fa-play-circle',
  label: 'Run Macro',
  type: 'MACRO',
  value: [
    { id: '1', key: 'SHIFT', position: 1 },
    { id: '2', key: 'a', position: 3 },
    { id: '3', key: 'SHIFT', position: 2 }
  ]
}

export const DELAY_WORKFLOW_STEP = {
  order: null,
  icon: 'fa-clock',
  label: 'Delay',
  type: 'DELAY',
  value: 2
}

export const KEY_WORKFLOW_STEP = {
  order: null,
  icon: 'fa-cube',
  type: 'KEY',
  value: 2
}

// Key Position Constants
export const KEY_DN_POSITION = 1
export const KEY_UP_POSITION = 2
export const KEY_PR_POSITION = 3
