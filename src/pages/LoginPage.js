import { Form } from 'antd';

export default function LoginPage() {
    return <div>
        <Form>
            <Form.Item key='login' name='login' label='로그인 Login' rules={[{ warningOnly: true, message: '로그인 Login' }]}> 
                <p>로그인 Login</p>
            </Form.Item>
        </Form>
    </div>;
}