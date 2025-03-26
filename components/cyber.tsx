import React from "react";

const CyberSecurityInfo = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto bg-white rounded-xl">
      <h1 className="text-2xl font-bold text-red-600 text-center">
        You're lucky! This could have been a phishing email...
      </h1>
      <p className="mt-5 text-gray-600">
        The email you just clicked on is part of an authorised cyber-attack
        simulation of <strong>RILA GLOBAL CONSULTING</strong>. The aim is to
        show you what you need to watch out for in order to identify and prevent
        these kinds of attacks.
      </p>
      <p className="mt-2 font-semibold text-green-600">
        There is no danger to you, your data or your device—the simulation is
        for training purposes only.
      </p>
      {/* <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700">
        Start Explanation
      </button> */}

      <h2 className="mt-8 text-xl font-bold text-red-600 text-center">
        How to recognize phishing emails
      </h2>
      <ul className="list-disc pl-5 mt-5 text-gray-700">
        <li>
          <strong>Fear generation:</strong> Creating a sense of urgency can push
          people to act hastily. Stay calm and analyze the request carefully.
        </li>
        <li>
          <strong>Accusation:</strong> Designed to create fear and make the
          recipient justify themselves. Always assess the situation before
          reacting.
        </li>
        <li>
          <strong>Fake link:</strong> Links may redirect to fake login pages or
          download malware. Always hover over links to check the actual URL.
        </li>

        <li>
          <strong>Fake sender / Domain spoofing:</strong> Hackers can use a
          technique called "domain spoofing" to fake any real or fictitious
          email address. If you are suspicious, try to contact the sender via
          another channel to verify their identity.
        </li>
        {/* <li>
          <strong>Fake signature:</strong> Attackers may forge signatures to appear legitimate. Always compare signatures with known originals.
        </li> */}
      </ul>


      <h2 className="mt-8 text-xl font-bold text-blue-700 text-center">
        Brief 101 on Cyber Security
      </h2>
      <h3 className="mt-5 text-lg font-semibold text-black">
        What is Social Engineering?
      </h3>
      <p className="mt-2 text-gray-700">
        Social engineering is about manipulating or deceiving people to gain
        control over their systems. Attackers contact victims via email, social
        media, phone, or even in person to gain illegal access to sensitive
        data.
      </p>
      <h3 className="mt-4 text-lg font-semibold text-black">
        What is Phishing?
      </h3>
      <p className="mt-2 text-gray-700">
        Phishing involves attempting to steal sensitive information by
        pretending to be a trusted entity. Mass emails are sent, often bypassing
        spam filters, to deceive recipients into giving up their credentials.
      </p>
      <h3 className="mt-4 text-lg font-semibold text-black">
        What is Spear Phishing?
      </h3>
      <p className="mt-2 text-gray-700">
        A targeted phishing attack against a specific organization, using
        personalized details to increase credibility. This tactic enhances the
        effectiveness of scams, making them more dangerous.
      </p>
      <h3 className="mt-4 text-lg font-semibold text-black">
        What is CEO Fraud?
      </h3>
      <p className="mt-2 text-gray-700">
        In CEO fraud, scammers impersonate executives to pressure employees into
        taking immediate action, such as transferring money or sharing sensitive
        data.
      </p>

      <p className="mt-5 text-gray-700">Email <strong>duyen@rilaglobal.com</strong> if you have any question or suspect an email is phishing.</p>

    </div>
  );
};

export default CyberSecurityInfo;
