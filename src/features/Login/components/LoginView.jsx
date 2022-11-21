import { Card, Col, Form, Input } from "antd";
import { Checkbox } from "antd";
import { UilUser } from "@iconscout/react-unicons";
import { UilLockAlt } from "@iconscout/react-unicons";
import React from "react";
import { Link } from "react-router-dom";

export default function LoginView() {
  return (
    <div className="background-form">
      <Card className="background-card1">
        <img
          className="logo"
          src="https://cdn.vectorstock.com/i/preview-1x/55/60/quy-letter-logo-design-on-black-background-vector-41975560.jpg"
          alt="hinhhu"
        />

        <h3 className="title1">ĐÂY LÀ ƯƠM</h3>
        <p className="title1">
          Trong một không gian xanh rợp bóng cây, <br />
          chúng tôi gieo mềm và đón nhận những trãi <br /> nghiệm thú vị cùng vô
          số ý tưởng mới.
        </p>
        <p style={{ color: "white", textAlign: "center", marginTop: 150 }}>
          Don't have an account? <br />
          Register
        </p>
      </Card>

      <Card className="background-card2">
        <h2 className="title2">Sign In</h2>
        <Form>
          <Input
            prefix={<UilUser />}
            className="input-text"
            type=" text"
            placeholder="Tên tài khoản"
            rules={[
              {
                required: true,
                message: "Please input your username!",
              },
            ]}
          />
          <br />
          <Input
            prefix={<UilLockAlt />}
            className="input-password"
            type="password"
            placeholder="Mật khẩu"
          />
          <br />
          <Checkbox className="checkbox">Remember me</Checkbox>

          <Link className="Forgot" to={"/"}>
            Forgot Password
          </Link>
          <br />
          <button className="button">Login</button>
        </Form>
      </Card>
    </div>
  );
}
