import { supabase } from '@/utils/anonClient';

export const dynamic = 'force-dynamic';

type Activity = {
  id: number;
  template_id: number | null;
  email: string | null;
  number_of_click: number | null;
  latest_timestamp: string | null;
};

function formatDate(value: string | null) {
  if (!value) return "—";
  const d = new Date(value);
  if (isNaN(d.getTime())) return value;
  return d.toLocaleString(undefined, {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

export default async function Instruments() {
  const { data } = await supabase
    .from("phishing_test")
    .select()
    .order("latest_timestamp", { ascending: false });

  const activities = (data ?? []) as Activity[];

  const totalClicks = activities.reduce(
    (sum, a) => sum + (a.number_of_click ?? 0),
    0,
  );
  const uniqueEmails = new Set(
    activities.map((a) => a.email).filter(Boolean),
  ).size;
  const templates = new Set(
    activities.map((a) => a.template_id).filter((t) => t != null),
  ).size;

  const stats = [
    { label: "People reached", value: uniqueEmails },
    { label: "Total clicks", value: totalClicks },
    { label: "Templates used", value: templates },
  ];

  return (
    <div className="max-w-5xl mx-auto xl:my-20 md:py-16 py-12 flex flex-col gap-8 px-5">
      <header className="flex flex-col gap-2">
        <span className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-blue-600">
          <span className="h-2 w-2 rounded-full bg-blue-500" />
          Security Awareness
        </span>
        <h1 className="text-3xl font-semibold tracking-tight text-gray-900">
          Phishing Simulation Dashboard
        </h1>
        <p className="text-sm text-gray-500">
          Click activity recorded across your awareness-training campaigns.
        </p>
      </header>

      <section className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        {stats.map((s) => (
          <div
            key={s.label}
            className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm"
          >
            <p className="text-sm text-gray-500">{s.label}</p>
            <p className="mt-1 text-3xl font-semibold text-gray-900">
              {s.value}
            </p>
          </div>
        ))}
      </section>

      <section className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-gray-200 bg-gray-50 text-xs uppercase tracking-wider text-gray-500">
                <th className="md:px-5 px-3 md:py-3 py-2 font-medium">Email</th>
                <th className="md:px-5 px-3 md:py-3 py-2 font-medium">Template</th>
                <th className="md:px-5 px-3 md:py-3 py-2 font-medium">Clicks</th>
                <th className="md:px-5 px-3 md:py-3 py-2 font-medium">Last activity</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {activities.length === 0 ? (
                <tr>
                  <td
                    colSpan={4}
                    className="px-5 py-10 text-center text-gray-400"
                  >
                    No activity recorded yet.
                  </td>
                </tr>
              ) : (
                activities.map((a) => (
                  <tr key={a.id} className="hover:bg-gray-50">
                    <td className="md:px-5 px-2 md:py-3 py-1 font-medium text-gray-900">
                      {a.email ?? "—"}
                    </td>
                    <td className="md:px-5 px-2 md:py-3 py-1  text-gray-500">
                      {a.template_id ?? "—"}
                    </td>
                    <td className="md:px-5 px-2 md:py-3 py-1 ">
                      <span className="inline-flex min-w-8 justify-center rounded-full bg-blue-50 px-2.5 py-0.5 text-sm font-medium text-blue-700">
                        {a.number_of_click ?? 0}
                      </span>
                    </td>
                    <td className="md:px-5 px-2 md:py-3 py-1  text-gray-500">
                      {formatDate(a.latest_timestamp)}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
