import React, { useState } from "react";
import { Button, ConfigProvider, Form, Input, message, Typography } from "antd";
import { Container, Box } from "@mui/material";
import { TinyColor } from "@ctrl/tinycolor";
import useUser from "../../contexts/userContext";

export default function Login() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const { login, isAuthenticated } = useUser();
  if (isAuthenticated) {
    return <></>;
  }
  const handleSubmit = async (values) => {
    setLoading(true);
    setError("");
    try {
      const response = await login(values); // Await the mutateAsync function
      console.log(response);

      if (response.token) {
        message.success("Login successful", 1);
      } else {
        throw new Error(response.message || "Unexpected error occurred");
      }
    } catch (error) {
      console.error(error);
      message.error(error.message, 1);
    } finally {
      setLoading(false);
    }
  };

  const handleFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  const colors3 = [
    "#2196f3",
    "#4682b4",
    "#6495ed",
    "#ff3737",
    "#ff6b6b",
    "#ff8c8c",
  ];
  const getHoverColors = (colors) =>
    colors.map((color) => new TinyColor(color).lighten(5).toString());
  const getActiveColors = (colors) =>
    colors.map((color) => new TinyColor(color).darken(5).toString());

  return (
    <Container
      component="main"
      maxWidth="xs"
      className="bg-white bg-glass py-3 mt-4 mainContent-body"
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography component="h1" variant="h5">
          <span className="poppins-medium text-capitalize">Sign in</span>
        </Typography>
        {error && (
          <Typography color="error" className="poppins-light text-danger">
            {error}
          </Typography>
        )}
        <Form
          name="loginForm"
          initialValues={{ remember: true }}
          onFinish={handleSubmit}
          onChange={() => setError(null)}
          onFinishFailed={handleFinishFailed}
          style={{ width: "100%", marginTop: 16 }}
        >
          <Form.Item
            name="email" // Use "email" instead of "useremail" for better clarity
            rules={[{ required: true, message: "Please input your email!" }]}
          >
            <Input
              size="large"
              type="email"
              placeholder="Email Address"
              className=""
            />
          </Form.Item>

          <Form.Item
            name="password" // Use "password" instead of "userpassword" for better clarity
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password
              size="large"
              placeholder="Password"
              className="poppins-light"
            />
          </Form.Item>

          <Form.Item>
            <ConfigProvider
              theme={{
                components: {
                  Button: {
                    colorPrimary: `linear-gradient(116deg,  ${colors3.join(
                      ", "
                    )})`,
                    colorPrimaryHover: `linear-gradient(116deg, ${getHoverColors(
                      colors3
                    ).join(", ")})`,
                    colorPrimaryActive: `linear-gradient(116deg, ${getActiveColors(
                      colors3
                    ).join(", ")})`,
                    lineWidth: 0,
                  },
                },
              }}
            >
              <Button
                type="primary"
                size="large"
                htmlType="submit"
                block
                loading={loading}
                className="rounded-0 mt-2 poppins-medium"
              >
                Login
              </Button>
            </ConfigProvider>
          </Form.Item>
        </Form>
      </Box>
    </Container>
  );
}
