import AuditForm from "./components/AuditForm";

export default function Page(){
return (
<main className="min-h-screen bg-white text-slate-900">
<header className="border-b">
<div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center text-sm">
<div className="font-bold">NOVI LLC — Shopify Email & SEO Agency</div>
<div className="opacity-60">Accra, Ghana - Remote Worldwide - EST Hours</div>
</div>
</header>

<section className="max-w-6xl mx-auto px-4 py-10 grid md:grid-cols-2 gap-8 items-start">
<div>
<div className="inline-block text-xs font-semibold tracking-widest bg-blue-50 text-[#0A2A7A] px-3 py-1 rounded-full">INBOX RADAR • FOR ALL SHOPIFY STORES</div>
<h1 className="mt-4 text-4xl md:text-5xl font-extrabold leading-tight text-[#0A2A7A]">Shopify Stores Leak 23% of Revenue in the Inbox. We Find It In 24h.</h1>
<p className="mt-4 opacity-70">For $1k/mo to $100k+/mo. Deliverability + Klaviyo + SEO. $500 diagnostic free this week.</p>

<div className="mt-6 grid grid-cols-3 gap-2 text-xs">
<div className="border rounded-lg p-3 text-center"><div className="font-bold text-[#0A2A7A]">$1k/mo</div><div className="opacity-60">$230 lost</div></div>
<div className="border rounded-lg p-3 text-center"><div className="font-bold text-[#0A2A7A]">$5k/mo</div><div className="opacity-60">$1,150 lost</div></div>
<div className="border rounded-lg p-3 text-center"><div className="font-bold text-[#0A2A7A]">$20k/mo</div><div className="opacity-60">$4,600 lost</div></div>
</div>

<div className="mt-6 text-sm opacity-70">📍 Accra, Ghana → US Brands | Fix from $750 | Retainer $1,500/mo | EST Hours</div>
</div>

<AuditForm />
</section>

<footer className="border-t py-6 text-center text-xs opacity-50">© Novi LLC — Accra, Ghana - Remote Worldwide - EST Hours — novi-llc.com</footer>
</main>
)
}
