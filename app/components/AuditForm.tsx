      const text = await res.text();
      let data: any = {};
      try { data = JSON.parse(text); } catch { throw new Error(text.slice(0,300)); }
      if (!res.ok) throw new Error(data.error || text.slice(0,300));
