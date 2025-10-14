import React from "react";
import {
  Database,
  FileText,
  Zap,
  Clock,
  Users,
  Shield,
  CheckCircle,
  XCircle,
} from "lucide-react";

export default function SessionJWTComparison() {
  const features = [
    {
      feature: "Server Storage Required",
      session: { value: true, detail: "Redis/Database needed" },
      jwt: { value: false, detail: "Stateless, no storage" },
      icon: Database,
    },
    {
      feature: "Instant Logout",
      session: { value: true, detail: "Delete session → immediate effect" },
      jwt: { value: false, detail: "Must wait for token expiration" },
      icon: Zap,
    },

    {
      feature: "Per-Device Tracking",
      session: { value: true, detail: "Track each device separately" },
      jwt: { value: false, detail: "No device-level control" },
      icon: Users,
    },
    {
      feature: "Horizontal Scaling",
      session: { value: false, detail: "Shared Redis/DB required" },
      jwt: { value: true, detail: "Works across distributed systems" },
      icon: Users,
    },
    {
      feature: "Security Control",
      session: { value: true, detail: "Granular control (IP, device, etc.)" },
      jwt: { value: false, detail: "Limited once issued" },
      icon: Shield,
    },
    {
      feature: "Performance",
      session: { value: false, detail: "DB lookup on each request" },
      jwt: { value: true, detail: "Just signature verification" },
      icon: Zap,
    },
    {
      feature: "Session Limits",
      session: { value: true, detail: "Enforce max sessions easily" },
      jwt: { value: false, detail: "Hard to enforce limits" },
      icon: Clock,
    },
  ];

  return (
    <div className="w-full bg-gradient-to-br from-slate-50 to-zinc-50 dark:from-slate-900 dark:to-zinc-900 p-8 rounded-xl border border-zinc-200 dark:border-zinc-700">
      <div className="max-w-6xl mx-auto">
        <h3 className="text-2xl font-semibold text-center mb-8 text-zinc-900 dark:text-zinc-100">
          Sessions vs JWT: Feature Comparison
        </h3>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b-2 border-zinc-300 dark:border-zinc-600">
                <th className="text-left p-4 text-zinc-700 dark:text-zinc-300 font-semibold">
                  Feature
                </th>
                <th className="text-center p-4 text-blue-700 dark:text-blue-300 font-semibold">
                  <div className="flex items-center justify-center gap-2">
                    <Database className="w-5 h-5" />
                    <span>Sessions</span>
                  </div>
                </th>
                <th className="text-center p-4 text-purple-700 dark:text-purple-300 font-semibold">
                  <div className="flex items-center justify-center gap-2">
                    <FileText className="w-5 h-5" />
                    <span>JWT</span>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              {features.map((item, index) => {
                const Icon = item.icon;
                return (
                  <tr
                    key={index}
                    className="border-b border-zinc-200 dark:border-zinc-700 hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors"
                  >
                    <td className="p-4">
                      <div className="flex items-center gap-3">
                        <Icon className="w-5 h-5 text-zinc-500" />
                        <span className="font-medium text-zinc-900 dark:text-zinc-100">
                          {item.feature}
                        </span>
                      </div>
                    </td>
                    <td className="p-4">
                      <div className="flex flex-col items-center gap-2">
                        {item.session.value ? (
                          <CheckCircle className="w-6 h-6 text-green-600 dark:text-green-400" />
                        ) : (
                          <XCircle className="w-6 h-6 text-red-600 dark:text-red-400" />
                        )}
                        <span className="text-xs text-center text-zinc-600 dark:text-zinc-400">
                          {item.session.detail}
                        </span>
                      </div>
                    </td>
                    <td className="p-4">
                      <div className="flex flex-col items-center gap-2">
                        {item.jwt.value ? (
                          <CheckCircle className="w-6 h-6 text-green-600 dark:text-green-400" />
                        ) : (
                          <XCircle className="w-6 h-6 text-red-600 dark:text-red-400" />
                        )}
                        <span className="text-xs text-center text-zinc-600 dark:text-zinc-400">
                          {item.jwt.detail}
                        </span>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* Use Case Recommendations */}
        <div className="grid md:grid-cols-2 gap-6 mt-8">
          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/30 dark:to-cyan-950/30 rounded-xl p-4 md:p-6 border-2 border-blue-500">
            <div className="flex items-center gap-3 mb-4">
              <Database className="w-8 h-8 text-blue-600 dark:text-blue-400" />
              <h4 className="text-lg font-semibold text-blue-900 dark:text-blue-100">
                Choose Sessions For:
              </h4>
            </div>
            <ul className="space-y-2 text-sm text-blue-800 dark:text-blue-200">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span>Traditional web apps with server-side rendering</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span>When you need instant logout capability</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span>Per-device session management required</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span>Banking, healthcare, or high-security apps</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span>When enforcing session limits (e.g., max 5 devices)</span>
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30 rounded-xl p-4 md:p-6 border-2 border-purple-500">
            <div className="flex items-center gap-3 mb-4">
              <FileText className="w-8 h-8 text-purple-600 dark:text-purple-400" />
              <h4 className="text-lg font-semibold text-purple-900 dark:text-purple-100">
                Choose JWT For:
              </h4>
            </div>
            <ul className="space-y-2 text-sm text-purple-800 dark:text-purple-200">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span>Mobile apps and SPAs (Single Page Apps)</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span>Microservices architecture</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span>APIs consumed by third-party clients</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span>Distributed systems without shared storage</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span>When server-side storage is expensive/complex</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
