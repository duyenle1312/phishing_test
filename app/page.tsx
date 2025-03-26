import { supabase } from '@/utils/anonClient';
export default async function Instruments() {
  const { data: user_activities } = await supabase.from("phishing_test").select();
  return <pre>{JSON.stringify(user_activities, null, 2)}</pre>
}

// import Hero from "@/components/hero";
// import ConnectSupabaseSteps from "@/components/tutorial/connect-supabase-steps";
// import SignUpUserSteps from "@/components/tutorial/sign-up-user-steps";
// import { hasEnvVars } from "@/utils/supabase/check-env-vars";

// export default async function Home() {
//   return (
//     <>
    
//       <Hero />
//       <main className="flex-1 flex flex-col gap-6 px-4">
//         <h2 className="font-medium text-xl mb-4">Next steps</h2>
//         {hasEnvVars ? <SignUpUserSteps /> : <ConnectSupabaseSteps />}
//       </main>
//     </>
//   );
// }
