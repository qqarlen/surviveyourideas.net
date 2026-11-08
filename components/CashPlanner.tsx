"use client";

import { useMemo, useState } from "react";
import {
  parseFlexibleNumber,
  formatCash,
  formatDuration,
  affordSchedule,
  purchaseOrder,
  daysToFullCollection,
  FULL_COLLECTION_COST,
  dailyCash,
  PlaySchedule,
} from "@/lib/calculator";

export default function CashPlanner() {
  const [matches, setMatches] = useState("6");
  const [minutes, setMinutes] = useState("10");
  const [perMin, setPerMin] = useState("1500");
  const [current, setCurrent] = useState("0");

  const schedule: PlaySchedule | null = useMemo(() => {
    const m = parseFlexibleNumber(matches);
    const mi = parseFlexibleNumber(minutes);
    const pm = parseFlexibleNumber(perMin);
    const cur = parseFlexibleNumber(current) ?? 0;
    if (m === null || mi === null || pm === null || cur === null) return null;
    if (m <= 0 || mi <= 0 || pm < 0 || cur < 0) return null;
    return { matchesPerDay: m, minutesPerMatch: mi, cashPerMinute: pm };
  }, [matches, minutes, perMin]);

  const currentCash = useMemo(() => parseFlexibleNumber(current) ?? 0, [current]);

  const rows = useMemo(
    () => (schedule ? affordSchedule(schedule, currentCash) : []),
    [schedule, currentCash]
  );
  const order = useMemo(() => purchaseOrder(currentCash), [currentCash]);
  const daily = schedule ? dailyCash(schedule) : 0;
  const fullDays = schedule ? daysToFullCollection(schedule, currentCash) : Infinity;

  return (
    <div className="space-y-6">
      {/* Inputs */}
      <div className="rounded-2xl border-2 border-emerald-200 bg-white p-5">
        <h3 className="font-extrabold text-slate-900 mb-3">Your Play Schedule</h3>
        <div className="grid md:grid-cols-2 gap-4">
          <label className="block">
            <span className="text-sm font-bold text-slate-600">Matches per day</span>
            <input
              value={matches}
              onChange={(e) => setMatches(e.target.value)}
              inputMode="decimal"
              className="mt-1 w-full rounded-lg border-2 border-slate-200 px-3 py-2 font-bold focus:border-emerald-400 outline-none"
              placeholder="e.g. 6"
            />
          </label>
          <label className="block">
            <span className="text-sm font-bold text-slate-600">Minutes per match</span>
            <input
              value={minutes}
              onChange={(e) => setMinutes(e.target.value)}
              inputMode="decimal"
              className="mt-1 w-full rounded-lg border-2 border-slate-200 px-3 py-2 font-bold focus:border-emerald-400 outline-none"
              placeholder="e.g. 10"
            />
          </label>
          <label className="block">
            <span className="text-sm font-bold text-slate-600">
              Cash per minute (check your in-game earnings)
            </span>
            <input
              value={perMin}
              onChange={(e) => setPerMin(e.target.value)}
              inputMode="decimal"
              className="mt-1 w-full rounded-lg border-2 border-slate-200 px-3 py-2 font-bold focus:border-emerald-400 outline-none"
              placeholder="e.g. 1500 or 1.5K"
            />
          </label>
          <label className="block">
            <span className="text-sm font-bold text-slate-600">Cash you already have</span>
            <input
              value={current}
              onChange={(e) => setCurrent(e.target.value)}
              inputMode="decimal"
              className="mt-1 w-full rounded-lg border-2 border-slate-200 px-3 py-2 font-bold focus:border-emerald-400 outline-none"
              placeholder="e.g. 250K"
            />
          </label>
        </div>
        <p className="mt-3 text-xs text-slate-400">
          Cash rates are player-observed — the game shows your own earnings at
          match end, so use your average. Accepts 1500, 1.5K, 250K formats.
        </p>
      </div>

      {/* Results */}
      {schedule && (
        <>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <div className="data-card">
              <div className="text-xs font-bold text-slate-500">Daily Cash</div>
              <div className="text-xl font-extrabold text-brand-700">{formatCash(daily)}</div>
            </div>
            <div className="data-card">
              <div className="text-xs font-bold text-slate-500">First unlock</div>
              <div className="text-xl font-extrabold text-slate-900">
                {rows.length > 0 && Number.isFinite(rows[0].days) ? formatDuration(rows[0].days * 1440) : "—"}
              </div>
            </div>
            <div className="data-card">
              <div className="text-xs font-bold text-slate-500">Full set (2.55M)</div>
              <div className="text-xl font-extrabold text-slate-900">
                {Number.isFinite(fullDays) ? formatDuration(fullDays * 1440) : "—"}
              </div>
            </div>
            <div className="data-card">
              <div className="text-xs font-bold text-slate-500">Progress</div>
              <div className="text-xl font-extrabold text-emerald-600">
                {Math.min(100, Math.round((currentCash / FULL_COLLECTION_COST) * 100))}%
              </div>
            </div>
          </div>

          {/* Per-word table */}
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr>
                  <th className="bg-emerald-100 border border-emerald-200 px-3 py-2 text-left font-bold">Meta Word</th>
                  <th className="bg-emerald-100 border border-emerald-200 px-3 py-2 text-left font-bold">Price</th>
                  <th className="bg-emerald-100 border border-emerald-200 px-3 py-2 text-left font-bold">Time away</th>
                  <th className="bg-emerald-100 border border-emerald-200 px-3 py-2 text-left font-bold">Verdict</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((r) => (
                  <tr key={r.word}>
                    <td className="border border-slate-200 px-3 py-2 font-mono font-bold">{r.word}</td>
                    <td className="border border-slate-200 px-3 py-2">{formatCash(r.price)}</td>
                    <td className="border border-slate-200 px-3 py-2 font-bold">
                      {currentCash >= r.price ? "Now" : formatDuration(r.days * 1440)}
                    </td>
                    <td className="border border-slate-200 px-3 py-2 text-slate-600">{r.verdict}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Purchase order */}
          <div className="rounded-2xl border-2 border-dashed border-emerald-400 bg-emerald-50 p-5">
            <h3 className="font-extrabold text-slate-900 mb-2">📋 Recommended Purchase Order</h3>
            <ol className="list-decimal pl-6 space-y-1 text-sm text-slate-700 font-semibold">
              {order.map((o) => (
                <li key={o.word}>
                  <span className="font-mono font-extrabold">{o.word}</span>{" "}
                  ({formatCash(o.price)}) — {o.when}
                </li>
              ))}
            </ol>
          </div>
        </>
      )}
    </div>
  );
}
