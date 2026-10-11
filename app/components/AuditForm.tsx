<select
  value={revenue}
  onChange={(e) => setRevenue(e.target.value)}
  required
  className="w-full border border-gray-200 rounded-lg px-4 py-3 bg-white text-sm"
>
  <option value="" disabled hidden>Monthly revenue</option>
  <option value="$5k/mo">$5k/mo — Starting</option>
  <option value="$10k - $20k/mo">$10k - $20k/mo — Growing</option>
  <option value="$20k - $100k/mo">$20k - $100k/mo — Scaling</option>
  <option value="$100k+/mo">$100k+/mo — 7-figure</option>
</select>
