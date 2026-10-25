import {
  ShieldCheck,
  ShieldAlert,
  AlertTriangle,
  Clock,
  Gavel,
  Link2,
  AtSign,
  Users,
  Fish,
  Target,
  Crown,
  Mail,
} from "lucide-react";

const warningSigns = [
  {
    icon: Clock,
    title: "Fear generation",
    text: "Creating a sense of urgency can push people to act hastily. Stay calm and analyze the request carefully.",
  },
  {
    icon: Gavel,
    title: "Accusation",
    text: "Designed to create fear and make the recipient justify themselves. Always assess the situation before reacting.",
  },
  {
    icon: Link2,
    title: "Fake link",
    text: "Links may redirect to fake login pages or download malware. Always hover over links to check the actual URL.",
  },
  {
    icon: AtSign,
    title: "Fake sender / Domain spoofing",
    text: 'Hackers can use a technique called "domain spoofing" to fake any real or fictitious email address. If you are suspicious, try to contact the sender via another channel to verify their identity.',
  },
];

const concepts = [
  {
    icon: Users,
    title: "What is Social Engineering?",
    text: "Social engineering is about manipulating or deceiving people to gain control over their systems. Attackers contact victims via email, social media, phone, or even in person to gain illegal access to sensitive data.",
  },
  {
    icon: Fish,
    title: "What is Phishing?",
    text: "Phishing involves attempting to steal sensitive information by pretending to be a trusted entity. Mass emails are sent, often bypassing spam filters, to deceive recipients into giving up their credentials.",
  },
  {
    icon: Target,
    title: "What is Spear Phishing?",
    text: "A targeted phishing attack against a specific organization, using personalized details to increase credibility. This tactic enhances the effectiveness of scams, making them more dangerous.",
  },
  {
    icon: Crown,
    title: "What is CEO Fraud?",
    text: "In CEO fraud, scammers impersonate executives to pressure employees into taking immediate action, such as transferring money or sharing sensitive data.",
  },
];

const CyberSecurityInfo = () => {
  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 px-4 py-10 sm:py-16">
      <div className="mx-auto max-w-4xl">
        {/* Hero */}
        <div className="overflow-hidden rounded-2xl bg-white shadow-xl ring-1 ring-slate-200">
          <div className="bg-gradient-to-r from-red-600 to-orange-500 px-6 py-10 text-center sm:px-10">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-white/20 ring-4 ring-white/30">
              <ShieldAlert className="h-9 w-9 text-white" />
            </div>
            <h1 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
              You&apos;re lucky! This could have been a phishing email&hellip;
            </h1>
          </div>

          <div className="space-y-5 px-6 py-8 sm:px-10">
            <p className="text-base leading-relaxed text-slate-600">
              The email you just clicked on is part of an authorised cyber-attack
              simulation of{" "}
              <strong className="font-semibold text-slate-900">
                RILA GLOBAL CONSULTING
              </strong>
              . The aim is to show you what you need to watch out for in order to
              identify and prevent these kinds of attacks.
            </p>

            <div className="flex items-start gap-3 rounded-xl border border-green-200 bg-green-50 p-4">
              <ShieldCheck className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-600" />
              <p className="text-sm font-medium text-green-800">
                There is no danger to you, your data or your device—the
                simulation is for training purposes only.
              </p>
            </div>
          </div>
        </div>

        {/* Warning signs */}
        <section className="mt-10">
          <div className="mb-6 flex items-center justify-center gap-2 text-center">
            <AlertTriangle className="h-6 w-6 text-red-600" />
            <h2 className="text-lg md:text-xl font-bold text-slate-900 sm:text-2xl">
              How to recognize phishing emails
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {warningSigns.map(({ icon: Icon, title, text }) => (
              <div
                key={title}
                className="rounded-xl bg-white p-5 shadow-sm ring-1 ring-slate-200 transition hover:shadow-md hover:ring-red-200"
              >
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-red-50">
                  <Icon className="h-5 w-5 text-red-600" />
                </div>
                <h3 className="font-semibold text-slate-900">{title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-slate-600">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Cyber security 101 */}
        <section className="mt-10">
          <div className="mb-6 flex items-center justify-center gap-2 text-center">
            <ShieldCheck className="h-6 w-6 text-blue-700" />
            <h2 className="text-xl font-bold text-slate-900 sm:text-2xl">
              Brief 101 on Cyber Security
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {concepts.map(({ icon: Icon, title, text }) => (
              <div
                key={title}
                className="rounded-xl bg-white p-5 shadow-sm ring-1 ring-slate-200 transition hover:shadow-md hover:ring-blue-200"
              >
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50">
                  <Icon className="h-5 w-5 text-blue-700" />
                </div>
                <h3 className="font-semibold text-slate-900">{title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-slate-600">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Contact CTA */}
        <div className="mt-10 flex flex-col items-center gap-3 rounded-2xl bg-slate-900 px-6 py-8 text-center sm:flex-row sm:justify-center sm:gap-4">
          <Mail className="h-6 w-6 flex-shrink-0 text-slate-300" />
          <p className="text-sm text-slate-200 sm:text-base">
            Have a question or suspect an email is phishing? Email{" "}
            <a
              href="mailto:duyen@rilaglobal.com"
              className="font-semibold text-white underline decoration-slate-500 underline-offset-4 transition hover:decoration-white"
            >
              duyen@rilaglobal.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CyberSecurityInfo;
