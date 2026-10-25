"use client";

import { Suspense, useEffect, useRef } from "react";
import { useSearchParams } from "next/navigation";
import { supabase } from "../../utils/anonClient";
import CyberSecurityInfo from "@/components/cyber";

/**
 * Records a click for a given (template_id, email) pair.
 * If the pair already exists, increment its click count; otherwise insert it.
 * Failures are logged but never surfaced to the recipient — the educational
 * page should always render regardless of what the database does.
 */
async function recordClick(template_id: number, email: string) {
  const { data, error } = await supabase
    .from("phishing_test")
    .select("id, number_of_click")
    .eq("template_id", template_id)
    .eq("email", email)
    .maybeSingle();

  if (error) {
    console.error("Error fetching click record:", error.message);
    return;
  }

  if (data) {
    const { error: updateError } = await supabase
      .from("phishing_test")
      .update({
        number_of_click: data.number_of_click + 1,
        latest_timestamp: new Date().toISOString(),
      })
      .eq("id", data.id);

    if (updateError) {
      console.error("Error updating click record:", updateError.message);
    }
    return;
  }

  const { error: insertError } = await supabase.from("phishing_test").insert([
    {
      template_id,
      email,
      number_of_click: 1,
      latest_timestamp: new Date().toISOString(),
    },
  ]);

  if (insertError) {
    console.error("Error inserting click record:", insertError.message);
  }
}

function ClickTracker() {
  const searchParams = useSearchParams();
  const hasTracked = useRef(false);

  useEffect(() => {
    // Guard against React StrictMode firing the effect twice in development,
    // which would double-count a single click.
    if (hasTracked.current) return;

    const template_id = Number(searchParams.get("template_id"));
    const email = searchParams.get("email")?.trim() ?? "";

    if (Number.isInteger(template_id) && template_id > 0 && email) {
      hasTracked.current = true;
      recordClick(template_id, email);
    }
  }, [searchParams]);

  return null;
}

export default function Landing() {
  return (
    <div className="w-full">
      <Suspense fallback={null}>
        <ClickTracker />
      </Suspense>
      <CyberSecurityInfo />
    </div>
  );
}
