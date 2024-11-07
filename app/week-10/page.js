"use client";
import React, { useState } from "react";
import { useUserAuth } from "./_utils/auth-context";
import Link from "next/link";

export default function Page() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();
  const [loading, setLoading] = useState(false);

  const handleAuth = async () => {
    setLoading(true);
    try {
      await gitHubSignIn();
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      {user ? (
        <div>
          <p className="text-4xl font-bold mb-5">Shopping List App</p>
          Signed in as: {user.displayName} ({user.email})
          <div>
            <button onClick={firebaseSignOut}>Sign out</button>
          </div>
          <div>
            <Link href="week-10/shopping-list">
              Continue to your Shopping List
            </Link>
          </div>
        </div>
      ) : (
        <div>
          <p className="text-4xl font-bold mb-5">
            {loading ? "Authenticating..." : "Shopping List App"}
          </p>
          <button className="text-lg" onClick={handleAuth} disabled={loading}>
            Sign in with GitHub
          </button>
        </div>
      )}
    </div>
  );
}
