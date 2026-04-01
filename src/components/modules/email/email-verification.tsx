import * as React from 'react';
import { Html, Head, Body, Container, Section, Text, Button, Tailwind } from '@react-email/components';

type EmailVerificationProps = {
  url: string;
};

const EmailVerification = ({ url }: EmailVerificationProps) => {
  return (
    <Html lang="en" dir="ltr">
      <Tailwind>
        <Head />
        <Body className="bg-gray-100 font-sans py-[40px]">
          <Container className="bg-white rounded-[8px] p-[32px] max-w-[600px] mx-auto">
            <Section>
              <Text className="text-[24px] font-bold text-gray-900 mb-[16px] text-center">
                Verify Your Email Address
              </Text>

              <Text className="text-[16px] text-gray-700 mb-[24px] leading-[24px]">
                Thank you for signing up! To complete your registration and secure your account, please verify your
                email address by clicking the button below.
              </Text>

              <Section className="text-center mb-[32px]">
                <Button
                  href={url}
                  className="bg-blue-600 text-white px-[32px] py-[12px] rounded-[6px] text-[16px] font-semibold no-underline box-border"
                >
                  Verify Email Address
                </Button>
              </Section>

              <Text className="text-[14px] text-gray-600 mb-[16px] leading-[20px]">
                This verification link will expire in 24 hours. If you didn't create an account, you can safely ignore
                this email.
              </Text>

              <Text className="text-[12px] text-gray-500 leading-[16px]">
                If the button doesn't work, copy and paste this link into your browser:
                <br />
                {url}
              </Text>
            </Section>

            {/* Footer */}
            <Section className="border-t border-gray-200 pt-[24px] mt-[32px]">
              <Text className="text-[12px] text-gray-500 text-center m-0">
                © 2025 Your Company Name. All rights reserved.
              </Text>
              <Text className="text-[12px] text-gray-500 text-center m-0">123 Business Street, Lima, PE 15001</Text>
              <Text className="text-[12px] text-gray-500 text-center m-0">
                <a href="#" className="text-gray-500 no-underline">
                  Unsubscribe
                </a>
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default EmailVerification;
