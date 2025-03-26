"use client"

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { supabase } from "../utils/anonClient";

export default function HomePage() {
  const params = useParams();
  const template_id = params.template_id;
  const email = params.email;
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");

  useEffect(() => {
 
    console.log(params)
    if (template_id && email) {
      console.log(template_id, email)
      // addUser(template_id, email);
    }
  }, []); // Runs when the URL parameters change

  async function addUser(template_id: number, email: string) {
    const { data, error } = await supabase.from("phishing_test").insert([{ template_id, email }]);

    if (error) {
      setMessage("Error: " + error.message);
    } else {
      setMessage("User added successfully!");
    }

    setLoading(false);
  }

  return (
    <div>
      <h1 className="text-white">Add User</h1>
      {loading ? <p className="text-green-300">Processing...</p> : <p>{message}</p>}
    </div>
  );
}
