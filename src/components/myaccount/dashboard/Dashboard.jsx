import Link from "next/link";
import React from "react";

const Dashboard = () => {
  return (
    <div className="dashboard-content">
      <p>
        Hello <strong>grtesting</strong> (not <strong>grtesting</strong>?
        <a>Log out</a>)
      </p>
      <p>
        From your account dashboard you can view your{" "}
        <Link href="/my-account/orders/">recent orders</Link>, manage your{" "}
        <Link href="/my-account/edit-address/">
          shipping and billing addresses
        </Link>
        , and
        <Link href="/my-account/edit-account/">
          edit your password and account details{" "}
        </Link>
        .
      </p>
    </div>
  );
};

export default Dashboard;
