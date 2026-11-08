"use client";

import { useMemo, useState } from "react";
import { parseFlexibleNumber, formatCash, planSpins } from "@/lib/calculator";

export default function SpinPlanner() {
  const [lucky, setLucky] = useState("5");
  const [cash, setCash] = useState("100000");
  const [wanted, setWanted] = useState("10");

  const result = useMemo(() => {
    const l = parseFlexibleNumber(lucky);
    const c = parseFlexibleNumber(cash);
    const w = parseFlexibleNumber(wanted);
    if (l === null || c === null || w === null || l < 0 || c < 0 || w <= 0) return null;
    return planSpins({ luckySpins: l, cash: c, spinsWanted: Math.floor(w) });
  }, [lucky, cash, wanted]);

  return (
    <div className="space-y-6">
      {/* Inputs */}
      <div className="rounded-2xl border-2 border-emerald-200 bg-white p-5">
        <h3 className="font-extrabold text-slate-900 mb-3">Your Spin Budget</h3>
        <div className="grid md:grid-cols-3 gap-4">
          <label className="block">
            <span className="text-sm font-bold text-slate-600">Lucky Spins (from codes)</span>
            <input
              value={lucky}
              onChange={(e) => setLucky(e.target.value)}
              inputMode="decimal"
              className="mt-1 w-full rounded-lg border-2 border-slate-200 px-3 py-2 font-bold focus:border-emerald-400 outline-none"
              placeholder="e.g. 5"
            />
          </label>
          <label className="block">
            <span className="text-sm font-bold text-slate-600">Cash in the bank</span>
            <input
              value={cash}
              onChange={(e) => setCash(e.target.value)}
              inputMode="decimal"
              className="mt-1 w-full rounded-lg border-2 border-slate-200 px-3 py-2 font-bold focus:border-emerald-400 outline-none"
              placeholder="e.g. 100K"
            />
          </label>
          <label className="block">
            <span className="text-sm font-bold text-slate-600">Spins you want</span>
            <input
              value={wanted}
              onChange={(e) => setWanted(e.target.value)}
              inputMode="decimal"
              className="mt-1 w-full rounded-lg border-2 border-slate-200 px-3 py-2 font-bold focus:border-emerald-400 outline-none"
              placeholder="e.g. 10"
            />
          </label>
        </div>
        <p className="mt-3 text-xs text-slate-400">
          Regular spins cost $10,000 Cash each (community-reported). Lucky
          Spins come from codes — THANKYOU grants 5.
        </p>
      </div>

      {/* Results */}
      {result && (
        <>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <div className="data-card">
              <div className="text-xs font-bold text-slate-500">Lucky coverage</div>
              <div className="text-xl font-extrabold text-emerald-600">{result.luckyCoverage}</div>
            </div>
            <div className="data-card">
              <div className="text-xs font-bold text-slate-500">Cash spins affordable</div>
              <div className="text-xl font-extrabold text-slate-900">{result.cashSpinsAffordable}</div>
            </div>
            <div className="data-card">
              <div className="text-xs font-bold text-slate-500">Cash left after plan</div>
              <div className="text-xl font-extrabold text-slate-900">{formatCash(result.cashLeftAfter)}</div>
            </div>
            <div className="data-card">
              <div className="text-xs font-bold text-slate-500">Lucky spins' Cash value</div>
              <div className="text-xl font-extrabold text-brand-700">{formatCash(result.cashValueOfLucky)}</div>
            </div>
          </div>

          <div className="rounded-2xl border-2 border-dashed border-emerald-400 bg-emerald-50 p-5">
            <h3 className="font-extrabold text-slate-900 mb-1">🎯 Verdict</h3>
            <p className="text-slate-700 font-semibold leading-relaxed">{result.verdict}</p>
          </div>
        </>
      )}
    </div>
  );
}
