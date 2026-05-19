import { Html, Head, Body, Container, Section, Text, Button, Tailwind } from '@react-email/components';

type OrganizationInvitationEmailProps = {
  organizationName: string;
  inviterName: string;
  inviteUrl: string;
};

const OrganizationInvitationEmail = ({ organizationName, inviterName, inviteUrl }: OrganizationInvitationEmailProps) => {
  return (
    <Html lang="en" dir="ltr">
      <Tailwind>
        <Head />
        <Body className="bg-gray-100 font-sans py-10">
          <Container className="bg-white rounded-xl p-8 max-w-150 mx-auto">
            <Section>
              <Text className="text-[24px] font-bold text-gray-900 mb-4 text-center">
                You have been invited to join {organizationName}
              </Text>

              <Text className="text-[16px] text-gray-700 mb-6 leading-6">
                {inviterName} has invited you to join <strong>{organizationName}</strong> on our platform. Click the button below to accept the invitation and get started.
              </Text>

              <Section className="text-center mb-8">
                <Button
                  href={inviteUrl}
                  className="bg-blue-600 text-white px-8 py-3 rounded-[6px] text-[16px] font-semibold no-underline box-border"
                >
                  Accept Invitation
                </Button>
              </Section>

              <Text className="text-[14px] text-gray-600 mb-4 leading-5">
                This invitation will expire in 48 hours. If you were not expecting this invitation, you can safely ignore this email.
              </Text>

              <Text className="text-[12px] text-gray-500 leading-4">
                If the button doesn't work, copy and paste this link into your browser:
                <br />
                {inviteUrl}
              </Text>
            </Section>

            <Section className="border-t border-gray-200 pt-6 mt-8">
              <Text className="text-[12px] text-gray-500 text-center m-0">
                &copy; 2025 Your Company Name. All rights reserved.
              </Text>
              <Text className="text-[12px] text-gray-500 text-center m-0">123 Business Street, Lima, PE 15001</Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default OrganizationInvitationEmail;
