declare global {
  interface Window {
    ym: (...args) => void;
  }
}

declare const ym: (...args) => void;
