import { Body, Button, Container, Head, Html, Section, Tailwind, Text } from '@react-email/components';

type PasswordResetEmailProps = {
  url: string;
};

const PasswordResetEmail = ({ url }: PasswordResetEmailProps) => {
  return (
    <Html lang="en" dir="ltr">
      <Tailwind>
        <Head />
        <Body className="bg-gray-100 font-sans py-10">
          <Container className="bg-white rounded-xl p-8 max-w-150 mx-auto">
            <Section>
              <Text className="text-[24px] font-bold text-gray-900 mb-4 text-center">Reset Your Password</Text>

              <Text className="text-[16px] text-gray-700 mb-6 leading-6">
                We received a request to reset your password. Click the button below to choose a new password. If you
                didn&apos;t request this, you can safely ignore this email.
              </Text>

              <Section className="text-center mb-8">
                <Button
                  href={url}
                  className="bg-blue-600 text-white px-8 py-3 rounded-[6px] text-[16px] font-semibold no-underline box-border"
                >
                  Reset Password
                </Button>
              </Section>

              <Text className="text-[14px] text-gray-600 mb-4 leading-5">
                This link will expire in 24 hours. If you did not request a password reset, no action is needed — your
                account remains secure.
              </Text>

              <Text className="text-[12px] text-gray-500 leading-4">
                If the button doesn&apos;t work, copy and paste this link into your browser:
                <br />
                {url}
              </Text>
            </Section>

            {/* Footer */}
            <Section className="border-t border-gray-200 pt-6 mt-8">
              <Text className="text-[12px] text-gray-500 text-center m-0">
                © 2025 Your Company Name. All rights reserved.
              </Text>
              <Text className="text-[12px] text-gray-500 text-center m-0">123 Business Street, Lima, PE 15001</Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default PasswordResetEmail;
