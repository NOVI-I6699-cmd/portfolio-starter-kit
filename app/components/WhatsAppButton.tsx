export default function WhatsAppButton() {
  const number = "233243876362";
  const message = "Hi Floran, I visited novi-llc.com and want to talk about my Shopify store growth.";
  return (
    <a
      href={`https://wa.me/${number}?text=${encodeURIComponent(message)}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-[100] bg-[#0A2A7A] text-white w-[56px] h-[56px] rounded-full flex items-center justify-center shadow-xl hover:bg-black transition-all"
      aria-label="Chat on WhatsApp"
    >
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
        <path d="M19.05 4.94A9.82 9.82 0 0 0 12.04 2C6.51 2 2.02 6.48 2.02 12c0 1.76.46 3.48 1.34 5L2 22l5.16-1.35a9.83 9.83 0 0 0 4.88 1.31h.01c5.53 0 10.01-4.48 10.01-10 0-2.67-1.04-5.18-2.92-7.06l-.13-.06zM12.04 20.15a8.1 8.1 0 0 1-4.13-1.13l-.3-.18-3.06.8.82-2.98-.2-.31a8.17 8.17 0 0 1-1.26-4.39c0-4.51 3.67-8.18 8.19-8.18 2.19 0 4.25.85 5.79 2.4a8.13 8.13 0 0 1 2.39 5.77c0 4.52-3.68 8.2-8.2 8.2zm4.49-6.12c-.25-.12-1.47-.72-1.7-.81-.23-.08-.4-.12-.56.13-.17.25-.65.81-.79.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-2-1.24-.74-.66-1.24-1.47-1.38-1.72-.15-.25-.02-.39.11-.51.11-.11.25-.29.37-.43.12-.15.17-.25.25-.42.08-.17.04-.31-.02-.43-.06-.12-.56-1.35-.77-1.85-.2-.48-.4-.42-.56-.43h-.48c-.17 0-.43.06-.66.31-.23.25-.87.85-.87 2.08s.89 2.41 1.01 2.58c.12.17 1.75 2.67 4.24 3.75.59.26 1.05.41 1.41.53.59.19 1.13.16 1.56.1.47-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.06-.11-.23-.17-.48-.29z"/>
      </svg>
    </a>
  )
}
