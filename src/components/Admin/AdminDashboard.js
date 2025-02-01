import React from 'react';
import { Card, CardContent } from "../UI/Card"; // Correct import path

const AdminDashboard = () => {
  return (
    <Card>
      <CardContent>
        <h3 className="text-lg font-semibold">Admin Dashboard</h3>
        <p>Welcome to the admin dashboard!</p>
      </CardContent>
    </Card>
  );
};

export default AdminDashboard;
