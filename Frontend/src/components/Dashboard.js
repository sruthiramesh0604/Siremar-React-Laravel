import React, { useState } from "react";
import ResidentDashboard from "./ResidentDashboard";
import InspectorDashboard from "./InspectorDashboard";
import AdminDashboard from "./AdminDashboard";

export default function Dashboard() {
  const [user, setUser] = useState(
    JSON.parse(window.sessionStorage.getItem("user"))
  );

  if (user.userType === "RE") {
    return <ResidentDashboard />;
  } else if (user.userType === "IP") {
    return <InspectorDashboard />;
  } else if (user.userType === "AD") {
    return <AdminDashboard />;
  } else {
    return <div></div>;
  }
}
