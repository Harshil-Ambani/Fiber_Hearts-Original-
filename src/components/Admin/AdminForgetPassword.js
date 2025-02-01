import React from 'react';
import { Button, Card, CardContent } from "../UI/Card"; // Correct import path

const AdminForgotPassword = () => {
  return (
    <Card>
      <CardContent>
        <h3 className="text-lg font-semibold">Forgot Password</h3>
        {/* Add your forgot password form here */}
        <p>Forgot password form content goes here.</p>
        <Button onClick={() => window.location.href = "/adminauthpage"}>Back to Login</Button>
      </CardContent>
    </Card>
  );
};

export default AdminForgotPassword;
