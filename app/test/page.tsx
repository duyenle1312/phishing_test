"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { supabase } from "../../utils/anonClient";
import CyberSecurityInfo from "@/components/cyber";

export default function HomePage() {
  const searchParams = useSearchParams();

  const template_id = searchParams.get("template_id");
  const email = searchParams.get("email");

  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (template_id && email) {
      console.log(template_id, email);
      addUser(parseInt(template_id), email);
    }
  }, [template_id, email]); // Runs when the URL parameters change

  async function addUser(template_id: number, email: string) {
    if (!template_id || !email) {
      console.log("Both template_id and email are required.");
    } else {
      // Step 1: Check if the pair (template_id, email) exists
      const { data, error } = await supabase
        .from("phishing_test")
        .select("id, number_of_click")
        .eq("template_id", template_id)
        .eq("email", email)
        .single();

      if (error && error.code !== "PGRST116") {
        // Ignore "PGRST116" (no rows found)
        console.log("Error fetching data:", error.message);
        return { success: false, message: "Database error." };
      }

      if (data) {
        // Step 2: If found, update the record
        console.log(data)
        const { error } = await supabase
          .from("phishing_test")
          .update({
            number_of_click: data.number_of_click + 1,
            latest_timestamp: new Date(), // Update timestamp
          })
          .eq("id", data.id);

        if (error) {
          console.log("Error updating record:", error.message);
          return { success: false, message: "Error updating record." };
        }

        console.log("Click count updated.");
        return { success: true, message: "Click count updated." };
      } else {
        // Step 3: If not found, insert a new row
        const { error: insertError } = await supabase
          .from("phishing_test")
          .insert([{ template_id, email, number_of_click: 1 }]);

        if (insertError) {
          console.log("Error inserting record:", insertError.message);
          return { success: false, message: "Error inserting record." };
        }

        console.log("New user click tracked.");
        return { success: true, message: "New user click tracked." };
      }
    }

    setLoading(false);
  }

  return (
    <div>
      <CyberSecurityInfo />
      {loading ? (
        <p className="text-white-300">Processing...</p>
      ) : (
        <p className="text-red-600">{message}</p>
      )}
    </div>
  );
}
