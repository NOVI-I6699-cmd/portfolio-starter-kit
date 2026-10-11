const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setLoading(true);
  try {
    await fetch("/api/subscribe", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ store, revenue, email }),
    });
  } catch (err) {
    console.log(err);
  }
  // Force success + backup lead to YOUR WhatsApp so you don't lose it
  const text = `NEW LEAD novi-llc.com%0AStore: ${store}%0ARevenue: ${revenue}%0AEmail: ${email}`;
  window.location.href = `https://wa.me/233243876362?text=${text}`;
  setLoading(false);
};
